// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/icon",
    "nuxt-lodash",
    "nuxt-swiper",
  ],
  css: ["assets/css/main.css"],
  app: {
    rootAttrs: {
      dir: "rtl",
      lang: "fa",
    },
  },
  lodash: {
    prefix: "_",
  },
});
