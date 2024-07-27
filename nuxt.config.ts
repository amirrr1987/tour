import { _fontFamily } from "#tailwind-config/theme";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@vueuse/nuxt", "@ant-design-vue/nuxt"],
  app:{
    head:{
      htmlAttrs:{
        dir: 'rtl',
        lang: 'fa',
      },
      title: 'tour code',
      link:[
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'use-credentials'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap'
        }
      ]
    }
  },

});