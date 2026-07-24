import { z } from 'zod';

export const WaitlistInputSchema = z.object({
  email: z.string().email('Enter a valid email address'),
});

export type WaitlistInput = z.infer<typeof WaitlistInputSchema>;

export const WaitlistResponseSchema = z.object({
  ok: z.literal(true),
});

export type WaitlistResponse = z.infer<typeof WaitlistResponseSchema>;
