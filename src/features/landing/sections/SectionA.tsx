import { ViewMoreBadge } from '../components/ViewMoreBadge';

export function SectionA() {
  return (
    <section className="relative w-full h-screen bg-zt-charcoal overflow-hidden">
      {/* Background Placeholder Image */}
      <div className="absolute inset-0 bg-gradient-to-b from-zt-charcoal/50 to-zt-charcoal">
        <img
          src="/placeholder-hero.png"
          alt="Driver POV on the road"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Nav */}
      <nav className="absolute top-0 left-0 w-full z-20 px-8 py-6 flex items-center justify-between">
        <div className="text-zt-white font-zt-display text-2xl font-bold">ZolTalk</div>
        <div className="flex items-center gap-8">
          <a href="#" className="text-zt-white/80 font-zt-utility text-xs uppercase tracking-[0.08em] hover:text-zt-white transition-colors">
            About
          </a>
          <a href="#" className="text-zt-white/80 font-zt-utility text-xs uppercase tracking-[0.08em] hover:text-zt-white transition-colors">
            Features
          </a>
          <a href="#" className="text-zt-white/80 font-zt-utility text-xs uppercase tracking-[0.08em] hover:text-zt-white transition-colors">
            Safety
          </a>
          <a href="#" className="text-zt-white/80 font-zt-utility text-xs uppercase tracking-[0.08em] hover:text-zt-white transition-colors">
            Journal
          </a>
          <button className="bg-zt-coral text-zt-white px-6 py-3 rounded-full font-zt-utility text-xs uppercase tracking-[0.08em] hover:bg-zt-coral-dim transition-colors">
            Get ZolTalk
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-end px-8 pb-24">
        <h1 className="text-zt-white font-zt-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.05] max-w-3xl">
          Never look down again.
        </h1>
        <p className="text-zt-white/70 font-zt-body text-lg mt-4 max-w-2xl">
          Eyes on the road, voice in the car.
        </p>
      </div>

      {/* View More Badge */}
      <div className="absolute bottom-8 right-8 z-20">
        <ViewMoreBadge />
      </div>
    </section>
  );
}
