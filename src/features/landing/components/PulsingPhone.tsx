
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Phase } from '../hooks/useHeroSequence';

interface PulsingPhoneProps {
  phase: Phase;
  onActivate: () => void;
}

export function PulsingPhone({ phase, onActivate }: PulsingPhoneProps) {
  const isVisible = phase !== 'day';
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mql.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return (
    <div className="fixed right-[14%] top-1/2 -translate-y-1/2 z-30">
      {isVisible && (
        <button
          onClick={onActivate}
          aria-label="Tap to wake up and view ZolTalk"
          className="relative focus:outline-none"
        >
          <motion.div
            layoutId="phone-morph"
            className="w-48 h-80 rounded-3xl bg-black/80 border-2 border-white/20 flex items-center justify-center"
            initial={{ scale: 1, opacity: 1 }}
            animate={
              prefersReducedMotion
                ? { scale: 1, opacity: 1 }
                : {
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      '0 0 30px rgba(255, 80, 0, 0.4)',
                      '0 0 60px rgba(255, 120, 0, 0.7)',
                      '0 0 30px rgba(255, 80, 0, 0.4)',
                    ],
                  }
            }
            transition={
              prefersReducedMotion
                ? {}
                : {
                    scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                    boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                  }
            }
          >
            <span className="text-white font-bold text-2xl">ZolTalk</span>
          </motion.div>

          <motion.span
            className="absolute bottom-[-3rem] left-1/2 -translate-x-1/2 text-white/80 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Tap to wake up
          </motion.span>
        </button>
      )}
    </div>
  );
}
