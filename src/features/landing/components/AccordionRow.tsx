'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface AccordionRowProps {
  label: string;
  detail: string;
}

export function AccordionRow({ label, detail }: AccordionRowProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl bg-zt-bg border border-zt-line overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-zt-display text-lg text-zt-ink">{label}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zt-card"
        >
          <Plus className="h-4 w-4 text-zt-ink" strokeWidth={2} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-zt-ink/70 font-zt-body">{detail}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
