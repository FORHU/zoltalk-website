import { MessageCircle, HeartHandshake, Plane, Music, Languages, Moon, Navigation, UserPlus } from 'lucide-react';
import { SectionCard } from '../components/SectionCard';

const topics = [
  { label: 'Casual conversation', icon: MessageCircle },
  { label: 'Personal concerns', icon: HeartHandshake },
  { label: 'Travel', icon: Plane },
  { label: 'Music and film', icon: Music },
  { label: 'Language practice', icon: Languages },
  { label: 'Quiet companionship', icon: Moon },
  { label: 'Short conversation while traveling', icon: Navigation },
  { label: 'Meeting new friends', icon: UserPlus },
];

export function ConversationTopics() {
  return (
    <SectionCard bg="gray" id="concept" className="py-24 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-zt-display font-semibold text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-zt-ink">
          Choose how you want to talk
        </h2>
        <p className="text-zt-ink/70 font-zt-body text-lg mt-4 max-w-2xl mx-auto">
          Say what kind of conversation you&apos;re in the mood for, and ZolTalk matches you to someone else looking for the same thing. Every session is anonymous and time-limited by default.
        </p>

        {/* Topic Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {topics.map((topic) => (
            <div key={topic.label} className="bg-zt-white p-6 rounded-2xl border border-zt-line shadow-sm flex flex-col items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-zt-coral/10">
                <topic.icon className="h-5 w-5 text-zt-coral" strokeWidth={1.75} />
              </span>
              <p className="font-zt-body text-sm text-zt-ink">{topic.label}</p>
            </div>
          ))}
        </div>

        <a
          href="#waitlist"
          className="mt-12 inline-block bg-zt-coral text-zt-white px-8 py-4 rounded-full font-zt-utility text-xs uppercase tracking-[0.08em] hover:bg-zt-coral-dim transition-colors"
        >
          Get Early Access
        </a>
      </div>
    </SectionCard>
  );
}
