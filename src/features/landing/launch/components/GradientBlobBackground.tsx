/**
 * Ambient animated gradient blob background, pinned to the viewport
 * (position:fixed via .gradient-blob-bg) and mounted once in LaunchPage —
 * not per section. Hero, Method, and ClosingCTA have no background of their
 * own, so this shows through them; Premise, Product, and Ticker paint their
 * own opaque background over it. Reads as one continuous background
 * revealed through three windows rather than three separate instances.
 *
 * The cursor-following blob is driven by GradientBlobController.
 */
export function GradientBlobBackground() {
  return (
    <div className="gradient-blob-bg" aria-hidden="true">
      <div className="gradient-blob-container">
        <div className="gradient-blob gradient-blob--1" />
        <div className="gradient-blob gradient-blob--2" />
        <div className="gradient-blob gradient-blob--3" />
        <div className="gradient-blob gradient-blob--4" />
        <div className="gradient-blob gradient-blob--interactive" />
      </div>
      <div className="gradient-blob-grain" />
    </div>
  );
}
