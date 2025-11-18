// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/hints",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "nuxt-swiper",
    "@nuxt/icon",
    "@nuxt/devtools",
    "@vueuse/nuxt",
  ],

  css: ["~/assets/css/main.css"],
  app: {
    rootAttrs: {
      dir: "rtl",
      lang: "fa",
    },
  
  },
});