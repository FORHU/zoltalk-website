import { SectionCard } from '../components/SectionCard';

export function VisionMission() {
  return (
    <SectionCard bg="white" id="vision" className="py-32 px-8">
      <img
        src="/images/vision-mission/vision-mission-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-zt-bg/70 via-zt-bg/90 to-zt-bg" />

      <div className="relative max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Vision */}
        <div className="bg-zt-coral p-12 rounded-3xl text-center">
          <h3 className="text-zt-white font-zt-utility text-xs uppercase tracking-[0.08em] mb-4">
            VISION
          </h3>
          <p className="text-zt-white font-zt-display text-2xl leading-relaxed">
            Prevents drowsy driving by all drivers and creates a safe driving culture with the development of automobile technology in the 21st century.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-zt-charcoal p-12 rounded-3xl text-center">
          <h3 className="text-zt-white font-zt-utility text-xs uppercase tracking-[0.08em] mb-4">
            MISSION
          </h3>
          <p className="text-zt-white font-zt-display text-2xl leading-relaxed">
            Reduce global drowsiness by 50%, provide services in various languages, acquire 100 million users in three years.
          </p>
        </div>
      </div>
    </SectionCard>
  );
}
