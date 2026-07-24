import { SectionCard } from '../components/SectionCard';

const steps = [
  {
    title: 'Say the word',
    description: '"Start ZolTalk" — hands stay on the wheel, eyes stay on the road.',
  },
  {
    title: 'Set your match',
    description: 'Say who you\'d like to talk to — a language, a topic, or just "anyone."',
  },
  {
    title: 'Hear & decide',
    description: 'Hear a short, anonymous intro, then say "connect us" or "find someone else."',
  },
  {
    title: 'Talk',
    description: 'No names, no photos, no phone numbers — just a real conversation.',
  },
  {
    title: 'Time\'s up, naturally',
    description: 'Sessions end automatically after 10–15 minutes.',
  },
  {
    title: 'Reconnect, if you both want to',
    description: 'You\'ll only talk again if you both say yes.',
  },
  {
    title: 'End anytime',
    description: 'Say "end the conversation" or "block this user" — it stops immediately.',
  },
  {
    title: 'Rest comes first',
    description: 'If you\'re too tired to focus, ZolTalk tells you to stop and rest — not to keep talking.',
  },
];

export function HowItWorks() {
  return (
    <SectionCard bg="white" id="how-it-works" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-zt-display font-semibold text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-zt-ink text-center">
          How it works
        </h2>

        {/* Supporting Photos */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-md h-72">
            <img
              src="/images/how-it-works/how-it-works-1.png"
              alt="Driver starting ZolTalk hands-free"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md h-72">
            <img
              src="/images/how-it-works/how-it-works-2.png"
              alt="Driver connected on a ZolTalk call"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Steps Flow */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-zt-card p-8 rounded-2xl border border-zt-line">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-zt-display font-bold text-xl mb-4 ${
                  index % 2 === 0 ? 'bg-zt-coral text-zt-white' : 'bg-zt-yellow text-zt-ink'
                }`}
              >
                {index + 1}
              </div>
              <h3 className="font-zt-display text-xl text-zt-ink mb-2">
                {step.title}
              </h3>
              <p className="text-zt-ink/70 font-zt-body">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/product"
            className="text-zt-coral hover:text-zt-coral-dim font-zt-body text-sm underline underline-offset-4"
          >
            Want the technical details? See how ZolTalk is built →
          </a>
        </div>
      </div>
    </SectionCard>
  );
}
