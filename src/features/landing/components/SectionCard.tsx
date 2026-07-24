import { ReactNode } from 'react';

const bgMap = {
  white: 'bg-zt-bg text-zt-ink',
  gray: 'bg-zt-card text-zt-ink',
  dark: 'bg-zt-charcoal text-zt-white',
  black: 'bg-zt-black text-zt-white',
  coral: 'bg-zt-coral text-zt-white',
};

interface SectionCardProps {
  children: ReactNode;
  bg?: keyof typeof bgMap;
  className?: string;
  id?: string;
}

export function SectionCard({ children, bg = 'white', className = '', id }: SectionCardProps) {
  return (
    <section
      id={id}
      className={`relative mx-3 md:mx-6 my-3 rounded-[2.5rem] overflow-hidden ${bgMap[bg]} ${className}`}
    >
      {children}
    </section>
  );
}
