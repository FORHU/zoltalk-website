'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import localFont from 'next/font/local';
import { PulsingDot } from './PulsingDot';
import { BRAND_LOCKUP_WIDTH } from './brandLockupWidth';

const abandon = localFont({
  src: '../../../shared/assets/fonts/abandon/Abandon Bold.otf',
  weight: '700',
  style: 'normal',
  display: 'swap',
});

export type LoadingPhase = 'loading' | 'wordmark' | 'expanding';

interface LoadingSequenceProps {
  progress: number;
  phase: LoadingPhase;
  onExpandComplete?: () => void;
}

// Large enough that the growing circle fully covers any real viewport from an off-center origin.
const EXPAND_SIZE = 6000;
const EXPAND_DURATION_MS = 800;

export function LoadingSequence({ progress, phase, onExpandComplete }: LoadingSequenceProps) {
  const dotWrapRef = useRef<HTMLDivElement>(null);
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);
  const [growing, setGrowing] = useState(false);

  const expanding = phase === 'expanding';
  const showWordmark = phase === 'wordmark' || phase === 'expanding';

  useLayoutEffect(() => {
    if (expanding && dotWrapRef.current && !origin) {
      const rect = dotWrapRef.current.getBoundingClientRect();
      setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanding]);

  // Mount the circle at its start size first, then flip to the target size on the next
  // frame so the width/height CSS transition actually has something to animate between.
  useEffect(() => {
    if (origin && !growing) {
      const timer = setTimeout(() => setGrowing(true), 20);
      return () => clearTimeout(timer);
    }
  }, [origin, growing]);

  useEffect(() => {
    if (growing) {
      const timer = setTimeout(() => onExpandComplete?.(), EXPAND_DURATION_MS);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [growing]);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center gap-3 px-8"
      style={{ backgroundColor: '#e5e1d5' }}
    >
      <div className="flex items-center gap-2" style={{ opacity: expanding ? 0 : 1, transition: 'opacity 0.25s ease' }}>
        <div ref={dotWrapRef} className="shrink-0">
          <PulsingDot size={16} ripple={!expanding} />
        </div>

        <AnimatePresence>
          {showWordmark && (
            <motion.span
              key="wordmark"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className={`${abandon.className} text-4xl whitespace-nowrap`}
            >
              <span style={{ color: '#000000' }}>Zol</span>
              <span style={{ color: '#ff4a24' }}>Talk</span>
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{
          backgroundColor: 'rgba(28, 26, 20, 0.14)',
          width: BRAND_LOCKUP_WIDTH,
          opacity: expanding ? 0 : 1,
          transition: 'opacity 0.25s ease',
        }}
      >
        <div
          className="h-full rounded-full transition-[width] duration-300 ease-out"
          style={{ width: `${progress}%`, backgroundColor: '#ff4a24' }}
        />
      </div>

      {origin && (
        <div
          style={{
            position: 'fixed',
            left: origin.x,
            top: origin.y,
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#FF4A24',
            borderRadius: '50%',
            width: growing ? EXPAND_SIZE : 16,
            height: growing ? EXPAND_SIZE : 16,
            transition: `width ${EXPAND_DURATION_MS}ms cubic-bezier(0.65,0,0.35,1), height ${EXPAND_DURATION_MS}ms cubic-bezier(0.65,0,0.35,1)`,
          }}
        />
      )}
    </div>
  );
}
