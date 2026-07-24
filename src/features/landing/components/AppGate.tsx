'use client';

import { useEffect, useRef, useState } from 'react';
import { LandingPage } from './LandingPage';
import { LoadingSequence } from './LoadingSequence';
import { useLoadProgress } from '../hooks/useLoadProgress';

const REVEAL_HOLD_MS = 1400;

export function AppGate() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { progress, ready } = useLoadProgress(containerRef);
  const [siteVisible, setSiteVisible] = useState(false);

  useEffect(() => {
    if (ready) {
      const timer = setTimeout(() => setSiteVisible(true), REVEAL_HOLD_MS);
      return () => clearTimeout(timer);
    }
  }, [ready]);

  return (
    <>
      <div
        ref={containerRef}
        aria-hidden={!siteVisible}
        className={`transition-opacity duration-700 ${siteVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <LandingPage />
      </div>

      <div
        className={`transition-opacity duration-500 ${siteVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <LoadingSequence progress={progress} showWordmark={ready} />
      </div>
    </>
  );
}
