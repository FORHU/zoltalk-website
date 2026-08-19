'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { Footer } from './Footer';

/**
 * Reveal-from-under sticky footer. The section above scrolls away to uncover
 * the footer, which pins in place until it's fully revealed.
 *
 * Uses clip-path rather than overflow:hidden on the wrapper — overflow other
 * than visible turns an ancestor into a scroll container, which breaks
 * position:sticky on descendants. clip-path clips the same visual bleed
 * without that side effect.
 */
export function StickyFooter() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const measure = () => setHeight(el.getBoundingClientRect().height);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ position: 'relative', height, clipPath: 'inset(0)' }}>
      <div style={{ position: 'relative', height: `calc(100vh + ${height}px)`, top: '-100vh' }}>
        <div style={{ position: 'sticky', top: `calc(100vh - ${height}px)` }}>
          <div ref={contentRef}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
