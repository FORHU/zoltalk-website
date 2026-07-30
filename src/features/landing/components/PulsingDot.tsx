interface PulsingDotProps {
  size?: number;
  ripple?: boolean;
}

export function PulsingDot({ size = 16, ripple = true }: PulsingDotProps) {
  return (
    <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
      {ripple && (
        <>
          <span
            className="absolute inset-0 rounded-full animate-ripple-ring"
            style={{ backgroundColor: '#ff4a24', animationDelay: '0s' }}
          />
          <span
            className="absolute inset-0 rounded-full animate-ripple-ring"
            style={{ backgroundColor: '#ff4a24', animationDelay: '0.8s' }}
          />
        </>
      )}
      <span className="relative rounded-full" style={{ width: size, height: size, backgroundColor: '#ff4a24' }} />
    </div>
  );
}
