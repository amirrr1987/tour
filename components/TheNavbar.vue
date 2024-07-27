<script setup lang="ts">
const route = useRoute();

const links = [
  {
    label: "Home",
    avatar: {
      src: "https://avatars.githubusercontent.com/u/739984?v=4",
    },
  },
  {
    label: "Tour",
    icon: "i-heroicons-home",
    to: "/getting-started/installation",
  },
  {
    label: "About",
    icon: "i-heroicons-chart-bar",
    to: "/about",
  },
  {
    label: "Contact",
    icon: "i-heroicons-command-line",
    to: "/contact",
  },
];

const navUI = {
  container: "container mx-auto",
};
</script>

<template>
  <UHorizontalNavigation :links="links" :ui="navUI" />
</template>
