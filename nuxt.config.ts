export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "nuxt-swiper",
    "nuxt-typed-router",
    "dayjs-nuxt",
    "@nuxt/image",
  ],

  plugins: ["~/plugins/dayjs"],
  css: ["@/assets/styles/main.css"],
  app: {
    head: {
      htmlAttrs: {
        dir: "rtl",
        lang: "fa",
      },
      title: "کشف جهان با خدمات تور و سفر ما",
    },
  },
});
