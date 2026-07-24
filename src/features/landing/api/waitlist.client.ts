import { ApiError } from '@/shared/errors/api-error';
import type { WaitlistInput, WaitlistResponse } from '../contracts/waitlist.contract';

export const joinWaitlist = async (input: WaitlistInput): Promise<WaitlistResponse> => {
  const res = await fetch('/api/waitlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  });

  const payload = await res.json().catch(() => null);

  if (!res.ok) {
    throw new ApiError(payload?.message ?? 'Request failed', res.status === 422 ? 'VALIDATION' : 'UNKNOWN', {
      status: res.status,
      code: payload?.code,
      details: payload?.details,
    });
  }

  return payload as WaitlistResponse;
};
