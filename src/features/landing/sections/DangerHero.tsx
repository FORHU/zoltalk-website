import { AlertTriangle } from 'lucide-react';
import { SectionCard } from '../components/SectionCard';
import { StatCallout } from '../components/StatCallout';
import { WaitlistForm } from '../components/WaitlistForm';

export function DangerHero() {
  return (
    <SectionCard bg="dark" className="py-24 px-8">
      <img
        src="/images/danger/danger-hero-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-zt-charcoal/60 via-zt-charcoal/85 to-zt-charcoal" />

      <div className="relative max-w-6xl mx-auto">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-zt-white/10 mb-6">
          <AlertTriangle className="h-6 w-6 text-zt-white/80" strokeWidth={1.75} />
        </span>
        <h1 className="font-zt-display font-semibold text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.05] text-zt-white">
          Why can't we stop drowsy driving?
        </h1>
        <p className="mt-6 text-zt-white/70 font-zt-body text-lg max-w-xl">
          ZolTalk connects you to another driver for a quick conversation the moment you start nodding off. Be first to try it.
        </p>
        <WaitlistForm dark compact className="mt-8 max-w-xl" />

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <StatCallout
            dark
            number="644"
            label="Deaths from drowsy-driving-related crashes"
            source="NHTSA 2024"
          />
          <StatCallout
            dark
            number="17.6%"
            label="Of all fatal crashes involve drowsy driving"
            source="AAA Foundation 2017–2021"
          />
          <StatCallout
            dark
            number="30,000"
            label="Deaths over five years (real scale)"
            source="AAA Foundation"
          />
          <StatCallout
            dark
            number="328,000"
            label="Crashes annually"
            source="AAA Foundation"
          />
          <StatCallout
            dark
            number="109,000"
            label="Injuries annually"
            source="AAA Foundation"
          />
          <StatCallout
            dark
            number="6,400"
            label="Fatalities annually"
            source="AAA Foundation"
          />
          <StatCallout
            dark
            number="1 in 25"
            label="Adult drivers fell asleep at the wheel (past 30 days)"
            source="CDC"
          />
          <StatCallout
            dark
            number="0.08%"
            label="BAC equivalent after 20+ hours without sleep"
            source="NSC"
          />
          <StatCallout
            dark
            number="3x"
            label="More likely to crash"
            source="NSC"
          />
        </div>

        {/* Awareness/Enforcement Gap */}
        <div className="mt-20 bg-zt-charcoal-muted p-12 rounded-2xl">
          <p className="text-zt-white/80 font-zt-body text-xl leading-relaxed">
            96% of drivers say drowsy driving is very/extremely dangerous, but fewer than 30% think a drowsy driver is likely to get caught.
            <span className="text-zt-white font-semibold"> This isn't a problem law enforcement can solve.</span>
          </p>
          <p className="text-zt-white/50 font-zt-utility text-xs uppercase tracking-[0.08em] mt-4">
            AAA Foundation
          </p>
        </div>
      </div>
    </SectionCard>
  );
}
