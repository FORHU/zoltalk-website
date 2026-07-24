'use client';

import { motion, AnimatePresence } from 'framer-motion';
import localFont from 'next/font/local';
import { PulsingDot } from './PulsingDot';
import { BRAND_LOCKUP_WIDTH } from './brandLockupWidth';

const helveticaWorld = localFont({
  src: '../../../shared/assets/fonts/Helvetica-World-Bold.otf',
  weight: '700',
  style: 'normal',
  display: 'swap',
});

interface LoadingSequenceProps {
  progress: number;
  showWordmark: boolean;
}

export function LoadingSequence({ progress, showWordmark }: LoadingSequenceProps) {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center gap-3 px-8"
      style={{ backgroundColor: '#e5e1d5' }}
    >
      <div className="flex items-center gap-2">
        <motion.div layout className="shrink-0">
          <PulsingDot size={16} />
        </motion.div>

        <AnimatePresence>
          {showWordmark && (
            <motion.span
              key="wordmark"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className={`${helveticaWorld.className} text-4xl whitespace-nowrap`}
            >
              <span style={{ color: '#000000' }}>Zol</span>
              <span style={{ color: '#ff4a24' }}>Talk</span>
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ backgroundColor: 'rgba(28, 26, 20, 0.14)', width: BRAND_LOCKUP_WIDTH }}
      >
        <div
          className="h-full rounded-full transition-[width] duration-300 ease-out"
          style={{ width: `${progress}%`, backgroundColor: '#ff4a24' }}
        />
      </div>
    </div>
  );
}
