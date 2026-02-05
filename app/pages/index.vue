<script setup lang="ts">
const features = [
  {
    meta: 'Nuxt 4 core',
    title: 'App directory, typed and fast',
    description:
      'Lean on the new Nuxt 4 app directory with composables ready for Vue 3.5 and TypeScript.'
  },
  {
    meta: 'Netlify',
    title: 'Nitro preset for serverless',
    description:
      'Ship SSR or static output with the Netlify preset and keep deployments single-command simple.'
  },
  {
    meta: 'Design system',
    title: 'Brutalist, but accessible',
    description:
      'Thick borders, high contrast, and a grid-first layout that keeps content loud and readable.'
  },
  {
    meta: 'Content ready',
    title: 'Markdown or headless, your call',
    description:
      'Structure pages for Netlify CMS, Contentful, or just keep it simple with markdown.'
  }
]

const blueprint = [
  {
    title: 'Start fast',
    detail: 'Clone, install, and run `npm run dev` to get a brutalist homepage instantly.'
  },
  {
    title: 'Shape the grid',
    detail: 'Swap the cards, add new sections, or plug in Nuxt content modules.'
  },
  {
    title: 'Deploy loud',
    detail: 'Netlify picks up the preset, builds in minutes, and serves SSR on demand.'
  }
]

const signals = [
  { label: 'Baseline Lighthouse', value: '95+ ⚡' },
  { label: 'Deploy target', value: 'Netlify Edge' },
  { label: 'DX score', value: 'Developer-first' }
]

useHead({
  title: 'Brutalist Nuxt 4 + Netlify Starter'
})
</script>

<template>
  <div class="page">
    <section class="hero" id="top">
      <div class="hero-copy">
        <p class="kicker mono">Brutalist CMS-inspired starter</p>
        <h1>Build bold Nuxt 4 sites for Netlify in 2026.</h1>
        <p class="lead">
          A modern brutalist template with the new Nuxt app directory, Netlify-ready output,
          and a content grid that refuses to whisper.
        </p>
        <div class="hero-actions">
          <a
            class="button"
            href="https://app.netlify.com/start"
            target="_blank"
            rel="noreferrer"
          >
            Deploy to Netlify
          </a>
          <a class="button button--outline" href="#stack">See the stack</a>
        </div>
        <div class="hero-tags">
          <span class="tag">Nuxt 4</span>
          <span class="tag">Netlify preset</span>
          <span class="tag">Vue 3.5</span>
          <span class="tag">Brutalist UI</span>
        </div>
      </div>
      <div class="hero-panel">
        <p class="panel-title mono">Release notes</p>
        <ul class="panel-list">
          <li>App directory layout with modern Vue composables</li>
          <li>Single-command Netlify deploy via Nitro preset</li>
          <li>Accessible brutalist palette &amp; grid system</li>
          <li>Ready for headless CMS or markdown drop-ins</li>
        </ul>
        <div class="panel-stats">
          <div v-for="signal in signals" :key="signal.label" class="stat">
            <p class="stat-label mono">{{ signal.label }}</p>
            <p class="stat-value">{{ signal.value }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="stack" class="section">
      <div class="section-heading">
        <h2>Stack for the next cycle.</h2>
        <p>
          Everything you need to build a brutalist portfolio, studio, or product launch—
          without the legacy weight of Nuxt 2.
        </p>
      </div>
      <div class="feature-grid">
        <FeatureCard
          v-for="feature in features"
          :key="feature.title"
          :meta="feature.meta"
          :title="feature.title"
          :description="feature.description"
        />
      </div>
    </section>

    <section id="blueprint" class="section blueprint">
      <div class="blueprint-content">
        <h2>Blueprint: brutal by default.</h2>
        <p>
          Inspired by the original Bael grid, the layout keeps typography oversized, panels boxed,
          and interactions obvious. Keep the edges; change everything else.
        </p>
        <ul class="blueprint-list">
          <li v-for="step in blueprint" :key="step.title">
            <strong>{{ step.title }}</strong>
            <span>{{ step.detail }}</span>
          </li>
        </ul>
      </div>
      <div class="blueprint-panel">
        <p class="panel-title mono">Project layout</p>
        <pre class="code-block">app/
  components/
  layouts/
  pages/
public/
nuxt.config.ts</pre>
        <p class="panel-note">
          Swap components, wire content, and keep the brutal grid alive.
        </p>
      </div>
    </section>

    <section id="deploy" class="section deploy">
      <div class="deploy-card">
        <h2>Deploy in one move.</h2>
        <p>
          Netlify detects the Nuxt 4 build, uses Nitro output, and serves SSR where you need it.
        </p>
        <div class="deploy-actions">
          <a
            class="button"
            href="https://app.netlify.com/start"
            target="_blank"
            rel="noreferrer"
          >
            Start on Netlify
          </a>
          <a
            class="button button--outline"
            href="https://nuxt.com/docs/getting-started/deployment"
            target="_blank"
            rel="noreferrer"
          >
            Nuxt deployment docs
          </a>
        </div>
      </div>
      <div class="deploy-aside">
        <p class="panel-title mono">Netlify TOML</p>
        <pre class="code-block">[build]
command = "npm run build"
publish = ".output/public"

[functions]
directory = ".netlify/functions-internal"</pre>
        <p class="panel-note">Need static-only? Run <code>npm run generate</code>.</p>
      </div>
    </section>
  </div>
</template>
