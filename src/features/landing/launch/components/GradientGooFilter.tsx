/**
 * Shared SVG filter for GradientBlobBackground's gooey blob merge effect.
 * Mounted once per page — every GradientBlobBackground instance references
 * this same filter id, so blur/color-matrix work isn't duplicated per section.
 */
export function GradientGooFilter() {
  return (
    <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0 }}>
      <defs>
        <filter id="gradient-blob-goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
  );
}
