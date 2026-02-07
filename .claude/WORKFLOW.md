# Akera Website Migration - Workflow Guidelines

## Project Overview
Migrating akera.agency from Framer to a custom Next.js 14+ website.

## Current Status
- **Phase 1 (Foundation):** ✅ Complete
- **Phase 2 (Core Pages):** ✅ Complete  
- **Phase 3 (Blog System):** 🔴 Not started
- **Phase 4 (Polish):** 🟡 Partial
- **Phase 5 (Testing):** 🔴 Not started

## Tech Stack
- **Framework:** Next.js 14.2.35 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4.1
- **Animations:** Framer Motion 12.33.0
- **Forms:** React Hook Form 7.71.1
- **Hosting:** Vercel (planned)

## Directory Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── careers/           # Careers page
│   ├── contact/           # Contact page + form
│   ├── legal/             # Legal/Terms page
│   ├── newsletter/        # Newsletter signup
│   └── portfolio/         # Portfolio page
├── components/            # Reusable components
│   ├── sections/          # Page sections (Hero, CTA, etc.)
│   └── *.tsx              # UI components
└── lib/                   # Utilities and constants
```

## Development Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Branding Guidelines
- **Logo:** "./" minimal style
- **Tagline:** "Ready? Set, Grow!"
- **Accent Color:** Orange 🧡
- **Voice:** Confident, direct, results-oriented

## Next Steps
1. Set up MDX + Contentlayer for blog
2. Create blog listing and post pages
3. Add scroll-triggered animations
4. Optimize images and Core Web Vitals
5. Add meta tags, OG images, sitemap
6. Testing and launch prep

## Commit Guidelines
- Use conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`
- Keep commits focused and atomic
- Test before pushing
