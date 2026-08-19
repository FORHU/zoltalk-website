'use client';

import { useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { useJoinWaitlist } from '@/features/landing/hooks/waitlist.hooks';

interface ClosingCTAProps {
  ctaLabel: string;
  waitlistUrl: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ClosingCTA({ ctaLabel }: ClosingCTAProps) {
  const label = ctaLabel.replace(/→\s*$/, '').trim();
  const [email, setEmail] = useState('');
  const [fieldError, setFieldError] = useState<string | null>(null);
  const isValidEmail = EMAIL_PATTERN.test(email);

  const { mutate, isPending, isSuccess } = useJoinWaitlist({
    onValidationError: (fields) => setFieldError(fields.email?.[0] ?? 'Enter a valid email address'),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFieldError(null);
    mutate({ email });
  };

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden"
      style={{ background: '#FF4A24', minHeight: '56vw', display: 'flex', alignItems: 'center' }}
    >
      <div style={{ position: 'relative', zIndex: 1, padding: '5.5vw 5.2% 6.5vw', maxWidth: '52%' }}>
        <h2 className="font-bold" style={{ color: '#FFFEE6', fontSize: 'clamp(30px, 5.7vw, 86px)', margin: 0, letterSpacing: '-0.015em', lineHeight: 1 }}>
          Find your voice.
        </h2>
        <p style={{ color: '#FFFEE6', fontSize: 'clamp(13px, 1.85vw, 27px)', lineHeight: 1.35, margin: '1.8vw 0 0' }}>
          Say the words.
          <br />
          Someone, somewhere, is already listening.
        </p>

        {isSuccess ? (
          <div
            className="flex items-center gap-2 font-bold"
            style={{
              marginTop: '3vw',
              background: '#FFFEE6',
              color: '#141414',
              fontSize: 'clamp(11px, 1.35vw, 20px)',
              padding: '1vw 1.9vw',
              borderRadius: 8,
            }}
          >
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            You&apos;re on the list.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ marginTop: '3vw' }}>
            <div className="flex flex-wrap" style={{ gap: '0.8vw' }}>
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                disabled={isPending}
                className="outline-none border-2 border-transparent transition-colors hover:border-[#141414] focus:border-[#141414] disabled:opacity-60"
                style={{
                  flex: '1 1 200px',
                  background: '#FFFEE6',
                  color: '#141414',
                  fontSize: 'clamp(11px, 1.35vw, 20px)',
                  padding: '1vw 1.9vw',
                  borderRadius: 8,
                }}
              />
              <button
                type="submit"
                disabled={isPending || !isValidEmail}
                className="inline-flex items-center justify-center gap-2 font-bold transition-colors bg-[#FFFEE6] text-[#141414] border-2 border-transparent hover:enabled:bg-[#FF4A24] hover:enabled:text-[#FFFEE6] hover:enabled:border-[#141414] disabled:cursor-default"
                style={{
                  fontSize: 'clamp(11px, 1.35vw, 20px)',
                  padding: '1vw 1.9vw',
                  borderRadius: 8,
                  whiteSpace: 'nowrap',
                  cursor: isPending || !isValidEmail ? 'default' : 'pointer',
                }}
              >
                {isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    <span aria-hidden>←</span> {label}
                  </>
                )}
              </button>
            </div>
            {fieldError && (
              <p style={{ marginTop: '0.8vw', color: '#FFFEE6', fontSize: 'clamp(10px, 1vw, 14px)' }}>{fieldError}</p>
            )}
          </form>
        )}
      </div>
      <img
        src="/launch/floral-hi.png"
        alt="Woman studying with an earbud in"
        style={{ position: 'absolute', right: 0, bottom: 0, height: '112%', width: 'auto' }}
      />
    </section>
  );
}
