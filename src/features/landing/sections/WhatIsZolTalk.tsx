import { SectionCard } from '../components/SectionCard';

export function WhatIsZolTalk() {
  return (
    <SectionCard bg="gray" className="py-24 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <p className="text-zt-coral font-zt-utility text-xs uppercase tracking-[0.08em]">
            A HANDS-FREE VOICE SOCIAL PLATFORM
          </p>
          <h2 className="font-zt-display font-semibold text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-zt-ink mt-4">
            Say the word, and you&apos;re talking to someone new
          </h2>
          <p className="text-zt-ink/70 font-zt-body text-lg mt-6 leading-relaxed">
            No screen, no typing. ZolTalk connects you to another person for a short, anonymous conversation — for travel, chores, or any moment your hands and eyes are busy.
          </p>
        </div>

        {/* Image Collage */}
        <div className="relative h-[500px]">
          <div className="absolute top-0 left-0 w-64 h-80 rounded-lg shadow-lg overflow-hidden transform rotate-2">
            <img
              src="/images/what-is/what-is-1.png"
              alt="Driver connecting through ZolTalk"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-64 h-80 rounded-lg shadow-lg overflow-hidden transform -rotate-2 z-10">
            <img
              src="/images/what-is/what-is-2.png"
              alt="Driver on an active ZolTalk call"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
