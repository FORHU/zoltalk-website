import { motion } from 'framer-motion';

interface ViewMoreBadgeProps {
  label?: string;
}

export function ViewMoreBadge({ label = 'VIEW MORE' }: ViewMoreBadgeProps) {
  return (
    <motion.button
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-zt-ink text-zt-ink hover:border-zt-coral hover:text-zt-coral transition-colors duration-300"
    >
      <span className="font-zt-utility text-xs tracking-[0.08em] uppercase">{label}</span>
    </motion.button>
  );
}
