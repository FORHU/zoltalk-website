import { useState } from 'react';

const features = [
  {
    title: 'Voice messaging',
    image: '/placeholder-feature-1.png',
  },
  {
    title: 'Hands-free replies',
    image: '/placeholder-feature-2.png',
  },
  {
    title: 'Drowsiness alerts',
    image: '/placeholder-feature-3.png',
  },
];

export function SectionE() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="bg-zt-bg py-24 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Features List */}
        <div>
          <span className="font-zt-utility text-xs uppercase tracking-[0.08em] text-zt-ink/60">
            FEATURES
          </span>
          <div className="mt-8 space-y-6">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`text-left w-full font-zt-display text-3xl leading-tight transition-all duration-300 ${
                  activeFeature === index
                    ? 'text-zt-ink'
                    : 'text-zt-ink/40 hover:text-zt-ink/70'
                }`}
              >
                {feature.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Active Image */}
        <div className="relative h-[500px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                activeFeature === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
