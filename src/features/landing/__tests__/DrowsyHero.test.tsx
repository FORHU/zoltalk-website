import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { DrowsyHero } from '@/features/landing/components/DrowsyHero';
import * as useHeroSequenceModule from '@/features/landing/hooks/useHeroSequence';

// Mock the useHeroSequence hook
let mockPhase: useHeroSequenceModule.Phase = 'day';
let mockReveal: () => void = vi.fn();
const mockHeadline: Headline = {
  title: 'Test Headline',
  source: 'Test Source',
  image: '/landing/test.png',
};

vi.mock('@/features/landing/hooks/useHeroSequence', () => ({
  useHeroSequence: () => ({
    phase: mockPhase,
    currentHeadline: mockHeadline,
    reveal: mockReveal,
  }),
}));

describe('DrowsyHero', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockPhase = 'day';
  });

  it('renders without crashing', () => {
    render(<DrowsyHero />);
    expect(document.body.firstChild).toBeTruthy();
  });

  it('shows ProductReveal when phase is revealed', async () => {
    mockPhase = 'revealed';
    render(<DrowsyHero />);

    await waitFor(() => {
      expect(screen.getByText(/never text and drive again/i)).toBeInTheDocument();
      expect(screen.getByText(/get zoltalk/i)).toBeInTheDocument();
    });
  });

  it('calls reveal when phone button is clicked', async () => {
    mockPhase = 'headlines';
    render(<DrowsyHero />);

    const phoneButton = screen.getByRole('button', { name: /tap to wake up/i });
    fireEvent.click(phoneButton);

    expect(mockReveal).toHaveBeenCalledTimes(1);
  });


});
