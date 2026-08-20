/**
 * Ambient animated gradient blob background, pinned to the viewport
 * (position:fixed via .gradient-blob-bg) and mounted once in LaunchPage —
 * not per section. Hero, Method, and ClosingCTA have no background of their
 * own, so this shows through them; Premise, Product, and Ticker paint their
 * own opaque background over it. Reads as one continuous background
 * revealed through three windows rather than three separate instances.
 *
 * The base fill (.gradient-blob-bg) is a plain brand orange, so the blob
 * layer starts hidden and cross-fades in via the `reveal` prop — pass this
 * the same "site is now actually visible" signal used for heroStart, not a
 * fixed CSS delay, since this component mounts behind the loading screen
 * well before the reveal should be seen.
 *
 * The cursor-following blob is driven by GradientBlobController.
 */
interface GradientBlobBackgroundProps {
  reveal?: boolean;
}

export function GradientBlobBackground({ reveal = false }: GradientBlobBackgroundProps) {
  const revealedClass = reveal ? ' is-visible' : '';

  return (
    <div className="gradient-blob-bg" aria-hidden="true">
      <div className={`gradient-blob-base${revealedClass}`} />
      <div className={`gradient-blob-container${revealedClass}`}>
        <div className="gradient-blob gradient-blob--1" />
        <div className="gradient-blob gradient-blob--2" />
        <div className="gradient-blob gradient-blob--3" />
        <div className="gradient-blob gradient-blob--4" />
        <div className="gradient-blob gradient-blob--interactive" />
      </div>
      <div className={`gradient-blob-grain${revealedClass}`} />
    </div>
  );
}
