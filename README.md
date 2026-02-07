# Astro Portfolio - Creative Developer Portfolio

A high-impact, story-driven developer portfolio built with Astro. Designed for bold visuals, smooth GSAP interactions, and strong SEO fundamentals.

## Why This Portfolio

If you want a fast, SEO-ready portfolio with cinematic motion and a clean content structure, this project is designed to deliver:

- Astro 5 static rendering for speed and stability
- GSAP animations and micro-interactions
- SEO-friendly metadata + structured data
- Responsive layout for mobile, tablet, and desktop
- Optimized image loading (width, height, loading, decoding)
- Sitemap generation for better indexing

## Tech Stack

- Astro (Static Site Generator)
- GSAP (Motion/interaction layer)
- HTML/CSS/JS (Custom UI and animations)

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Start the dev server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview the build

```bash
npm run preview
```

## Project Structure

```text
.
|-- public/
|   |-- assets/           # CSS, JS, shared images
|   |-- img/              # Portfolio images, illustrations, brands
|   `-- video/            # Background and showcase videos
|-- src/
|   |-- components/       # Reusable Astro components
|   |-- data/             # Site metadata (SEO + social)
|   |-- layouts/          # Base layout + SEO meta tags
|   `-- pages/            # Route pages
|-- astro.config.mjs      # Site config (sitemap + canonical URL)
`-- package.json
```

## SEO Checklist (Already in Place)

- Title + description per page
- Canonical URL
- Open Graph + Twitter cards
- Structured data (JSON-LD)
- Sitemap generation
- Robots meta control via layout

Important: set your real domain here:

```text
astro.config.mjs
```

Update brand + metadata here:

```text
src/data/site.ts
```

## Customization Guide

### Hero Section
The hero is designed to be cinematic and interactive. You can update:

- Hero copy (headline/description)
- Media assets (images + video)
- Motion behavior (GSAP)

Key files:

- `src/pages/index.astro`
- `public/assets/js/portfolio-animations.js`
- `public/assets/css/custom.css`

### Global Branding

- Logo: `public/assets/images/logo.svg`
- Favicon: `public/favicon.ico`
- Theme color + metadata: `src/data/site.ts`

## Performance Notes

- Images include explicit dimensions to reduce layout shifts
- Lazy loading + async decoding on non-critical images
- HTML compression enabled via `astro.config.mjs`

## Deploy

This project is ready for any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages). Build output is static.

## License

No license has been specified yet. Add a license if you plan to make this public.
