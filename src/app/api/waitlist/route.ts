import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';
import { Resend } from 'resend';
import { WaitlistInputSchema } from '@/features/landing/contracts/waitlist.contract';

const DATA_DIR = path.join(process.cwd(), '.data');
const DATA_FILE = path.join(DATA_DIR, 'waitlist.json');
const REDIS_KEY = 'zoltalk:waitlist';

interface WaitlistEntry {
  email: string;
  createdAt: string;
}

const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

const ratelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, '1 h'),
      prefix: 'zoltalk:waitlist:ratelimit',
    })
  : null;

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0]!.trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}

async function readLocalEntries(): Promise<WaitlistEntry[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

/** Returns true if the email was newly added (false if it was already on the list). */
async function addEntry(email: string): Promise<boolean> {
  if (redis) {
    const added = await redis.hsetnx(REDIS_KEY, email, { email, createdAt: new Date().toISOString() });
    return added === 1;
  }

  const entries = await readLocalEntries();
  if (entries.some((entry) => entry.email === email)) return false;

  entries.push({ email, createdAt: new Date().toISOString() });
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2));
  return true;
}

async function sendConfirmationEmail(email: string) {
  if (!resend || !process.env.RESEND_FROM_EMAIL) return;

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: email,
      subject: "You're on the ZolTalk waitlist",
      text: "Thanks for signing up! We'll email you as soon as ZolTalk launches.",
    });
  } catch (error) {
    console.error('Failed to send waitlist confirmation email:', error);
  }
}

export async function POST(request: NextRequest) {
  if (ratelimit) {
    const ip = getClientIp(request);
    const { success, reset } = await ratelimit.limit(ip);

    if (!success) {
      const retryAfterSeconds = Math.max(0, Math.ceil((reset - Date.now()) / 1000));
      return NextResponse.json(
        { message: 'Too many attempts. Please try again later.', code: 'RATE_LIMITED' },
        { status: 429, headers: { 'Retry-After': String(retryAfterSeconds) } },
      );
    }
  }

  const body = await request.json().catch(() => null);
  const parsed = WaitlistInputSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: 'Validation failed',
        code: 'VALIDATION',
        details: { email: [parsed.error.issues[0]?.message ?? 'Enter a valid email address'] },
      },
      { status: 422 },
    );
  }

  const email = parsed.data.email.trim().toLowerCase();
  const isNew = await addEntry(email);

  if (isNew) {
    await sendConfirmationEmail(email);
  }

  return NextResponse.json({ ok: true });
}
