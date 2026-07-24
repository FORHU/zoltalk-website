'use client';

import { MessagesSquare } from 'lucide-react';

const navLinks = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Topics', href: '/#concept' },
  { label: 'Safety', href: '/#trust' },
  { label: 'Vision', href: '/#vision' },
];

export function Navbar() {
  return (
    <header className="sticky top-3 z-50 mx-3 md:mx-6">
      <div className="flex items-center justify-between gap-4 rounded-full bg-zt-black px-4 py-3 md:px-6">
        <a href="/" className="flex items-center gap-2 text-zt-white font-zt-display font-semibold text-lg shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zt-coral">
            <MessagesSquare className="h-4 w-4 text-zt-white" strokeWidth={2.5} />
          </span>
          ZolTalk
        </a>

        <nav className="hidden md:flex items-center gap-1 rounded-full bg-zt-charcoal-muted px-2 py-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-zt-body text-zt-white/70 hover:text-zt-white hover:bg-zt-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/#waitlist"
          className="shrink-0 rounded-full bg-zt-white text-zt-ink px-5 py-2.5 text-sm font-zt-utility font-medium hover:bg-zt-yellow transition-colors"
        >
          Get Early Access
        </a>
      </div>
    </header>
  );
}
