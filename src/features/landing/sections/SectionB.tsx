export function SectionB() {
  return (
    <section className="bg-zt-bg py-24 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Collage */}
        <div className="relative h-[600px]">
          {/* Photo 1 */}
          <div className="absolute top-0 left-0 w-64 h-80 bg-zt-line rounded-lg shadow-lg transform rotate-3">
            <img src="/placeholder-1.png" alt="Phone in hand" className="w-full h-full object-cover rounded-lg" />
          </div>
          {/* Photo 2 */}
          <div className="absolute top-24 left-32 w-64 h-80 bg-zt-line rounded-lg shadow-lg transform -rotate-2 z-10">
            <img src="/placeholder-2.png" alt="Road POV" className="w-full h-full object-cover rounded-lg" />
          </div>
          {/* Photo 3 */}
          <div className="absolute top-48 left-8 w-64 h-80 bg-zt-line rounded-lg shadow-lg transform rotate-1">
            <img src="/placeholder-3.png" alt="Calm driver" className="w-full h-full object-cover rounded-lg" />
          </div>
          {/* Photo 4 */}
          <div className="absolute bottom-0 right-0 w-48 h-60 bg-zt-line rounded-lg shadow-lg transform -rotate-1">
            <img src="/placeholder-4.png" alt="UI close-up" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        {/* Text Content */}
        <div>
          <h2 className="font-zt-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-zt-ink">
            Built for the drive
          </h2>
          <p className="text-zt-ink/70 font-zt-body text-lg mt-6 leading-relaxed">
            ZolTalk was designed from the ground up to keep your eyes where they belong — on the road. 
            No more fumbling with your phone, no more glancing down at notifications. 
            Just your voice, your messages, and a focus on safety.
          </p>
          <button className="mt-10 bg-zt-coral text-zt-white px-8 py-4 rounded-full font-zt-utility text-xs uppercase tracking-[0.08em] hover:bg-zt-coral-dim transition-colors">
            About ZolTalk
          </button>
        </div>
      </div>
    </section>
  );
}
