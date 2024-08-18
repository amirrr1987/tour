// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-swiper"],

  app: {
    head: {
      htmlAttrs: {
        dir: "rtl", // جهت متن از راست به چپ
        lang: "fa", // زبان پیش‌فرض فارسی
      },
      title: "کشف جهان با خدمات تور و سفر ما",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "مقاصد جذاب سفر را کشف کنید، تورهای شگفت‌انگیز را رزرو کنید و با خدمات حرفه‌ای تور و سفر ما تعطیلات ایده‌آل خود را برنامه‌ریزی کنید.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "سفر، تور، بسته‌های تعطیلات، سفرهای ماجراجویانه، آژانس مسافرتی",
        },
        // متا تگ‌های Open Graph (OG) برای اشتراک‌گذاری در شبکه‌های اجتماعی
        {
          hid: "og:title",
          property: "og:title",
          content: "کشف جهان با خدمات تور و سفر ما",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "مقاصد جذاب سفر را کشف کنید، تورهای شگفت‌انگیز را رزرو کنید و با خدمات حرفه‌ای تور و سفر ما تعطیلات ایده‌آل خود را برنامه‌ریزی کنید.",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://yourwebsite.com", // آدرس وبسایت خود را جایگزین کنید
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://yourwebsite.com/images/og-image.jpg", // آدرس تصویر مناسب را جایگزین کنید
        },
        // متا تگ‌های Twitter Card برای اشتراک‌گذاری در توییتر
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "کشف جهان با خدمات تور و سفر ما",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "مقاصد جذاب سفر را کشف کنید، تورهای شگفت‌انگیز را رزرو کنید و با خدمات حرفه‌ای تور و سفر ما تعطیلات ایده‌آل خود را برنامه‌ریزی کنید.",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://yourwebsite.com/images/twitter-image.jpg", // آدرس تصویر مناسب را جایگزین کنید
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },

        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap",
        },
        // {
        //   rel: "stylesheet",
        //   href: "/css/main.css",
        // },
      ],
    },
  },
});
