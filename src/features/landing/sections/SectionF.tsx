export function SectionF() {
  return (
    <footer className="bg-zt-charcoal py-24 px-8 relative overflow-hidden">
      {/* Oversized Wordmark Texture */}
      <div className="absolute top-0 right-0 text-[12rem] font-zt-display font-bold text-zt-line-dark/20 select-none -translate-y-1/3 translate-x-1/4">
        ZOLTALK
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Newsletter */}
        <div className="text-center mb-16">
          <p className="text-zt-white/70 font-zt-body text-lg">
            We share updates when there&apos;s something worth sharing.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-zt-charcoal-muted border border-zt-line-dark text-zt-white px-6 py-4 rounded-full w-full sm:w-80 focus:outline-none focus:border-zt-coral transition-colors"
            />
            <button className="bg-zt-coral text-zt-white px-8 py-4 rounded-full font-zt-utility text-xs uppercase tracking-[0.08em] hover:bg-zt-coral-dim transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-12 border-t border-zt-line-dark flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Social Icons */}
          <div className="flex gap-6">
            {['Twitter', 'Instagram', 'LinkedIn'].map((social, index) => (
              <a
                key={index}
                href="#"
                className="text-zt-white/50 hover:text-zt-white transition-colors font-zt-utility text-xs uppercase tracking-[0.08em]"
              >
                {social}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-zt-white/50 font-zt-body text-sm">
            © 2026 ZolTalk. All rights reserved.
          </p>

          {/* Nav Links */}
          <div className="flex gap-8">
            {['About', 'Features', 'Safety', 'Journal'].map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-zt-white/50 hover:text-zt-white transition-colors font-zt-utility text-xs uppercase tracking-[0.08em]"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
