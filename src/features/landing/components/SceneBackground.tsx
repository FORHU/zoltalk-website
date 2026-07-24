
import { motion } from 'framer-motion';
import { Phase } from '../hooks/useHeroSequence';

interface SceneBackgroundProps {
  phase: Phase;
}

export function SceneBackground({ phase }: SceneBackgroundProps) {
  const isDay = phase === 'day';
  const isDimming = phase === 'dimming';
  const isHeadlines = phase === 'headlines';
  const isRevealed = phase === 'revealed';

  return (
    <div className="fixed inset-0 overflow-hidden">
      <motion.img
        src="/landing/driver-pov-day.png"
        alt="Driver POV during the day"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 1 }}
        animate={{ opacity: isDay ? 1 : 0 }}
        transition={{ duration: 1.8 }}
      />

      <motion.img
        src="/landing/driver-pov-dark.png"
        alt="Driver POV at night/dark"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0, filter: 'blur(20px) saturate(0)' }}
        animate={{
          opacity: isRevealed ? 0 : 1,
          filter: isDay
            ? 'blur(20px) saturate(0)'
            : isRevealed
            ? 'blur(20px) saturate(0) brightness(0)'
            : 'blur(0px) saturate(0.7) brightness(0.55)',
        }}
        transition={{ duration: 1.8 }}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/60"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHeadlines ? 0.35 : isRevealed ? 1 : 0,
        }}
        transition={{ duration: 1.8 }}
      />
    </div>
  );
}
