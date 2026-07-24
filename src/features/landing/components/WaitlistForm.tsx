'use client';

import { useState } from 'react';
import { Loader2, CheckCircle2, ArrowRight } from 'lucide-react';
import { useJoinWaitlist } from '../hooks/waitlist.hooks';

interface WaitlistFormProps {
  dark?: boolean;
  compact?: boolean;
  className?: string;
}

export function WaitlistForm({ dark = false, compact = false, className = '' }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [fieldError, setFieldError] = useState<string | null>(null);

  const { mutate, isPending, isSuccess } = useJoinWaitlist({
    onValidationError: (fields) => setFieldError(fields.email?.[0] ?? 'Enter a valid email address'),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFieldError(null);
    mutate({ email });
  };

  if (isSuccess) {
    return (
      <div
        className={`flex items-center gap-2 justify-center rounded-full px-6 py-4 font-zt-body ${
          dark ? 'bg-zt-white/10 text-zt-white' : 'bg-zt-card text-zt-ink'
        } ${className}`}
      >
        <CheckCircle2 className="h-5 w-5 text-zt-coral shrink-0" />
        You&apos;re on the list — we&apos;ll email you when ZolTalk launches.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          disabled={isPending}
          className={`flex-1 rounded-full px-6 py-4 font-zt-body outline-none transition-colors disabled:opacity-60 ${
            dark
              ? 'bg-zt-white/10 text-zt-white placeholder:text-zt-white/40 border border-zt-line-dark focus:border-zt-white/60'
              : 'bg-zt-card text-zt-ink placeholder:text-zt-ink/40 border border-zt-line focus:border-zt-ink/30'
          } ${compact ? 'py-3 text-sm' : ''}`}
        />
        <button
          type="submit"
          disabled={isPending || !email}
          className="flex items-center justify-center gap-2 bg-zt-coral text-zt-white px-6 py-4 rounded-full font-zt-utility text-sm font-medium hover:bg-zt-coral-dim transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
        >
          {isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              Get Early Access
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
      {fieldError && (
        <p className={`mt-2 text-sm font-zt-body ${dark ? 'text-red-300' : 'text-red-600'}`}>{fieldError}</p>
      )}
    </form>
  );
}
