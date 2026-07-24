import { PulsingDot } from './PulsingDot';
import { BRAND_LOCKUP_WIDTH } from './brandLockupWidth';

interface LoadingBarProps {
  progress: number;
}

export function LoadingBar({ progress }: LoadingBarProps) {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center gap-3 px-8"
      style={{ backgroundColor: '#e5e1d5' }}
    >
      <PulsingDot size={16} />

      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ backgroundColor: 'rgba(28, 26, 20, 0.14)', width: BRAND_LOCKUP_WIDTH }}
      >
        <div
          className="h-full rounded-full transition-[width] duration-300 ease-out"
          style={{ width: `${progress}%`, backgroundColor: '#ff4a24' }}
        />
      </div>
    </div>
  );
}
