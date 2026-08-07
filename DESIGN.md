# ZolTalk — Design System

This document reverse-engineers the design system actually implemented in code across the ZolTalk marketing site (`src/features/landing/launch/**`, the loading sequence, and the legacy boilerplate scaffold it was built on top of). Two systems currently coexist in the repo:

- **Active system** — the "launch" page (Hero → Premise → Method → Product → Ticker → ClosingCTA → Footer), styled with inline hex values and fluid `vw`/`clamp()` sizing rather than Tailwind tokens.
- **Legacy system** — CSS custom properties in `globals.css` (`--zt-*`, `--brand-*`) and the Tailwind theme extension, inherited from the original boilerplate. Still defined and still used by one older component (`WaitlistForm`), but superseded by the active system everywhere else.

Both are documented below, with the active system treated as the source of truth going forward.

---

## 1. Color Palette

### Active system (launch page)

| Role | Value | Usage |
|---|---|---|
| Brand orange (primary) | `#FF4A24` | Section backgrounds (Hero, Product, ClosingCTA), CTA button fills, active-state highlights, loading dot/expand-circle, Ticker accent pill |
| Cream (on-dark text) | `#FFFEE6` | Headlines/body text on orange or black backgrounds, CTA text on orange, underline bars, Ticker background |
| Pure black | `#000000` | Method section background, Footer background, page wrapper background |
| Near-black (on-cream text) | `#141414` | Body copy on cream backgrounds (Premise kicker, Ticker text, ClosingCTA button text) |
| Loading screen background | `#e5e1d5` | Full-bleed background during the loading/wordmark phases only |

**Grayscale (dark-UI text hierarchy — Method panel, Footer):**

| Value | Usage |
|---|---|
| `#EDE9DC` | Inactive list-item titles (near-white, slightly warm) |
| `#a5a5a5` | Footer link text |
| `#999999` | Inactive list-item descriptions |
| `#8a8a8a` | Kicker/eyebrow labels (`// THE METHOD`) |
| `#777777` | Secondary sub-labels |
| `#666666` | Muted numerals, footnotes |
| `#5f5f5f` | Footer secondary text, nav-group labels |
| `#3a3a3a` | Body copy on cream (Premise paragraph) |

**Structural:**

| Value | Usage |
|---|---|
| `rgba(255, 255, 255, 0.14)` | Hairline dividers between list rows (Method panel) |
| `rgba(0, 0, 0, 0.6) → rgba(0, 0, 0, 0.15) → rgba(0, 0, 0, 0.65)` (linear-gradient, 180deg) | Scrim overlay on the Product section's background video, for text legibility |
| `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 55%, #000000 100%)` | Fade-to-black mask over the Footer's wordmark outline graphic |

### Legacy system (`globals.css` custom properties, still defined but largely unused)

```css
--zt-canvas: #E4E3E8;
--zt-bg: #FFFFFF;
--zt-card: #F3F3F5;
--zt-ink: #111111;
--zt-charcoal: #2E2E2E;
--zt-charcoal-muted: #3A3A3A;
--zt-black: #0C0C0C;
--zt-coral: #EE3826;
--zt-coral-dim: #D62E1D;
--zt-yellow: #F9D72C;
--zt-white: #FFFFFF;
--zt-line: #E7E5E9;
--zt-line-dark: #3F3F3F;
```

Exposed to Tailwind as `bg-zt-*` / `text-zt-*` utilities (see `tailwind.config.ts`). Currently only consumed by `WaitlistForm.tsx` (an older component not wired into the current page). A `.dark` variant block also exists (`--background-primary: #020617`, etc.) but no theme toggle currently switches it on.

---

## 2. Typography

### Active system — "Abandon" (primary/only typeface on the launch page)

Loaded via `next/font/local` at `src/features/landing/launch/font.ts`, files under `src/shared/assets/fonts/abandon/*.otf`:

| Weight | Style | File |
|---|---|---|
| 100 (Thin) | normal / italic | `Abandon Thin.otf` / `Abandon Thin Italic.otf` |
| 300 (Light) | normal / italic | `Abandon Light.otf` / `Abandon Light Italic.otf` |
| 400 (Book/Regular) | normal / italic | `Abandon Book.otf` / `Abandon Italic.otf` |
| 500 (Medium) | normal / italic | `Abandon Medium.otf` / `Abandon Medium Italic.otf` |
| 700 (Bold) | normal / italic | `Abandon Bold.otf` / `Abandon Bold Italic.otf` |

