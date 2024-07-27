<script setup lang="ts">
const route = useRoute();

const navbarLinks = [
  {
    label: "تور کد",
    to: "/",

    avatar: {
      src: "https://avatars.githubusercontent.com/u/739984?v=4",
    },
  },
  {
    label: "درباره ما",
    icon: "i-heroicons-chart-bar",
    to: "/about",
  },
  {
    label: "تور‌ها",
    icon: "i-heroicons-home",
    to: "/tour",
  },

  {
    label: "تماس با ما",
    icon: "i-heroicons-command-line",
    to: "/contact",
  },
];

const navUI = {
  container: "container mx-auto",
};
</script>

<template>
  <UHorizontalNavigation :links="navbarLinks" :ui="navUI"   />
</template>
