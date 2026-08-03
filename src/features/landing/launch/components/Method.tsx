'use client';

import { useEffect, useRef, useState } from 'react';

interface Step {
  img: string;
  title: string;
  tag: string;
  desc: string;
}

const STEPS_DATA: Step[] = [
  {
    img: '/launch/method-running-woman.png',
    title: 'Always on the move ↑',
    tag: 'FILTER',
    desc: "Anyone lying in bed, dropping in out of boredom, simply can't place a call to begin with.",
  },
  {
    img: '/launch/method-cooking-woman.png',
    title: 'Always hands-free ↑',
    tag: 'TONE',
    desc: 'Talk that happens on the road, out on the street, is naturally everyday and wholesome.',
  },
  {
    img: '/launch/method-man.png',
    title: '80/20 payout split',
    tag: 'PAYS →',
    desc: "The caller pays for the call's duration. It's split instantly — 80% to the receiver, 20% to the platform.",
  },
];

const AUTO_ADVANCE_MS = 4000;
const TRANSITION_MS = 600;

export function Method() {
  const [active, setActive] = useState(0);
  const [panelSide, setPanelSide] = useState<'left' | 'right'>('right');
  const [photoIdx, setPhotoIdx] = useState(0);
  const [photoSide, setPhotoSide] = useState<'left' | 'right'>('left');

  const activeRef = useRef(active);
  const panelSideRef = useRef(panelSide);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);
  useEffect(() => {
    panelSideRef.current = panelSide;
  }, [panelSide]);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const photoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (i: number) => {
    const nextPanelSide = panelSideRef.current === 'right' ? 'left' : 'right';
    setActive(i);
    setPanelSide(nextPanelSide);

    if (photoTimerRef.current) clearTimeout(photoTimerRef.current);
    photoTimerRef.current = setTimeout(() => {
      setPhotoIdx(i);
      setPhotoSide(nextPanelSide === 'right' ? 'left' : 'right');
    }, TRANSITION_MS);
  };

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      goTo((activeRef.current + 1) % STEPS_DATA.length);
    }, AUTO_ADVANCE_MS);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (photoTimerRef.current) clearTimeout(photoTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pick = (i: number) => {
    if (i === active) return;
    goTo(i);
    startTimer();
  };

  const textStep = STEPS_DATA[active];
  const photoStep = STEPS_DATA[photoIdx];

  return (
    <section
      style={{ position: 'relative', width: '100%', aspectRatio: '1500/1000', overflow: 'hidden', background: '#FF4A24' }}
    >
      <img
        key={`${photoIdx}-${photoSide}`}
        src={photoStep.img}
        alt={photoStep.title}
        className="animate-method-reveal"
        style={{
          position: 'absolute',
          bottom: 0,
          left: photoSide === 'left' ? 0 : undefined,
          right: photoSide === 'right' ? 0 : undefined,
          height: '102%',
          width: 'auto',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: panelSide === 'right' ? '50%' : '0%',
          width: '50%',
          background: '#000000',
          padding: '4vw 3.5vw',
          overflow: 'hidden',
          transition: `left ${TRANSITION_MS}ms cubic-bezier(0.65, 0, 0.35, 1)`,
        }}
      >
        <div style={{ fontSize: 11, letterSpacing: '0.08em', color: '#8a8a8a', fontFamily: 'ui-monospace, Menlo, monospace' }}>
          // THE METHOD
        </div>
        <h2
          style={{
            color: '#FFFEE6',
            fontSize: 'clamp(26px, 3.9vw, 60px)',
            lineHeight: 1.04,
            fontWeight: 700,
            margin: '0.6em 0 0.45em',
            letterSpacing: '-0.01em',
          }}
        >
          The call,
          <br />
          hands-free.
        </h2>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#777777', marginBottom: '1.8vw' }}>
          NO FEED. NO PROFILE. JUST A VOICE.
        </div>

        {STEPS_DATA.map((st, i) => {
          const on = i === active;
          const mutedColor = on ? '#FF4A24' : '#666666';
          const titleColor = on ? '#FF4A24' : '#EDE9DC';
          const descColor = on ? '#FF4A24' : '#999999';
          return (
            <div
              key={st.title}
              onClick={() => pick(i)}
              style={{
                cursor: 'pointer',
                borderTop: '1px solid rgba(255,255,255,0.14)',
                padding: '1.3vw 0',
                display: 'grid',
                gridTemplateColumns: '2.2em 1fr auto',
                gap: '0 10px',
              }}
            >
              <div style={{ fontSize: 11, transition: 'color 0.3s', color: mutedColor, paddingTop: '0.3em' }}>
                0{i + 1}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 'clamp(14px, 1.35vw, 21px)', transition: 'color 0.3s', color: titleColor }}>
                  {st.title}
                </div>
                <div
                  style={{
                    fontSize: 'clamp(11px, 0.95vw, 14px)',
                    lineHeight: 1.4,
                    marginTop: '0.4em',
                    maxWidth: '34em',
                    transition: 'color 0.3s',
                    color: descColor,
                  }}
                >
                  {st.desc}
                </div>
              </div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  transition: 'color 0.3s',
                  color: mutedColor,
                  paddingTop: '0.4em',
                }}
              >
                {st.tag}
              </div>
            </div>
          );
        })}

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.14)', paddingTop: '1.4vw', fontSize: 'clamp(10px, 0.9vw, 13px)', color: '#666666' }}>
          Two switches flip at once — the call opens.
        </div>
      </div>
    </section>
  );
}
