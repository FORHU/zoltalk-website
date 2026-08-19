'use client';

import { RefObject, useEffect, useState } from 'react';

export function useLoadProgress(containerRef: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const images = containerRef.current ? Array.from(containerRef.current.querySelectorAll('img')) : [];
    const total = images.length;
    let loaded = 0;
    let windowLoaded = document.readyState === 'complete';
    let finished = false;

    const tryFinish = () => {
      if (finished || !windowLoaded || loaded < total) return;
      finished = true;
      setProgress(100);
      setReady(true);
    };

    const handleImageSettled = () => {
      loaded += 1;
      setProgress(total === 0 ? 100 : Math.min(99, Math.round((loaded / total) * 100)));
      tryFinish();
    };

    if (total === 0) {
      setProgress(100);
    }

    images.forEach((img) => {
      if (img.complete) {
        handleImageSettled();
      } else {
        img.addEventListener('load', handleImageSettled);
        img.addEventListener('error', handleImageSettled);
      }
    });

    const handleWindowLoad = () => {
      windowLoaded = true;
      tryFinish();
    };

    if (windowLoaded) {
      tryFinish();
    } else {
      window.addEventListener('load', handleWindowLoad);
    }

    return () => {
      window.removeEventListener('load', handleWindowLoad);
      images.forEach((img) => {
        img.removeEventListener('load', handleImageSettled);
        img.removeEventListener('error', handleImageSettled);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { progress, ready };
}
