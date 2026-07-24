
import { useState, useEffect, useRef, useCallback } from 'react';

export type Phase = 'day' | 'dimming' | 'headlines' | 'revealed';

export interface Headline {
  title: string;
  source: string;
  image: string;
}

export const HEADLINES: Headline[] = [
  {
    title: '644 Deaths From Drowsy-Driving-Related Crashes in 2024',
    source: 'NHTSA',
    image: '/landing/headline-nhtsa.png',
  },
  {
    title: 'Teen Falls Asleep at the Wheel, Crashes Into Trooper\'s Cruiser, Police Say',
    source: 'Local News',
    image: '/landing/headline-trooper.png',
  },
];

export function useHeroSequence() {
  const [phase, setPhase] = useState<Phase>('day');
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const timersRef = useRef<NodeJS.Timeout[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const reveal = useCallback(() => {
    clearAllTimers();
    setPhase('revealed');
  }, [clearAllTimers]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setPhase('headlines');
      return;
    }

    // Day phase
    const dayTimer = setTimeout(() => {
      setPhase('dimming');
    }, 3200);
    timersRef.current.push(dayTimer);

    // Dimming phase
    const dimmingTimer = setTimeout(() => {
      setPhase('headlines');
    }, 3200 + 1800);
    timersRef.current.push(dimmingTimer);

    // Headlines loop
    const headlinesStartTimer = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCurrentHeadlineIndex((prev) => (prev + 1) % HEADLINES.length);
      }, 4200);
    }, 3200 + 1800);
    timersRef.current.push(headlinesStartTimer);

    return () => {
      clearAllTimers();
    };
  }, [clearAllTimers]);

  return {
    phase,
    currentHeadline: HEADLINES[currentHeadlineIndex],
    reveal,
  };
}
