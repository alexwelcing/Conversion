// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Brutalist Nuxt 4 + Netlify Starter',
      meta: [
        {
          name: 'description',
          content:
            'A bold Nuxt 4 starter for Netlify: brutalist design, fast builds, and modern DX.'
        },
        { name: 'theme-color', content: '#111111' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },
  nitro: {
    preset: 'netlify'
  }
})
