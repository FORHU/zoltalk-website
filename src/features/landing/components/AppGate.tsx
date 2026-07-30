'use client';

import { useEffect, useRef, useState } from 'react';
import { LaunchPage } from '../launch/LaunchPage';
import { LoadingSequence } from './LoadingSequence';
import type { LoadingPhase } from './LoadingSequence';
import { useLoadProgress } from '../hooks/useLoadProgress';

const WORDMARK_HOLD_MS = 1400;

export function AppGate() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { progress, ready } = useLoadProgress(containerRef);
  const [phase, setPhase] = useState<LoadingPhase>('loading');
  const [siteVisible, setSiteVisible] = useState(false);
  const [heroStart, setHeroStart] = useState(false);

  useEffect(() => {
    if (ready && phase === 'loading') {
      setPhase('wordmark');
    }
  }, [ready, phase]);

  useEffect(() => {
    if (phase === 'wordmark') {
      const timer = setTimeout(() => setPhase('expanding'), WORDMARK_HOLD_MS);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const handleExpandComplete = () => {
    setHeroStart(true);
    setSiteVisible(true);
  };

  return (
    <>
      <div ref={containerRef} aria-hidden={!siteVisible}>
        <LaunchPage heroStart={heroStart} />
      </div>

      <div
        className={`transition-opacity duration-300 ${siteVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <LoadingSequence progress={progress} phase={phase} onExpandComplete={handleExpandComplete} />
      </div>
    </>
  );
}
