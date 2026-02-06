# Akera Website - Claude Code Context

## Project Overview
Migration of akera.agency from Framer to Next.js 14+ with Framer Motion.

**Goal:** Create a fast, SEO-optimized, easily editable website with blog capabilities.

## Tech Stack
| Layer | Technology |
|-------|------------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animations | Motion (framer-motion) |
| Content | MDX + Contentlayer |
| Forms | React Hook Form + Resend |
| Hosting | Vercel |

## Project Structure
```
app/
├── (marketing)/
│   ├── page.tsx           # Homepage
│   ├── portfolio/
│   ├── contact/
│   ├── newsletter/
│   ├── careers/
│   └── legal/
├── blog/
│   ├── page.tsx           # Blog listing
│   └── [slug]/page.tsx    # Individual posts
├── layout.tsx
└── globals.css
components/
├── ui/                    # Base components
├── sections/              # Page sections
└── blog/                  # Blog components
content/
├── posts/                 # MDX blog posts
└── case-studies/          # MDX case studies
lib/
├── animations.ts          # Motion presets
└── utils.ts
```

## Branding
- **Logo:** "./" minimal style
- **Tagline:** "Ready? Set, Grow!"
- **Primary Color:** Orange (#F97316 or similar)
- **Voice:** Confident, direct, results-oriented
- **Positioning:** Data-driven design, conversion optimization

## Key Pages
1. **Homepage** - Hero, Comparison, Process, CTAs
2. **Portfolio** - Case study grid + individual pages
3. **Contact** - Form + Calendly integration
4. **Newsletter** - Email signup
5. **Careers** - Job listings
6. **Legal** - Terms of Use
7. **Blog** - Content marketing (NEW)

## Animation Guidelines
- Use Motion for all animations
- Scroll-triggered animations with `whileInView`
- Page transitions with `AnimatePresence`
- Respect `prefers-reduced-motion`
- Keep animations subtle and purposeful

## Performance Targets
- Lighthouse Performance: >90
- LCP: <2.5s
- FID: <100ms
- CLS: <0.1

## Documentation References
See `.claude/docs/` for technology-specific documentation.
