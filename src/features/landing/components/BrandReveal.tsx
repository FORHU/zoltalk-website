'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import localFont from 'next/font/local';
import { BRAND_LOCKUP_WIDTH } from './brandLockupWidth';

const helveticaWorld = localFont({
  src: '../../../shared/assets/fonts/Helvetica-World-Bold.otf',
  weight: '700',
  style: 'normal',
  display: 'swap',
});

export function BrandReveal() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: '#e5e1d5' }}>
      <motion.div layout className="inline-flex flex-col items-stretch gap-3">
        <motion.div layout className="flex items-center gap-2">
          <motion.div layout className="h-4 w-4 rounded-full shrink-0" style={{ backgroundColor: '#ff4a24' }} />

          <AnimatePresence>
            {showText && (
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
        </motion.div>

        <AnimatePresence>
          {showText && (
            <motion.div
              key="underline"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
              className="h-1.5 rounded-full"
              style={{ backgroundColor: '#ff4a24', transformOrigin: 'left', width: BRAND_LOCKUP_WIDTH }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
