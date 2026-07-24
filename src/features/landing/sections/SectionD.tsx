export function SectionD() {
  return (
    <section className="bg-zt-charcoal py-24 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-zt-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-zt-white">
          Working with the names that matter in road safety
        </h2>
        <p className="text-zt-white/60 font-zt-body text-lg mt-4 max-w-3xl mx-auto">
          Trusted by leading safety organizations, automakers, and insurers to keep drivers focused.
        </p>

        {/* Logo Row */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-12">
          {[
            'Partner 1',
            'Partner 2',
            'Partner 3',
            'Partner 4',
            'Partner 5',
            'Partner 6',
          ].map((name, index) => (
            <div
              key={index}
              className="text-zt-white/60 hover:text-zt-white transition-opacity duration-300 font-zt-utility text-sm uppercase tracking-[0.08em]"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
