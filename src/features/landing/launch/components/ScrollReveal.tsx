'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';

/**
 * When an element exits via the top of the viewport (scrolled past, heading up),
 * it stays revealed. Only an exit via the bottom (scrolled back down past it while
 * scrolling up) re-hides it. Flip to true to replay on every top exit too.
 */
const REPLAY_ON_TOP_EXIT = false;

const RESIZE_DEBOUNCE_MS = 180;
const ORIGINAL_HTML_ATTR = 'data-reveal-original';

const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

function splitIntoLines(el: HTMLElement) {
  const original = el.getAttribute(ORIGINAL_HTML_ATTR) ?? el.innerHTML;
  if (!el.hasAttribute(ORIGINAL_HTML_ATTR)) {
    el.setAttribute(ORIGINAL_HTML_ATTR, original);
  }

  const wasIn = el.classList.contains('is-in');

  // Manual <br> breaks are authored line breaks — never merge words across them.
  const forcedSegments = original.split(/<br\s*\/?>/i);

  const measure = document.createElement('div');
  const computed = window.getComputedStyle(el);
  measure.style.position = 'absolute';
  measure.style.visibility = 'hidden';
  measure.style.pointerEvents = 'none';
  measure.style.width = `${el.clientWidth}px`;
  measure.style.font = computed.font;
  measure.style.letterSpacing = computed.letterSpacing;
  measure.style.lineHeight = computed.lineHeight;
  document.body.appendChild(measure);

  const allLines: string[] = [];

  for (const segment of forcedSegments) {
    const words = segment.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) {
      allLines.push('');
      continue;
    }

    measure.innerHTML = '';
    const spans = words.map((word) => {
      const span = document.createElement('span');
      span.textContent = `${word} `;
      measure.appendChild(span);
      return span;
    });

    let lineWords: string[] = [];
    let lastTop: number | null = null;
    for (let i = 0; i < spans.length; i++) {
      const top = spans[i].offsetTop;
      if (lastTop !== null && top !== lastTop) {
        allLines.push(lineWords.join(' '));
        lineWords = [];
      }
      lineWords.push(words[i]);
      lastTop = top;
    }
    if (lineWords.length > 0) allLines.push(lineWords.join(' '));
  }

  document.body.removeChild(measure);

  el.innerHTML = '';
  el.style.setProperty('--n', String(allLines.length));
  allLines.forEach((line, i) => {
    const outer = document.createElement('span');
    outer.className = 'reveal-line-outer';
    const inner = document.createElement('span');
    inner.className = 'reveal-line-inner';
    inner.style.setProperty('--i', String(i));
    inner.textContent = line;
    outer.appendChild(inner);
    el.appendChild(outer);
  });

  if (wasIn) el.classList.add('is-in');
}

export function ScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    document.documentElement.classList.add('js-ready');

    const lineEls = () =>
      Array.from(document.querySelectorAll<HTMLElement>('[data-reveal="lines"]'));

    lineEls().forEach(splitIntoLines);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('is-in');
          } else if (entry.boundingClientRect.top <= 0 && !REPLAY_ON_TOP_EXIT) {
            // Exited via the top — leave it revealed.
          } else {
            el.classList.remove('is-in');
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    observerRef.current = observer;

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => observer.observe(el));

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        lineEls().forEach(splitIntoLines);
      }, RESIZE_DEBOUNCE_MS);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimer) clearTimeout(resizeTimer);
      observer.disconnect();
    };
  }, []);

  return null;
}
