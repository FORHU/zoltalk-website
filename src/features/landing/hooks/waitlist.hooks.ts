import { useSafeMutation } from '@/shared/query/useSafeMutation';
import { joinWaitlist } from '../api/waitlist.client';
import type { WaitlistInput, WaitlistResponse } from '../contracts/waitlist.contract';

export function useJoinWaitlist(options?: {
  onValidationError?: (fields: Record<string, string[]>) => void;
}) {
  return useSafeMutation<WaitlistResponse, unknown, WaitlistInput>({
    mutationFn: joinWaitlist,
    onValidationError: options?.onValidationError,
  });
}
