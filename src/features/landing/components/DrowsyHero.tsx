
'use client';

import { useHeroSequence } from '../hooks/useHeroSequence';
import { SceneBackground } from './SceneBackground';
import { HeadlineCard } from './HeadlineCard';
import { PulsingPhone } from './PulsingPhone';
import { ProductReveal } from './ProductReveal';

export function DrowsyHero() {
  const { phase, currentHeadline, reveal } = useHeroSequence();
  const isRevealed = phase === 'revealed';
  const isHeadlinesPhase = phase === 'headlines';

  return (
    <div className="h-screen w-full overflow-hidden bg-black">
      <SceneBackground phase={phase} />
      <HeadlineCard headline={currentHeadline} isVisible={isHeadlinesPhase && !isRevealed} />
      <PulsingPhone phase={phase} onActivate={reveal} />
      <ProductReveal isVisible={isRevealed} />
    </div>
  );
}
