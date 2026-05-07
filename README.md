# Neo Spider-Tech Noir Portfolio (Next.js 15)

A cinematic, recruiter-ready portfolio for Harshit Aggarwal with Spider-Verse-inspired (original) web-tech aesthetics and immersive motion design.

## Stack
- Next.js 15 (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion
- GSAP + ScrollTrigger
- Three.js via React Three Fiber

## Visual Direction
- Matte black base (`#050505`) with crimson + electric blue energy
- Glassmorphism, holographic UI panels, and neon glow accents
- Futuristic HUD-inspired overlays and cinematic gradients
- Smooth cinematic motion choreography and parallax depth

## Implemented Features
- Cinematic hero with animated role cycling and skyline depth
- Subtle 3D NYC skyline backdrop (`@react-three/fiber`)
- Atmospheric particles, web grid, fog, and rain streaks
- Mouse-follow glow + premium ring cursor
- Web-thread cursor trail + scroll progress indicator
- GSAP scroll reveals and Framer Motion transitions
- Magnetic CTA buttons and glassmorphism panels
- About section with holographic profile card and timeline
- Project cards with 3D tilt hover, feature list, and tech pills
- Neural skill constellation + holographic panels
- Education timeline, certifications showcase, achievements counters
- Contact panel with animated futuristic form styling and social icons
- Konami easter egg: Spider Sense Mode overlay
- Ambient background audio toggle (synthetic oscillator)
- Day/night toggle
- Cinematic loading screen with percentage and glitch layers
- SEO metadata + `robots.ts` + `sitemap.ts` + JSON-LD schema

## Project Structure
```txt
app/
  globals.css
  icon.svg
  layout.tsx
  loading.tsx
  not-found.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  charts/
    skill-network.tsx
    skill-radar.tsx
  interactive/
    ambient-audio.tsx
    animated-background.tsx
    custom-cursor.tsx
    day-night-toggle.tsx
    gsap-reveal.tsx
    mouse-glow.tsx
    scroll-progress.tsx
    skyline-scene.tsx
    spider-sense-overlay.tsx
    web-trail.tsx
  layout/
    footer.tsx
    navbar.tsx
    page-shell.tsx
  providers/
    app-state-provider.tsx
  sections/
    about-section.tsx
    certifications-section.tsx
    contact-section.tsx
    experience-section.tsx
    extras-section.tsx
    hero-section.tsx
    projects-section.tsx
    skills-section.tsx
  ui/
    button.tsx
    glass-card.tsx
    section-title.tsx
    tag.tsx
data/
  portfolio.ts
lib/
  utils.ts
types/
  index.ts
public/
  cursor-ring.svg
  favicon.svg
  resume.pdf
```

## Reusable UI Library
- `Button` (variants + magnetic behavior)
- `GlassCard`
- `SectionTitle`
- `Tag`

## Setup
```bash
npm install
npm run dev
```

## Production Validation
```bash
npm run typecheck
npm run lint
npm run build
```

## Deployment

### Vercel
1. Push this repository to GitHub.
2. Import into Vercel.
3. Keep default Next.js build settings.
4. Deploy.

### Other Platforms
- Build command: `npm run build`
- Start command: `npm run start`
- Output: standard Next.js server output

## Personalization Checklist
- Update identity/content in `data/portfolio.ts`
- Replace `public/resume.pdf` with your real CV
- Update metadata URLs in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`
- Replace social links and project links

## Performance Notes
- 3D background is subtle and lazy-loaded
- Motion effects are lightweight and opacity/transform-based where possible
- Static app routes with optimized chunks from Next.js build

## Accessibility Notes
- High-contrast dark-first UI
- Semantic sections and labels in forms
- Motion kept controlled and non-disruptive

## Legal/Copyright Safety
This project uses an original Spider-inspired visual language and does not include or copy copyrighted Marvel/Spider-Man assets.
