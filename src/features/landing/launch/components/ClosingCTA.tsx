interface ClosingCTAProps {
  ctaLabel: string;
  waitlistUrl: string;
}

export function ClosingCTA({ ctaLabel, waitlistUrl }: ClosingCTAProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#FF4A24', minHeight: '56vw', display: 'flex', alignItems: 'center' }}
    >
      <div style={{ padding: '5.5vw 5.2% 6.5vw', maxWidth: '52%' }}>
        <h2 className="font-bold" style={{ color: '#FFFEE6', fontSize: 'clamp(30px, 5.7vw, 86px)', margin: 0, letterSpacing: '-0.015em', lineHeight: 1 }}>
          Find your voice.
        </h2>
        <p style={{ color: '#FFFEE6', fontSize: 'clamp(13px, 1.85vw, 27px)', lineHeight: 1.35, margin: '1.8vw 0 0' }}>
          Say the words.
          <br />
          Someone, somewhere, is already listening.
        </p>
        <a
          href={waitlistUrl}
          className="inline-block font-bold"
          style={{
            marginTop: '3vw',
            background: '#FFFEE6',
            color: '#141414',
            fontSize: 'clamp(11px, 1.35vw, 20px)',
            padding: '1vw 1.9vw',
            borderRadius: 8,
            whiteSpace: 'nowrap',
          }}
        >
          {ctaLabel}
        </a>
      </div>
      <img
        src="/launch/floral-hi.png"
        alt="Woman studying with an earbud in"
        style={{ position: 'absolute', right: 0, bottom: 0, height: '112%', width: 'auto' }}
      />
    </section>
  );
}
