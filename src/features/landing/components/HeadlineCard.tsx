
import { motion, AnimatePresence } from 'framer-motion';
import { Headline } from '../hooks/useHeroSequence';

interface HeadlineCardProps {
  headline: Headline;
  isVisible: boolean;
}

export function HeadlineCard({ headline, isVisible }: HeadlineCardProps) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key={headline.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-6 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
              {headline.title}
            </h2>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 inline-flex items-center gap-4">
              <img
                src={headline.image}
                alt="Headline thumbnail"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <span className="text-white/80 text-sm font-medium">— {headline.source}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
