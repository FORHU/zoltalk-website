'use client';

import { useEffect, useRef, useState } from 'react';

interface HeroSlide {
  img: string;
  left: string;
  tx: string;
  h: string;
  l1: string;
  l2: string;
  tagSide: 'left' | 'right';
  logoSide: 'left' | 'right';
}

const HERO_DATA: HeroSlide[] = [
  { img: '/launch/hero-hi.png', left: '35%', tx: '0%', h: '95%', l1: 'Screen Off.', l2: 'Voice On.', tagSide: 'left', logoSide: 'right' },
  { img: '/launch/hero-man.png', left: '50%', tx: '-50%', h: '91%', l1: 'Your Voice', l2: 'Your Income.', tagSide: 'right', logoSide: 'left' },
  { img: '/launch/hero-woman2.png', left: '43%', tx: '0%', h: '93%', l1: 'Connection,', l2: 'Not Content.', tagSide: 'left', logoSide: 'right' },
  { img: '/launch/hero-man2.png', left: '30%', tx: '0%', h: '92%', l1: 'Humans,', l2: 'Not Algorithms.', tagSide: 'right', logoSide: 'left' },
];

interface HeroProps {
  start: boolean;
}

export function Hero({ start }: HeroProps) {
  const [heroIdx, setHeroIdx] = useState(0);
  const [tagIdx, setTagIdx] = useState(0);
  const [wmIn, setWmIn] = useState(false);
  const [personIn, setPersonIn] = useState(false);
  const [logoIn, setLogoIn] = useState(false);
  const [tagIn, setTagIn] = useState(false);
  const [tagBlur, setTagBlur] = useState(false);

  const heroIdxRef = useRef(heroIdx);
  useEffect(() => {
    heroIdxRef.current = heroIdx;
  }, [heroIdx]);

  useEffect(() => {
    if (!start) return;

    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const T = (fn: () => void, ms: number) => {
      timeouts.push(setTimeout(fn, ms));
    };

    function heroLoop() {
      const next = (heroIdxRef.current + 1) % HERO_DATA.length;
      setPersonIn(false);
      T(() => setLogoIn(false), 450);
      T(() => setTagBlur(true), 650);
      T(() => setTagIdx(next), 840);
      T(() => setTagBlur(false), 1280);
      T(() => {
        setHeroIdx(next);
        setPersonIn(true);
      }, 1330);
      T(() => setLogoIn(true), 1850);
      T(() => heroLoop(), 5900);
    }

    T(() => setWmIn(true), 350);
    T(() => setPersonIn(true), 1050);
    T(() => {
      setLogoIn(true);
      setTagIn(true);
    }, 1750);
    T(() => heroLoop(), 5300);

    return () => timeouts.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  const cur = HERO_DATA[tagIdx];
  const tagLeft = cur.tagSide === 'left' ? '7%' : '66%';
  const tagAlign = cur.tagSide === 'left' ? 'left' : 'right';
  const logoSide = HERO_DATA[heroIdx].logoSide;
  const logoLeft = logoSide === 'left' ? '5%' : '90%';

  return (
    <section className="relative w-full overflow-hidden" style={{ aspectRatio: '598/364' }}>
      {HERO_DATA.map((p, i) => (
        <img
          key={p.img}
          src={p.img}
          alt="ZolTalk person with an earbud in"
          className="absolute bottom-0 w-auto"
          style={{
            height: p.h,
            left: p.left,
            transform: `translate(${p.tx}, ${personIn && i === heroIdx ? '0%' : '112%'})`,
            transition: 'transform 0.6s cubic-bezier(0.55,0,0.25,1)',
          }}
        />
      ))}

      <div
        className="absolute font-bold"
        style={{
          top: '14%',
          width: '26%',
          left: tagLeft,
          textAlign: tagAlign,
          color: '#FFFEE6',
          fontSize: '3.6vw',
          lineHeight: 1.08,
          letterSpacing: '-0.01em',
          opacity: tagIn ? 1 : 0,
          filter: tagBlur ? 'blur(9px)' : 'blur(0px)',
          transition: 'left 0.4s cubic-bezier(0.7,0,0.3,1), filter 0.25s linear, opacity 0.5s',
        }}
      >
        {cur.l1}
        <br />
        {cur.l2}
      </div>

      <div
        className="absolute"
        style={{
          top: '14.5%',
          width: '7.2vw',
          left: logoLeft,
          transform: logoIn ? 'translateY(0%)' : 'translateY(180%)',
          opacity: logoIn ? 1 : 0,
          transition: 'transform 0.45s cubic-bezier(0.55,0,0.25,1), opacity 0.45s',
        }}
      >
        <img src="/launch/logo-cream.png" alt="ZolTalk logo" className="block w-full h-auto" />
      </div>

      <h1
        className="absolute left-0 right-0 text-center m-0 font-bold whitespace-nowrap"
        style={{
          top: '56.5%',
          fontSize: '25vw',
          lineHeight: 0.8,
          letterSpacing: '0.015em',
          color: '#FFFEE6',
          WebkitTextStroke: '0.18vw #FFFEE6',
          transform: wmIn ? 'translateY(0%)' : 'translateY(135%)',
          transition: 'transform 0.85s cubic-bezier(0.2,0.65,0.25,1)',
        }}
      >
        ZolTalk
      </h1>
    </section>
  );
}
