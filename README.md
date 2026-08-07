# mobileBar — D&T Mobile Bartending

Four-page marketing site (Home, Services, Menus, Contact) for D&T Mobile Bartending.

Design reference lives one level up at [`../design-handoff/`](../design-handoff/) (prototype tokens + components; already ported into this app).

## Stack

- **Next.js (App Router)** + React, plain JavaScript
- Design tokens ported verbatim to `app/globals.css` (colors, type roles, spacing, elevation, motion)
- Fonts via `next/font` — Cormorant Garamond (display) + Jost (text)
- `lucide-react` for icons

## Structure

- `app/` — routes: `/` (page.jsx), `/services`, `/menus`, `/contact`, plus `layout.jsx` (NavBar/Footer) and `globals.css`
- `components/ds/` — the design-system components ported from the handoff (Button, Card, PackageCard, forms, overlays, and `core.jsx` for the stateless pieces)
- `components/NavBar.jsx`, `components/Footer.jsx` — site chrome
- `lib/data.js` — nav links, drink menus, pricing packages

## Deviations from the handoff (intentional)

1. **Mobile-first.** The prototype was a fixed 1440px desktop layout. All layout
   was rebuilt with mobile-first CSS classes (`app/globals.css`): single-column
   sections that expand at 640/700/900/960px breakpoints, a hamburger nav with a
   full-screen menu overlay (the desktop link row appears ≥900px), stacked hero
   CTAs, 2-up stats grid, and horizontally scrollable menu tabs.
2. **Founders blurb fix.** The handoff's "The D and the T" section squeezed the
   owners' text into the right margin. It is now a proper responsive section:
   full-measure text (photos below) on mobile, balanced photos-left / text-right
   columns on desktop.

## Placeholders to replace

- All photography renders as labeled gradient tiles (`Photo` in `components/ds/core.jsx`) —
  swap for real client images (hero, 2 founder portraits, 3 gallery tiles).
- Contact form submits to a confirmation dialog only — wire to a real endpoint/email service.
- Social links in the footer are stubs.

## Commands

```bash
npm run dev     # local dev
npm run build   # production build (all routes prerender static)
npm start       # serve the build
```
