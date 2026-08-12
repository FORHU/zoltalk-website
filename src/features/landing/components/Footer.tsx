import Link from 'next/link';
import { QrCode } from 'lucide-react';

const footerLinks = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Topics', href: '/#concept' },
  { label: 'Safety', href: '/#trust' },
  { label: 'Vision', href: '/#vision' },
  { label: 'Technical details', href: '/product' },
];
const socials = ['LinkedIn', 'Instagram', 'X'];

export function Footer() {
  return (
    <footer className="mx-3 md:mx-6 my-3 rounded-[2.5rem] overflow-hidden bg-zt-charcoal text-zt-white">
      <div className="px-6 py-16 md:px-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-zt-white/60 hover:text-zt-white font-zt-body transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <Link
            href="/#waitlist"
            className="shrink-0 rounded-full bg-zt-coral text-zt-white px-6 py-3 font-zt-utility text-sm font-medium hover:bg-zt-coral-dim transition-colors"
          >
            Get Early Access
          </Link>
        </div>
        <a
          href="mailto:hello@zoltalk.app"
          className="mt-6 inline-block font-zt-display text-2xl md:text-3xl text-zt-white hover:text-zt-white/80 transition-colors"
        >
          hello@zoltalk.app
        </a>

        <div className="mt-10 border-t border-zt-line-dark pt-10 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="font-zt-utility text-xs uppercase tracking-[0.08em] text-zt-white/50 mb-1">Built for</p>
              <p className="text-zt-white/80 font-zt-body">
                Anyone traveling alone or hands-free — drivers, commuters, walkers, and travelers who&apos;d rather talk than stare at a screen.
              </p>
            </div>
            <div>
              <p className="font-zt-utility text-xs uppercase tracking-[0.08em] text-zt-white/50 mb-1">Privacy first</p>
              <p className="text-zt-white/80 font-zt-body">
                No personal info, no location, one connection at a time. Always your choice to accept or decline.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            {socials.map((social) => (
              <a key={social} href="#" className="text-zt-white/60 hover:text-zt-white font-zt-body transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="font-zt-display text-6xl md:text-8xl text-zt-white">
            ZolTalk<sup className="text-2xl md:text-4xl align-super">&reg;</sup>
          </h2>

          <div className="flex items-center gap-6">
            <a href="#" className="text-zt-white/50 hover:text-zt-white font-zt-body text-sm transition-colors">Privacy policy</a>
            <a href="#" className="text-zt-white/50 hover:text-zt-white font-zt-body text-sm transition-colors">Terms</a>
            <div className="flex flex-col items-center gap-1 rounded-2xl bg-zt-white p-3">
              <QrCode className="h-10 w-10 text-zt-ink" strokeWidth={1.5} />
              <span className="text-zt-ink font-zt-utility text-[10px] uppercase tracking-[0.06em]">Coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
