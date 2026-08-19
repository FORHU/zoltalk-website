'use client';

import { useEffect } from 'react';

/**
 * Drives the interactive blob for the shared, viewport-fixed
 * GradientBlobBackground instance — one mousemove listener, one rAF loop.
 */
export function GradientBlobController() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const blob = document.querySelector<HTMLElement>('.gradient-blob--interactive');
    if (!blob) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
    let raf = 0;
    let frame = 0;

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Writing the transform invalidates the whole filtered layer, so this
    // only actually moves the blob every other frame (~30fps) — the lerp
    // easing already makes the motion slow enough that halving the update
    // rate isn't visible, and it halves this blob's share of filter cost.
    const tick = () => {
      frame++;
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (frame % 2 === 0) {
        blob.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
