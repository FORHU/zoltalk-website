import { Link2 } from 'lucide-react';
import { SectionCard } from '../components/SectionCard';
import { WaitlistForm } from '../components/WaitlistForm';

export function ClosingCTA() {
  return (
    <SectionCard bg="dark" id="waitlist" className="py-32 px-8 text-center">
      <img
        src="/images/closing/closing-cta.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-zt-charcoal/70 via-zt-charcoal/90 to-zt-charcoal" />

      <div className="relative max-w-2xl mx-auto">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-zt-coral mb-8">
          <Link2 className="h-6 w-6 text-zt-white" strokeWidth={2} />
        </span>

        <h2 className="font-zt-display font-semibold text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.05] text-zt-white">
          A hands-free voice social platform for travel and everyday activities.
        </h2>
        <p className="mt-6 text-zt-white/70 font-zt-body text-lg">
          ZolTalk isn&apos;t live yet — join the waitlist and we&apos;ll email you the moment it launches.
        </p>

        <WaitlistForm dark className="mt-10" />

        <a
          href="#how-it-works"
          className="mt-6 inline-block text-zt-white/60 hover:text-zt-white font-zt-body text-sm underline underline-offset-4"
        >
          See how it works first
        </a>

        <p className="mt-10 text-zt-white/40 font-zt-body text-xs max-w-md mx-auto leading-relaxed">
          ZolTalk does not guarantee driving safety or prevent drowsiness. If you feel tired or sleepy, stop in a safe location and rest immediately — road conditions and traffic laws always come first.
        </p>

        <div className="mt-16 max-w-sm mx-auto rounded-3xl overflow-hidden shadow-lg border border-zt-line-dark">
          <img
            src="/images/closing/feature-alerts.png"
            alt="ZolTalk alert on a driver's phone"
            className="w-full h-auto"
          />
        </div>
      </div>
    </SectionCard>
  );
}
