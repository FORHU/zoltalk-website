import type { CSSProperties } from 'react';

interface ProductProps {
  ctaLabel: string;
  waitlistUrl: string;
}

export function Product({ ctaLabel, waitlistUrl }: ProductProps) {
  return (
    <section
      className="relative w-full"
      style={{ aspectRatio: '1455/1400', background: '#000000', overflow: 'visible' }}
    >
      <video
        src="/launch/no-screen-guy.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', maxWidth: 'none', objectFit: 'cover' }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 28%, rgba(0,0,0,0.15) 68%, rgba(0,0,0,0.65) 100%)',
        }}
      />
      <img
        src="/launch/phone-hi.png"
        alt="ZolTalk call screen — incoming match"
        style={{ position: 'absolute', left: '50%', top: '28%', transform: 'translateX(-50%)', width: '19%' }}
      />
      <h2
        className="m-0 text-center font-bold"
        data-reveal="lines"
        style={{
          position: 'absolute',
          right: '22%',
          left: '22%',
          top: '6%',
          color: '#FFFEE6',
          fontSize: '3.4vw',
          lineHeight: 1.05,
          letterSpacing: '-0.01em',
        }}
      >
        No Screen.
        <br />
        Just a Voice.
      </h2>
      <p
        className="m-0 text-center"
        data-reveal="rise"
        style={
          {
            position: 'absolute',
            right: '22%',
            left: '22%',
            top: '17.5%',
            color: '#FFFEE6',
            fontSize: '1.15vw',
            lineHeight: 1.3,
            '--delay': '180ms',
          } as CSSProperties
        }
      >
        Say the wake word, get matched, talk.
        <br />
        That&apos;s the whole app.
      </p>
      <div
        data-reveal="rise"
        style={{ position: 'absolute', left: '14.5%', top: '77.5%', color: '#F4F1E4', fontSize: '1.35vw' }}
      >
        01&nbsp;&nbsp;Say &quot;Hey ZolTalk&quot;
      </div>
      <div
        data-reveal="rise"
        style={{ position: 'absolute', left: '43%', top: '77.5%', color: '#F4F1E4', fontSize: '1.35vw', '--delay': '90ms' } as CSSProperties}
      >
        02&nbsp;&nbsp;Instantly matched
      </div>
      <div
        data-reveal="rise"
        style={{ position: 'absolute', left: '78%', top: '78.5%', color: '#F4F1E4', fontSize: '1.35vw', '--delay': '180ms' } as CSSProperties}
      >
        03&nbsp;&nbsp;Talk, then hang up
      </div>
      <span style={{ position: 'absolute', left: '50%', top: '84.5%', transform: 'translateX(-50%)' }}>
        <span
          data-reveal="rise"
          style={{ display: 'inline-block', '--delay': '270ms' } as CSSProperties}
        >
          <a
            href={waitlistUrl}
            className="font-bold"
            style={{
              display: 'inline-block',
              background: '#FF4A24',
              color: '#FFFEE6',
              fontSize: '1.75vw',
              padding: '1.15vw 2.6vw',
              borderRadius: 10,
              whiteSpace: 'nowrap',
            }}
          >
            {ctaLabel}
          </a>
        </span>
      </span>
    </section>
  );
}
