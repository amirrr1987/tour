<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Us",
    to: "/about-us",
  },
  {
    label: "Tours",
    to: "/tours",
  },
  {
    label: "Contact Us",
    to: "/contact-us",
  },
]);
const phoneNumber = "+989198881400";
</script>

<template>
  <UHeader to="/">
    <template #title>
      <div class="flex items-center gap-2">
        <Logo class="h-11 w-auto fill-primary" />
        <span class="text-2xl font-bold text-primary">TourCode</span>
      </div>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <a
        :href="`tel:${phoneNumber}`"
        class="text-muted hover:text-primary transition-colors flex items-center gap-2"
      >
        <UIcon name="i-lucide-phone" class="w-4 h-4" />
        {{ phoneNumber }}
      </a>
      <UColorModeButton class="cursor-pointer" />
      <UButton
        color="primary"
        variant="soft"
        to="/tours"
        target="_blank"
        icon="i-lucide-calendar-check"
      >
        Book Now
      </UButton>
    </template>
  </UHeader>
</template>
