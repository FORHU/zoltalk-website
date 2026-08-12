interface TickerProps {
  show: boolean;
}

const TICKER_PHRASE =
  "WALKING · COMMUTING · DRIVING · RUNNING · WAITING IN LINE";
// Repeat the phrase enough times that a single segment is always wider than the viewport,
// so the two-segment marquee loop never shows a gap.
const SEGMENT = Array.from({ length: 4 }, () => TICKER_PHRASE).join(
  "     ·     ",
);

export function Ticker({ show }: TickerProps) {
  if (!show) return null;

  return (
    <div
      className="font-bold ticker"
      style={{
        position: "relative",
        background: "#FFFEE6",
        color: "#141414",
        letterSpacing: "0.03em",
        height: 57,
        overflow: "hidden",
      }}
    >
      <div
        className="ticker-marquee"
        style={{
          display: "flex",
          width: "max-content",
          height: "100%",
          alignItems: "center",
        }}
      >
        <span
          className="ticker-text"
          style={{ fontSize: 30, whiteSpace: "nowrap", paddingRight: "3vw" }}
        >
          {SEGMENT}
        </span>
        <span
          className="ticker-text"
          style={{ fontSize: 30, whiteSpace: "nowrap", paddingRight: "3vw" }}
        >
          {SEGMENT}
        </span>
      </div>

      <div
        className="ticker-pill"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: "#FF4A24",
          color: "#FFFEE6",
          fontFamily: "ui-monospace, Menlo, monospace",
          fontWeight: 700,
          fontSize: 13,
          letterSpacing: "0.03em",
          whiteSpace: "nowrap",
          padding: "8px 14px",
          borderRadius: 999,
        }}
      >
        <span className="ticker-pill-full">
          {'// TALK ANYWHERE, EVEN WITH YOUR HANDS FULL'}
        </span>
        <span className="ticker-pill-short">{'// TALK ANYWHERE'}</span>
      </div>
    </div>
  );
}
