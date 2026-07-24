import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BrandMoment } from './BrandMoment';
import { DangerHero } from '../sections/DangerHero';
import { WhyWeNeedIt } from '../sections/WhyWeNeedIt';
import { WhatIsZolTalk } from '../sections/WhatIsZolTalk';
import { HowItWorks } from '../sections/HowItWorks';
import { ConversationTopics } from '../sections/ConversationTopics';
import { TrustFeatures } from '../sections/TrustFeatures';
import { SuccessFactors } from '../sections/SuccessFactors';
import { VisionMission } from '../sections/VisionMission';
import { ClosingCTA } from '../sections/ClosingCTA';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-zt-canvas pt-3">
      <Navbar />
      <DangerHero />
      <WhyWeNeedIt />
      <BrandMoment />
      <WhatIsZolTalk />
      <HowItWorks />
      <ConversationTopics />
      <TrustFeatures />
      <SuccessFactors />
      <VisionMission />
      <ClosingCTA />
      <Footer />
    </div>
  );
}
