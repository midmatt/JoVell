# JoVell Hospitality Group — jovellhg.com

A luxury, editorial-style marketing site for **JoVell Hospitality Group**, a
travel, transportation and events company based in Hollywood, Florida.

Built with:

- **Next.js 14** (App Router)
- **Tailwind CSS 3** with a custom design system (brand red `#e6103e`, ink dark scale, champagne accents)
- **Framer Motion** for subtle, choreographed scroll & page-load animations
- **TypeScript**
- **`next/font/google`** — Cormorant Garamond (display) + Manrope (sans)

## Pages

| Route       | Description                                                          |
| ----------- | -------------------------------------------------------------------- |
| `/`         | Home — Hero, Services, Legacy of JoVell, Experiences (+YouTube), Contact |
| `/faq`      | Frequently asked questions (animated accordion)                      |
| `/contact`  | Dedicated contact page (hero + form)                                 |

## Getting started

```bash
# Install
npm install

# Develop
npm run dev          # http://localhost:3000

# Production
npm run build
npm run start

# Lint
npm run lint
```

> Node 18+ recommended.

## Project structure

```
app/
  layout.tsx           # Global shell (fonts, navbar, footer, metadata)
  page.tsx             # Home page composition
  globals.css          # Tailwind + design tokens & components
  faq/page.tsx         # FAQ page
  contact/page.tsx     # Contact page
components/
  Navbar.tsx           # Sticky transparent → blurred glass on scroll
  Footer.tsx           # Newsletter + nav + socials
  FAQAccordion.tsx     # Animated accordion (Framer Motion)
  Reveal.tsx           # Reusable scroll-reveal wrapper
  sections/
    Hero.tsx           # Editorial hero w/ split-word reveal + image card
    Services.tsx       # 3-card services grid (Global Logistics, On Site, Phase One)
    About.tsx          # "The Legacy of JoVell" on cream background
    Experience.tsx     # Romantic / Group / Affiliates + YouTube embed
    Contact.tsx        # Inquiry form + contact rows
```

## Design system

CSS variables and tokens are declared in `app/globals.css` and
`tailwind.config.ts`:

- **Brand red**: `#e6103e` (Tailwind: `bg-brand`, `text-brand`)
- **Ink**: rich near-black scale (`ink-900` … `ink-50`)
- **Bone / Champagne**: warm light backdrops for editorial sections
- **Display font**: `font-display` → Cormorant Garamond
- **Body font**: `font-sans` → Manrope
- **Helpers**: `.container-wide`, `.eyebrow`, `.display-heading`, `.btn-primary`, `.btn-ghost`, `.hairline`

## External links

- Discounted hotel rooms → http://c2eventz.hotelplanner.com
- Air & cruise reservations → http://bookmytravel.com/c2eventz
- Featured affiliates film → https://www.youtube.com/watch?v=kX3Gf0u0894

## Notes

- All imagery is currently sourced from Unsplash (luxury hospitality theme).
  Swap with art-directed photography before launch.
- The newsletter & contact forms are wired to client-side state (`onSubmit` is
  intercepted with a confirmation flash). Connect to your provider of choice
  (Resend, SendGrid, HubSpot, etc.).
- Email/phone in code:
  `joseph@jovellhg.com` · `305.900.7092` · Fort Lauderdale, FL.

## License

© JoVell Hospitality Group. All rights reserved.
