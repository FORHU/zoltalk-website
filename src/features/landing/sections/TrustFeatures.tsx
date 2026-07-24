import { SectionCard } from '../components/SectionCard';

const trustFeatures = [
  {
    title: 'User profile',
    description: 'No personal information shared.',
  },
  {
    title: 'Private chat',
    description: 'One connection only, no reconnecting.',
  },
  {
    title: 'Push notification',
    description: 'Accept/decline, opt-in only.',
  },
  {
    title: 'Location',
    description: 'No location or personal data shared.',
  },
];

export function TrustFeatures() {
  return (
    <SectionCard bg="dark" id="trust" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-zt-display font-semibold text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-zt-white text-center">
          Only one conversation
        </h2>
        <p className="text-zt-white/70 font-zt-body text-lg mt-4 max-w-2xl mx-auto text-center">
          Your safety and privacy are our top priority.
        </p>

        {/* Feature Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((feature, index) => (
            <div key={index} className="bg-zt-charcoal-muted p-8 rounded-2xl border border-zt-line-dark text-center">
              <h3 className="font-zt-display text-xl text-zt-white mb-2">
                {feature.title}
              </h3>
              <p className="text-zt-white/60 font-zt-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}
