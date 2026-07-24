import {
  Mic,
  EyeOff,
  Timer,
  UserCheck,
  Ban,
  ShieldAlert,
  Car,
  ArrowLeft,
} from 'lucide-react';
import { SectionCard } from './SectionCard';

const coreFeatures = [
  {
    icon: Mic,
    title: 'Voice-based registration & activation',
    description: 'You set up your account once, while stationary. After that, everything — starting a session, matching, ending a call — runs on voice commands.',
  },
  {
    icon: EyeOff,
    title: 'Anonymous profile',
    description: 'Choose a nickname, age range, language, and interests. Your exact location, phone number, email, real name, and vehicle info are never shared with anyone you talk to.',
  },
  {
    icon: UserCheck,
    title: 'Accept or decline',
    description: 'Before you\'re connected, you hear a short, non-identifying voice intro and can say "connect us" or "find someone else."',
  },
  {
    icon: Timer,
    title: 'Time-limited by default',
    description: 'Sessions run 10–15 minutes and end automatically. Reconnecting only happens if both people agree afterward.',
  },
  {
    icon: Ban,
    title: 'Voice-based blocking & reporting',
    description: '"Block this user," "report this conversation," or "end the conversation now" — all handled instantly by voice, no screen required.',
  },
  {
    icon: ShieldAlert,
    title: 'AI safety assistant',
    description: 'Runs in the background to flag abusive language, requests for personal info, or possible fraud — it supports safety, it doesn\'t listen in on or interrupt normal conversation.',
  },
  {
    icon: Car,
    title: 'Vehicle integration (planned)',
    description: 'Future versions aim to support Apple CarPlay, Android Auto, and vehicle Bluetooth systems for a fully hands-free in-car experience.',
  },
];

const prohibited = [
  'Sexual harassment or explicit sexual conversation',
  'Abusive or hateful speech, threats',
  'Pressure to disclose personal information',
  'Requests for money or investment solicitation',
  'Promotion of illegal products or services',
  'Inappropriate interaction with minors',
  'Unauthorized recording or distribution',
  'Asking a driver to look at a screen',
];

const mvpFeatures = [
  'User registration and identity verification',
  'Anonymous nickname',
  'Driver and non-driver modes',
  'Interest selection',
  'Random voice matching',
  'Accept and decline functions',
  'Automatic termination after ten minutes',
  'Blocking and reporting',
  'Mutual reconnect',
  'Basic safety notices',
  'Voice activation and termination',
  'Administrative review system',
];

export function ProductDetails() {
  return (
    <>
      <SectionCard bg="dark" className="py-20 px-8">
        <div className="relative max-w-3xl mx-auto text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-zt-white/60 hover:text-zt-white font-zt-body text-sm mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to ZolTalk
          </a>
          <h1 className="font-zt-display font-semibold text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-zt-white">
            How ZolTalk is built
          </h1>
          <p className="mt-6 text-zt-white/70 font-zt-body text-lg">
            The technical details behind the hands-free, anonymous, voice-first design — for anyone who wants to see how it actually works under the hood.
          </p>
        </div>
      </SectionCard>

      <SectionCard bg="white" className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-zt-display font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] text-zt-ink text-center">
            Core features
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreFeatures.map((feature) => (
              <div key={feature.title} className="bg-zt-card p-6 rounded-2xl border border-zt-line flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zt-coral/10">
                  <feature.icon className="h-5 w-5 text-zt-coral" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-zt-display text-lg text-zt-ink mb-1">{feature.title}</h3>
                  <p className="text-zt-ink/70 font-zt-body text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionCard>

      <SectionCard bg="dark" className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-zt-display font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] text-zt-white text-center">
            Safety design
          </h2>
          <div className="mt-10 bg-zt-charcoal-muted p-8 rounded-2xl border border-zt-line-dark">
            <p className="text-zt-white/80 font-zt-body leading-relaxed">
              ZolTalk does not guarantee driving safety or prevent drowsiness. Road conditions and traffic laws always come first.
            </p>
          </div>
          <ul className="mt-8 space-y-4">
            <li className="text-zt-white/70 font-zt-body">
              <span className="text-zt-white font-medium">If you say you&apos;re tired</span> — ZolTalk doesn&apos;t extend the conversation or find you someone new. It tells you to stop in a safe location and rest.
            </li>
            <li className="text-zt-white/70 font-zt-body">
              <span className="text-zt-white font-medium">While a vehicle is moving</span> — profile browsing, payments, account settings, and other complex actions are disabled. Only large controls and voice commands are available.
            </li>
            <li className="text-zt-white/70 font-zt-body">
              <span className="text-zt-white font-medium">Emergency termination</span> — saying &quot;end,&quot; &quot;danger,&quot; or &quot;stop&quot; ends the conversation immediately, no confirmation needed.
            </li>
          </ul>
        </div>
      </SectionCard>

      <SectionCard bg="white" className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-zt-display font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] text-zt-ink text-center">
            Community guidelines
          </h2>
          <p className="text-zt-ink/70 font-zt-body text-lg mt-4 text-center">
            The following is never allowed on ZolTalk, and is enforced with warnings, suspension, or permanent bans:
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {prohibited.map((item) => (
              <div key={item} className="bg-zt-card px-5 py-4 rounded-xl border border-zt-line text-zt-ink/80 font-zt-body text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </SectionCard>

      <SectionCard bg="gray" className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-zt-display font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] text-zt-ink text-center">
            What&apos;s in the first version
          </h2>
          <p className="text-zt-ink/70 font-zt-body text-lg mt-4 text-center">
            We&apos;re launching lean, focused on testing demand, conversation quality, and safety before adding anything else.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {mvpFeatures.map((item) => (
              <div key={item} className="bg-zt-white px-5 py-4 rounded-xl border border-zt-line text-zt-ink/80 font-zt-body text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </SectionCard>

      <SectionCard bg="dark" id="waitlist-product" className="py-24 px-8 text-center">
        <div className="relative max-w-xl mx-auto">
          <h2 className="font-zt-display font-semibold text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-zt-white">
            Want to be first to try it?
          </h2>
          <a
            href="/#waitlist"
            className="mt-8 inline-block bg-zt-coral text-zt-white px-8 py-4 rounded-full font-zt-utility text-sm font-medium hover:bg-zt-coral-dim transition-colors"
          >
            Get Early Access
          </a>
        </div>
      </SectionCard>
    </>
  );
}
