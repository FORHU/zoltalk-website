export function Footer() {
  return (
    <footer style={{ background: '#000000', padding: '4.5vw 5.2% 0', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src="/launch/logo-orange.png" alt="ZolTalk logo" style={{ width: 40, height: 'auto', display: 'block' }} />
            <div className="font-bold" style={{ color: '#FFFEE6', fontSize: 26, letterSpacing: '-0.02em' }}>
              ZolTalk
            </div>
          </div>
          <div style={{ color: '#5f5f5f', fontSize: 13, marginTop: 12 }}>Screen Off. Voice On.</div>
        </div>

        <div style={{ display: 'flex', gap: '5vw' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            <div className="font-bold" style={{ fontSize: 10, letterSpacing: '0.12em', color: '#5f5f5f' }}>
              PRODUCT
            </div>
            <a href="#" style={{ color: '#a5a5a5', fontSize: 13 }}>
              Overview
            </a>
            <a href="#" style={{ color: '#a5a5a5', fontSize: 13 }}>
              The Method
            </a>
            <a href="#" style={{ color: '#a5a5a5', fontSize: 13 }}>
              The App
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            <div className="font-bold" style={{ fontSize: 10, letterSpacing: '0.12em', color: '#5f5f5f' }}>
              COMPANY
            </div>
            <a href="#" style={{ color: '#a5a5a5', fontSize: 13 }}>
              About
            </a>
            <a href="#" style={{ color: '#a5a5a5', fontSize: 13 }}>
              Careers
            </a>
          </div>
        </div>
      </div>

      <div aria-hidden="true" style={{ position: 'relative', margin: '7vw -4% -5vw' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/launch/wordmark-outline.png" alt="" style={{ display: 'block', width: '100%' }} />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 55%, #000000 100%)',
          }}
        />
      </div>
    </footer>
  );
}
