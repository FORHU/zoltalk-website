import { StatCallout } from '../components/StatCallout';
import { SectionCard } from '../components/SectionCard';

const customerTypes = [
  { label: 'Truck drivers', image: '/images/success/success-truck.png' },
  { label: 'Night drivers', image: '/images/success/success-night.png' },
  { label: 'Long drivers', image: '/images/success/success-longhaul.png' },
  { label: 'Train/subway operators', image: '/images/success/success-transit.png' },
  { label: 'Bus drivers', image: '/images/success/success-bus.png' },
  { label: 'All drivers', image: '/images/success/success-alldrivers.png' },
];

export function SuccessFactors() {
  return (
    <SectionCard bg="white" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-zt-display font-semibold text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-zt-ink text-center">
          Who it&apos;s for
        </h2>

        {/* Stats Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCallout number="75%" label="Loneliness of driving" />
          <StatCallout number="90%" label="Loneliness alone" />
          <StatCallout number="67%" label="Tired driving" />
        </div>

        {/* Customer Types */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
          {customerTypes.map((type) => (
            <div key={type.label} className="rounded-2xl overflow-hidden border border-zt-line bg-zt-card">
              {type.image ? (
                <div className="h-40">
                  <img src={type.image} alt={type.label} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="h-40 bg-zt-card" />
              )}
              <p className="text-center py-3 text-zt-ink font-zt-body">{type.label}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}