Applied via `abandon.className` on the launch page's root wrapper (`LaunchPage.tsx`) — every child inherits it. The "ZolTalk" wordmark in the loading sequence (`LoadingSequence.tsx`) additionally loads `Abandon Bold.otf` directly at weight 700 for its brand-reveal text.

### Type scale (all fluid — `vw` or `clamp()`, no fixed breakpoint scale)

| Level | Size | Weight | Line-height | Letter-spacing | Where |
|---|---|---|---|---|---|
| Hero wordmark (display) | `25vw` | 700 (bold, outlined) | `0.8` | `0.015em` | Hero background "ZolTalk" mark, `-webkit-text-stroke: 0.18vw #FFFEE6` |
| Hero tagline (H1-equivalent) | `3.6vw` | 700 | `1.08` | `-0.01em` | Rotating slide taglines ("Screen Off. Voice On.") |
| ClosingCTA headline (H1) | `clamp(30px, 5.7vw, 86px)` | 700 | `1` | `-0.015em` | "Find your voice." |
| Product headline (H2) | `3.4vw` | 700 | `1.05` | `-0.01em` | "No Screen. Just a Voice." |
| Premise headline (H2) | `clamp(22px, 3.3vw, 50px)` | 700 | `1.18` | `-0.01em` | |
| Method panel headline (H2) | `clamp(26px, 3.9vw, 60px)` | 700 | `1.04` | `-0.01em` | |
| Ticker accent text | `30px` | 700 | — | `0.03em` | Marquee phrase |
| Body / subhead (large) | `clamp(13px, 1.85vw, 27px)` | 400 | `1.35` | — | ClosingCTA supporting line |
| Body / subhead (standard) | `1.15vw` – `1.35vw` | 400 | `1.3` | — | Product supporting text, step labels |
| Method list item title | `clamp(14px, 1.35vw, 21px)` | 700 | — | — | |
| Method list item description | `clamp(11px, 0.95vw, 14px)` | 400 | `1.4` | — | |
| Kicker / eyebrow label | `10px`–`12px` | 700 | — | `0.08em`–`0.14em` | `// THE METHOD`, `THE PREMISE`, footer group labels |
| CTA button label | `clamp(11px, 1.35vw, 20px)` – `1.75vw` | 700 | — | — | |
| Footnote | `clamp(10px, 0.9vw, 13px)` | 400 | — | — | |

**Design rule:** almost nothing uses a fixed pixel size for anything that scales with viewport width — headlines and body copy use `vw` or `clamp(min, vw-preferred, max)` so type scales continuously rather than jumping at breakpoints. Fixed `px` values only appear for small, non-scaling UI chrome (Footer nav links at `13px`, Ticker badge at `13px`, list numerals).

### Legacy system

Root layout (`src/app/layout.tsx`) still loads Geist, Geist Mono, Poppins, Fraunces, and Inter via `next/font/google`, exposed as CSS variables (`--font-geist-sans`, `--font-poppins`, etc.) and Tailwind `font-zt-display` / `font-zt-body` / `font-zt-utility` (all currently aliased to Poppins). These wrap the whole app at the root `<body>` but are overridden by `abandon.className` as soon as the launch page mounts — in practice, the legacy fonts only affect components outside the launch page (e.g. `WaitlistForm`).

---

## 3. Spacing & Layout

**Layout model:** fluid-first, not breakpoint-first. Nearly every section is a `position: relative` block sized by `aspect-ratio` (e.g. `1500/1000` for Method, `1455/1400` for Product, `598/364` for Hero), with children absolutely positioned using percentage offsets (`top`, `left`, `right`) or `vw` units. This makes the page scale continuously with viewport width instead of snapping between fixed layouts.

