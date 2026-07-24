import { SectionCard } from './SectionCard';

export function BrandMoment() {
  return (
    <SectionCard bg="white" className="py-16 md:py-24">
      <div className="relative flex items-center justify-center px-6">
        <h2 className="font-zt-display font-bold text-zt-coral text-[18vw] md:text-[12rem] leading-none select-none">
          ZolTalk
        </h2>
        <div className="absolute w-40 md:w-56 rounded-3xl overflow-hidden shadow-2xl border-4 border-zt-white rotate-3">
          <img
            src="/images/how-it-works/how-it-works-1.png"
            alt="ZolTalk active on a driver's phone"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </SectionCard>
  );
}
