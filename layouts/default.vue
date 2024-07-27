<template>
  <TheNavbar />
  <HomeCarousel />
  <section class="py-4">
    <TheContainer>
      <UBreadcrumb :links="breadcrumbLinks" />
    </TheContainer>
  </section>
  <slot />
  <UDivider class="my-4" />
  <TheFooter />
</template>

<script setup lang="ts">
import type { RouteLocationNormalizedLoadedGeneric } from "vue-router";

const route = useRoute();

const links = [
  {
    label: "صفحه اصلی",
    icon: "i-heroicons-home",
    to: "/",
  },
];

const generateBreadcrumbLinks = (
  route: RouteLocationNormalizedLoadedGeneric
) => {
  const pathArray = route.path.split("/").filter((segment: any) => segment);
  const links = pathArray.map((segment: string, index: number) => {
    const to = "/" + pathArray.slice(0, index + 1).join("/");
    const label = segment.charAt(0).toUpperCase() + segment.slice(1); // Capitalize first letter
    return { label, to };
  });

  // Adding the home link at the beginning
  return [
    {
      label: "صفحه اصلی",
      icon: "i-heroicons-home",
      to: "/",
    },
    ...links,
  ];
};

const breadcrumbLinks = computed(() => generateBreadcrumbLinks(route));
</script>
<style lang="css">
#__nuxt {
  display: grid;
  grid-template-rows: max-content 1fr max-content max-content;
  min-height: 100vh;
}
</style>
