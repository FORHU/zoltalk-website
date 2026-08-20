import { abandon } from './font';
import { Hero } from './components/Hero';
import { Premise } from './components/Premise';
import { Method } from './components/Method';
import { Product } from './components/Product';
import { Ticker } from './components/Ticker';
import { ClosingCTA } from './components/ClosingCTA';
import { StickyFooter } from './components/StickyFooter';
import { ScrollReveal } from './components/ScrollReveal';
import { GradientGooFilter } from './components/GradientGooFilter';
import { GradientBlobBackground } from './components/GradientBlobBackground';
import { GradientBlobController } from './components/GradientBlobController';

interface LaunchPageProps {
  ctaLabel?: string;
  waitlistUrl?: string;
  showTicker?: boolean;
  heroStart?: boolean;
}

export function LaunchPage({
  ctaLabel = 'Join the waitlist →',
  waitlistUrl = '#waitlist',
  showTicker = true,
  heroStart = true,
}: LaunchPageProps) {
  return (
    <div
      className={`${abandon.className} launch-page`}
      style={{
        width: '100%',
        // clip-path, not overflow:hidden — overflow other than visible turns this
        // wrapper into a scroll container, which breaks position:sticky in StickyFooter.
        clipPath: 'inset(0)',
        background: '#000000',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <ScrollReveal />
      <GradientGooFilter />
      <GradientBlobController />
      <GradientBlobBackground reveal={heroStart} />
      <Hero start={heroStart} />
      <Premise />
      <Method />
      <Product ctaLabel={ctaLabel} waitlistUrl={waitlistUrl} />
      <Ticker show={showTicker} />
      <ClosingCTA ctaLabel={ctaLabel} waitlistUrl={waitlistUrl} />
      <StickyFooter />
    </div>
  );
}
