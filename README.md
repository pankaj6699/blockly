# Blocly — Crypto PR, Marketing & Media Agency

A modern, redesigned marketing site for **Blocly**, a crypto-native PR, marketing, and media agency. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

> The original `blocly.co` domain is currently a parked placeholder, so all copy and content here is **fresh, original placeholder content** for a crypto/Web3 PR & media agency. Design and feature inspiration was drawn from fatjoe.com, citeos.io, and coingape.com. Swap the placeholder copy/data in `src/lib/site.ts` with real content when available.

## Tech stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first theme tokens in `src/app/globals.css`)
- Zero runtime UI dependencies — custom components, inline SVG icon set.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
```

## Project structure

```
src/
  app/
    layout.tsx              # root layout: ticker + header + footer + metadata
    page.tsx                # homepage
    services/page.tsx
    pricing/page.tsx
    case-studies/page.tsx
    case-studies/[slug]/    # SSG case study detail
    insights/page.tsx
    insights/[slug]/        # SSG article detail
    about/page.tsx
    contact/page.tsx        # free-audit request form
    not-found.tsx
    globals.css             # design tokens, theme, utilities
  components/
    site-header.tsx         # sticky nav + mega menu + mobile menu
    site-footer.tsx
    crypto-ticker.tsx       # animated live-feel price ticker
    contact-form.tsx        # audit request form
    home/                   # hero + AI visibility-score widget
    blocks/                 # reusable sections (services, stats, process, etc.)
    ui/                     # primitives (button, icon, section, container)
  lib/
    site.ts                 # ALL site content & config (edit copy here)
```

## Editing content

All copy, services, pricing, case studies, testimonials, and posts live in **`src/lib/site.ts`**. Update that single file to change site content without touching components.

## Notable features

- Animated crypto price ticker (purely visual, no external API).
- "AI Visibility Score" widget — animated score gauge + per-engine bars (signature differentiator).
- Mega-menu navigation with mobile drawer.
- Data-driven services, pricing tiers, FAQ accordion, case-study + blog detail pages.
- Free-audit lead capture form (front-end demo — wire to an API route/CRM for production).
- Fully responsive, dark, modern crypto aesthetic with gradient accents and glassmorphism.
