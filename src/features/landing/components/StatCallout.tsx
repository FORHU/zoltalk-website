import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

interface StatCalloutProps {
  number: string | number;
  label: string;
  source?: string;
  dark?: boolean;
}

export function StatCallout({ number, label, source, dark }: StatCalloutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className={`text-[clamp(3rem,8vw,6rem)] font-zt-display ${dark ? 'text-zt-white' : 'text-zt-ink'}`}
      >
        {number}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`font-zt-body text-lg mt-2 ${dark ? 'text-zt-white/70' : 'text-zt-ink/70'}`}
      >
        {label}
      </motion.p>
      {source && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`font-zt-utility text-xs uppercase tracking-[0.08em] mt-2 ${dark ? 'text-zt-white/40' : 'text-zt-ink/40'}`}
        >
          {source}
        </motion.p>
      )}
    </div>
  );
}
