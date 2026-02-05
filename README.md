# Brutalist Nuxt 4 + Netlify Starter

A 2026-ready Nuxt 4 template with a brutalist grid, bold typography, and a Netlify-first deployment story. Inspired by the original Bael layout, this starter keeps the edges sharp while upgrading everything else to the modern Nuxt stack.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/alexwelcing/Conversion)

## One-click deploy

Click the **Deploy to Netlify** button to spin up a new site straight from this repo. Netlify will build the app with the Nuxt 4 preset and publish it using the settings in `netlify.toml`.

## What’s inside

- Nuxt 4 app directory layout with Vite-powered dev tooling
- Nitro preset configured for Netlify Functions + static output
- Brutalist, high-contrast UI system you can swap quickly
- Ready for markdown or headless CMS content

## Quick start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the brutalist landing page.

## Build & deploy

```bash
npm run build
npm run preview
```

Netlify uses the configuration in `netlify.toml` and the Nitro preset to publish `.output/public` and serve serverless functions from `.netlify/functions-internal`.

## Repo tour (Nuxt 4 + Netlify learning map)

- `app/pages/index.vue` → primary landing page content and layout
- `app/assets/css/main.css` → brutalist typography and grid system
- `nuxt.config.ts` → Nuxt 4 configuration and Nitro preset wiring
- `netlify.toml` → build command, publish directory, and dev settings
- `public/` → static assets served as-is

## Customize

- Edit `app/pages/index.vue` to change content blocks.
- Update styles in `app/assets/css/main.css`.
- Add pages in `app/pages` or components in `app/components`.

## License

MIT
