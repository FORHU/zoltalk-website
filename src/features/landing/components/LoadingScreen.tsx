'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex justify-center pt-16" style={{ backgroundColor: '#e5e1d5' }}>
      <DotLottieReact src="/lottie/loading-bar.lottie" loop autoplay style={{ width: 300, height: 40 }} />
    </div>
  );
}
