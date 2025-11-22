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
  <div class="py-1">
    <UContainer>
      <div class="flex justify-end gap-x-2 items-center">
        <a
          :href="`tel:${phoneNumber}`"
          class="text-muted text-sm hover:text-primary transition-colors flex items-center gap-2"
        >
          <UIcon name="i-lucide-phone" class="w-4 h-4" />
          {{ phoneNumber }}
        </a>
        <UColorModeButton class="cursor-pointer" size="xs" />
      </div>
    </UContainer>
    <USeparator />
  </div>
  <UHeader to="/" :ui="{}">
    <template #title>
      <div class="flex items-center gap-2">
        <Logo class="h-11 w-auto fill-primary" />
        <span class="text-2xl font-bold text-primary">TourCode</span>
      </div>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UButton
        color="primary"
        variant="soft"
        to="/tours"
        icon="i-lucide-calendar-check"
      >
        Book Now
      </UButton>
    </template>
  </UHeader>
</template>
