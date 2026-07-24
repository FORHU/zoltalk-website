
import { motion } from 'framer-motion';

interface ProductRevealProps {
  isVisible: boolean;
}

export function ProductReveal({ isVisible }: ProductRevealProps) {
  return (
    <motion.div
      layoutId="phone-morph"
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ delay: 0.6 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">ZolTalk</h1>
        <h2 className="text-2xl md:text-4xl text-white/90 mb-2">Never text and drive again.</h2>
        <p className="text-white/70 mb-10 text-lg">
          Hands-free, voice-powered communication designed for the road.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">Voice Messaging</h3>
            <p className="text-white/70 text-sm">TODO: Real feature copy here</p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">Hands-Free Replies</h3>
            <p className="text-white/70 text-sm">TODO: Real feature copy here</p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">Safety-First Design</h3>
            <p className="text-white/70 text-sm">TODO: Real feature copy here</p>
          </div>
        </div>

        <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-full text-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg">
          Get ZolTalk
        </button>
      </motion.div>
    </motion.div>
  );
}
