import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { WaitlistInputSchema } from '@/features/landing/contracts/waitlist.contract';

const DATA_DIR = path.join(process.cwd(), '.data');
const DATA_FILE = path.join(DATA_DIR, 'waitlist.json');

interface WaitlistEntry {
  email: string;
  createdAt: string;
}

async function readEntries(): Promise<WaitlistEntry[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function POST(request: NextRequest) {
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
  const entries = await readEntries();

  if (!entries.some((entry) => entry.email === email)) {
    entries.push({ email, createdAt: new Date().toISOString() });
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2));
  }

  return NextResponse.json({ ok: true });
}
