I need you to restructure the ZolTalk landing page so it follows the narrative arc from our pitch deck (zoltalk1_EN.pdf): open with the danger of drowsy driving, escalate with additional stats, then transition into ZolTalk as the solution, followed by how it works and why it matters. Build this in src/features/landing/ per our FAOS architecture, reusing the token system and hero-sequence work already in the repo. Follow the sections in order.

## Section 1 — The danger (hero)
- Full-bleed, serious tone (this section should NOT use the coral accent — use darker, more muted treatment here, save coral for once ZolTalk is introduced).
- Headline: "Why can't we stop drowsy driving?" (from the deck).
- Supporting stat block, pulling from the deck's own numbers AND these additional ones I've sourced (cite NHTSA/AAA/CDC/NSC where noted):
  - NHTSA: 795 deaths (2017), 4,111 deaths (2013–2017), 91,000 police-reported crashes, ~50,000 injured (from deck)
  - NHTSA 2024: 644 deaths from drowsy-driving-related crashes (1.1% increase from 637 in 2023)
  - AAA Foundation: drowsy driving involved in 17.6% of all fatal crashes 2017–2021 — roughly 30,000 deaths over five years (this number is far higher than police-reported estimates and should be framed as "the real scale")
  - AAA Foundation broader estimate: 328,000 crashes, 109,000 injuries, ~6,400 fatalities every year
  - CDC: 1 in 25 adult drivers report falling asleep at the wheel in the past 30 days
  - NSC: driving after 20+ hours without sleep impairs you roughly as much as a 0.08% BAC (the legal limit); fatigued drivers are 3x more likely to crash
  - AAA: fatigue-related crashes cost over $109 billion annually
- Close this section on the awareness/enforcement gap: 96% of drivers say drowsy driving is very/extremely dangerous, but fewer than 30% think a drowsy driver is likely to get caught (AAA Foundation). Frame this as the pivot: "This isn't a problem law enforcement can solve."
- Use large, escalating stat callouts (big number + small label), similar treatment to the deck's own stat cards, but built as real animated components (count-up on scroll-into-view is a nice touch here, using Framer Motion).

## Section 2 — Why we need ZolTalk (bridge)
- Directly from the deck: "Crash Preventative Hotline" framing — the automotive culture of the 5G/AI era needs a new platform, not just better driving. Reference the deck's "Loneliness and tiredness while driving" framing (75% loneliness of driving, 90% loneliness alone, 67% tired driving) as supporting stats.
- This is where the coral accent color re-enters — visually signals "here's where the answer starts."

## Section 3 — What is ZolTalk
- Straight from the deck: "Mobile Guardian Angels Network" tagline, the "chat with other drivers with a simple screen touch" description.
- Pair with a "Zoltalk protects your life. New safe driving method" supporting line.
- Use the collage-style photography section already scoped in our design-system doc (driver + phone photos).

## Section 4 — How it works
- Two sub-parts from the deck, presented as a simple step flow (reuse or adapt a diagram-style component):
  1. "Operates above 10 mph" — the call only activates once driving speed is detected, one-touch connects to a random call.
  2. The connection loop: Start → Select option → Call → Match → Chat → End → Start again (from the deck's flow diagram).

## Section 5 — Concept: talk to an Angel
- From the deck: "Speak to a female angel" / "Speak to a male angel" — two-column visual, each with its own CTA ("Zoltalk Now" — adapt copy to whatever your primary CTA verb is elsewhere on the site, e.g. "Try Zoltalk Now").
- Supporting line: prevents drowsiness through conversation without exposing personal information, keeps driving safe and fun.

## Section 6 — Trust & safety features
- From the deck's "Only one conversation" slide: four feature cards — User profile (no personal info), Private chat (one connection only, no reconnecting), Push notification (accept/decline, opt-in only), Location (no location or personal data shared).
- This section exists to directly counter the obvious hesitation ("who am I talking to?") — treat it as the reassurance section, right after the concept section introduces talking to strangers.

## Section 7 — Success factors / who it's for
- From the deck: loneliness/tiredness stats (75% / 90% / 67%), and the "Zoltalk Customers" diversity section — truck drivers, night drivers, long drivers, train/subway, bus, all drivers. Adapt this to emphasize it's not just solo car commuters.

## Section 8 — Vision & Mission
- Direct from deck: Vision — "Prevents drowsy driving by all drivers and creates a safe driving culture with the development of automobile technology in the 21st century." Mission — "Reduce global drowsiness by 50%, provide services in various languages, acquire 100 million users in three years."
- Present as two side-by-side panels (vision in coral, mission in a secondary tone — deck uses blue, decide whether to keep a second accent color or stay monochrome + coral only, flag this decision to me).

## Section 9 — Closing CTA
- Deck's own closer: "Driving is entertaining, and dangerous drowsy driving ends with Zoltalk." Pair with primary CTA button and route to the pulsing-phone reveal sequence already built, OR treat this as the final scroll section on the same page — confirm which with me before building.

## Technical notes
- Each section = its own component under src/features/landing/sections/, named to match: DangerHero.tsx, WhyWeNeedIt.tsx, WhatIsZolTalk.tsx, HowItWorks.tsx, ConceptAngels.tsx, TrustFeatures.tsx, SuccessFactors.tsx, VisionMission.tsx, ClosingCTA.tsx.
- Stat callouts should be a shared StatCallout component (big number, small label, optional source attribution in fine print) — reused across Section 1 and Section 7.
- Keep the token system (--zt-bg, --zt-ink, --zt-charcoal, --zt-coral, etc.) from the earlier design-system doc — don't introduce new ad hoc colors.
- All copy above is either taken directly from the deck or the sourced stats doc — do not invent additional statistics.
- Ask me before deciding: (1) whether to keep the deck's blue as a secondary accent or go coral-only, (2) whether the closing CTA routes into the existing DrowsyHero/PulsingPhone reveal or is a separate final section on this new page.