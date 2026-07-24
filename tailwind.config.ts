import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: 'var(--bg-primary)',
        },
        brand: {
          core: 'var(--brand-core)',
          vibrant: 'var(--brand-vibrant)',
        },
        zt: {
          bg: 'var(--zt-bg)',
          canvas: 'var(--zt-canvas)',
          card: 'var(--zt-card)',
          ink: 'var(--zt-ink)',
          charcoal: 'var(--zt-charcoal)',
          'charcoal-muted': 'var(--zt-charcoal-muted)',
          black: 'var(--zt-black)',
          coral: 'var(--zt-coral)',
          'coral-dim': 'var(--zt-coral-dim)',
          yellow: 'var(--zt-yellow)',
          white: 'var(--zt-white)',
          line: 'var(--zt-line)',
          'line-dark': 'var(--zt-line-dark)',
        },
      },
      fontFamily: {
        'zt-display': ['var(--font-poppins)', 'sans-serif'],
        'zt-body': ['var(--font-poppins)', 'sans-serif'],
        'zt-utility': ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
