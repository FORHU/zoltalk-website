export function Premise() {
  return (
    <section style={{ background: '#FFFEE6', textAlign: 'center', padding: '5.5vw 8vw 7vw' }}>
      <img src="/launch/logo-orange.png" alt="ZolTalk logo" style={{ width: 40, height: 'auto', display: 'block', margin: '0 auto' }} />
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', color: '#141414', marginTop: 12 }}>
        THE PREMISE
      </div>
      <h2
        style={{
          color: '#FF4A24',
          fontSize: 'clamp(22px, 3.3vw, 50px)',
          lineHeight: 1.18,
          fontWeight: 700,
          margin: '4vw auto 0',
          letterSpacing: '-0.01em',
        }}
      >
        We got so busy watching other people&apos;s lives,
        <br />
        we lost anyone to tell our own to.
      </h2>
      <p style={{ fontSize: 'clamp(11px, 1vw, 15px)', color: '#3a3a3a', margin: '4.5vw 0 0' }}>
        Twenty years of social media made us watchers. ZolTalk gives you a voice again.
      </p>
    </section>
  );
}
