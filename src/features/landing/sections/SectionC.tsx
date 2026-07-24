export function SectionC() {
  return (
    <section className="bg-zt-bg py-32 px-8 relative overflow-hidden">
      {/* Scattered Floating Photos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 w-24 h-24 rounded-lg shadow-lg transform rotate-6">
          <img src="/placeholder-small-1.png" alt="" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="absolute top-32 right-24 w-20 h-20 rounded-lg shadow-lg transform -rotate-3">
          <img src="/placeholder-small-2.png" alt="" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="absolute bottom-24 left-1/4 w-28 h-28 rounded-lg shadow-lg transform rotate-2">
          <img src="/placeholder-small-3.png" alt="" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="absolute bottom-16 right-16 w-20 h-20 rounded-lg shadow-lg transform -rotate-6">
          <img src="/placeholder-small-4.png" alt="" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <span className="font-zt-utility text-xs uppercase tracking-[0.08em] text-zt-ink/60">
          VISION
        </span>
        <blockquote className="font-zt-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.2] text-zt-ink mt-8">
          "The goal isn't another notification.
          <br />
          It's one less reason to look down."
        </blockquote>
        <p className="text-zt-ink/50 font-zt-body mt-8">
          — ZolTalk Team
        </p>
      </div>
    </section>
  );
}