- **No custom Tailwind breakpoints** are defined (`tailwind.config.ts` only extends `colors` and `fontFamily`); the framework defaults (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`, `2xl: 1536px`) are available but effectively unused by the launch page. The one exception is `WaitlistForm`, which uses `flex-col sm:flex-row` to stack its input/button on mobile.
- **Section padding** uses `vw` and `%` almost exclusively: `padding: '5.5vw 8vw 7vw'` (Premise), `padding: '4vw 3.5vw'` (Method text panel), `padding: '4.5vw 5.2% 0'` (Footer).
- **Grid/flex structures:**
  - Method section: two absolutely-positioned children (full-bleed photo layer + a 50%-width sliding text panel), not a CSS grid — the "grid" feel comes from the panel always occupying exactly half the section width.
  - Method's step list: `display: grid; grid-template-columns: 2.2em 1fr auto;` (number · title+description · tag).
  - Footer: `display: flex; justify-content: space-between; flex-wrap: wrap; gap: 24px` for the top row, nested `display: flex; gap: 5vw` for the link columns.
  - WaitlistForm: `flex flex-col sm:flex-row gap-3`.
- **Border radius scale:** `8px` (ClosingCTA button), `10px` (Product/Method CTA buttons), `999px` / `rounded-full` (Ticker badge, WaitlistForm input/button — fully pill-shaped).
- **Common gap/spacing values:** `12px`, `24px` (Footer), `9px` (Footer link stacks), `gap-3` / `gap-2` (WaitlistForm, Tailwind `0.75rem`/`0.5rem`).

---

## 4. Component Specs

### Buttons (CTA links, styled as `<a>` tags — no dedicated `<button>` component on the launch page)

**Primary CTA (orange-on-cream context, e.g. Product, Method footnote areas):**
```css
background: #FF4A24;
color: #FFFEE6;
font-weight: 700;
font-size: 1.75vw; /* Product */
padding: 1.15vw 2.6vw;
border-radius: 10px;
white-space: nowrap;
```

**Inverted CTA (on orange background, e.g. ClosingCTA):**
```css
background: #FFFEE6;
color: #141414;
font-weight: 700;
font-size: clamp(11px, 1.35vw, 20px);
padding: 1vw 1.9vw;
border-radius: 8px;
```

**Legacy pill button (`WaitlistForm` submit):**
```css
background: theme(colors.zt.coral);      /* #EE3826 */
color: theme(colors.zt.white);
padding: 1rem 1.5rem;                     /* px-6 py-4 */
border-radius: 9999px;                    /* rounded-full */
font-weight: 500;
font-size: 0.875rem;                      /* text-sm */
transition: background-color 150ms;
```
- **Hover:** `background: theme(colors.zt.coral-dim)` (`#D62E1D`)
- **Disabled:** `opacity: 0.5; cursor: not-allowed;`
- **Loading:** icon swapped for a spinning `Loader2` (lucide-react), same footprint

Global link reset (`.launch-page a`): `color: inherit; text-decoration: none;` with `opacity: 0.85` on `:hover` — every in-page link (including the CTAs above) fades slightly on hover rather than changing color/underline.

### Form inputs (`WaitlistForm`, legacy component — only real form in the codebase)

```css
flex: 1;
border-radius: 9999px;               /* rounded-full */
padding: 1rem 1.5rem;                /* px-6 py-4 */
outline: none;
transition: border-color 150ms;
```
- **Light variant:** `background: theme(colors.zt.card)` (`#F3F3F5`), `color: theme(colors.zt.ink)` (`#111111`), `border: 1px solid theme(colors.zt.line)` (`#E7E5E9`), focus → `border-color: rgba(17,17,17,0.3)`
- **Dark variant** (`dark` prop): `background: rgba(255,255,255,0.1)`, `color: white`, placeholder at `40%` opacity, `border: 1px solid theme(colors.zt.line-dark)` (`#3F3F3F`), focus → `border-color: rgba(255,255,255,0.6)`
- **Compact variant:** reduces to `py-3 text-sm`
- **Disabled:** `opacity: 0.6`

**Success state** replaces the whole form with a pill: `border-radius: 9999px; padding: 1rem 1.5rem;` background/text matching the `dark`/light variant, with a `CheckCircle2` icon in `#EE3826` (`text-zt-coral`).

### Cards / surfaces

No dedicated "card" component exists on the current launch page. The closest analogs:
- **Glassmorphism utilities** (`globals.css`, unused by the launch page but available):
  ```css
  .glass {
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  }
  .glass-light {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
  ```
- **Ticker badge** functions as a small pill-card: `background: #FF4A24; border-radius: 999px; padding: 8px 14px;` monospace text (`ui-monospace, Menlo, monospace`) at `13px`/`700`.
- **Method panel** is the nearest thing to a large content "card": a fixed 50%-width, full-height black surface (`background: #000000; padding: 4vw 3.5vw;`) that slides horizontally, containing the kicker, headline, step list, and footnote.

### Motion / transition conventions

- Standard easing curve across sliding/expanding elements: `cubic-bezier(0.65, 0, 0.35, 1)` (Method panel slide, loading-circle expand) or `cubic-bezier(0.55, 0, 0.25, 1)` (Hero person enter/exit).
- Standard durations: `600ms` (Method panel slide), `800ms` (loading circle expand), `450ms` (photo reveal slide-up), `300ms`/`250ms` (opacity fades).
- Color transitions on interactive list rows use a flat `color 0.3s` (no easing curve specified, so default `ease`).
