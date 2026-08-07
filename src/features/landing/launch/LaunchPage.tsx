import { abandon } from './font';
import { Hero } from './components/Hero';
import { Premise } from './components/Premise';
import { Method } from './components/Method';
import { Product } from './components/Product';
import { Ticker } from './components/Ticker';
import { ClosingCTA } from './components/ClosingCTA';
import { Footer } from './components/Footer';

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
        overflow: 'hidden',
        background: '#000000',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <Hero start={heroStart} />
      <Premise />
      <Method />
      <Product ctaLabel={ctaLabel} waitlistUrl={waitlistUrl} />
      <Ticker show={showTicker} />
      <ClosingCTA ctaLabel={ctaLabel} waitlistUrl={waitlistUrl} />
      <Footer />
    </div>
  );
}
