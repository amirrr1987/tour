<script setup lang="ts">
const route = useRoute();

const links = [
  [
    {
      label: "صفحه اصلی",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
      to: "/",
    },
    {
      label: "درباره ما",
      to: "/about-us",
    },
    {
      label: "تور داخلی",
      to: "/tour",
    },
    {
      label: "تور خارجی",
      to: "/components/command-palette",
    },
  ],
  [
    {
      label: "صفحه اصلی",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
      to: "/",
    },
    {
      label: "درباره ما",
      to: "/about-us",
    },
    {
      label: "تور داخلی",
      to: "/tour",
    },
    {
      label: "تور خارجی",
      to: "/components/command-palette",
    },
  ],
];

const config = {
  wrapper: "flex justify-between container mx-auto",
};
</script>

<template>
  <UHorizontalNavigation
    :links="links"
    :ui="config"
  />
</template>
