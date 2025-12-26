# hire-me

An irreverent-but-useful hiring one-pager built with Astro + Tailwind for recruiters, hiring managers, and collaborators who want the receipts fast.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:4321/ to preview the site.

## Customize

- Update contact + case-study links, metrics, and references in `src/config/profile.ts`.
- Swap icons or add new CTAs in `public/icons/`.
- Adjust colors/typography in `src/styles/global.css` if you want a different palette.

## Deploy

Same as any Astro project—Vercel, Netlify, etc. Ship the dist folder or hook it straight to a platform.

## Reuse in other Astro projects

- Import the shared theme tokens via `@import './src/styles/design-system.css';` (or add it to your layout) to get the light/dark palette + surface styles.
- Components are prop-driven and exported through `src/components/index.ts`, so you can cherry-pick like `import { HeroSection } from '../components';` and pass your own data.
- All prop types live in `src/config/profile.ts` and are re-exported alongside the components for type-safe configs.
- Theme/debug controls stay in `PageLayout`, but you can also import `design-system.css` directly if you prefer your own layout wrapper.
