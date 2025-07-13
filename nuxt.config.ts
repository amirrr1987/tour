// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    'nuxt-swiper',
    '@vueuse/nuxt'
  ],
  css: ['assets/css/main.css'],
  app: {
    rootAttrs: {
      dir: 'rtl',
      lang: 'fa'
    }
  }
})