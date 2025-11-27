<script setup lang="ts">
  import type { NavigationMenuItem } from '@nuxt/ui'

  const items = computed<NavigationMenuItem[]>(() => [
    {
      label: 'Home',
      icon: 'i-lucide-home',
      to: '/'
    },
    {
      label: 'About Us',
      icon: 'i-lucide-info',
      to: '/about-us'
    },
    {
      label: 'Tours',
      icon: 'i-lucide-calendar-check',
      to: '/tours'
    },
    {
      label: 'Contact Us',
      icon: 'i-lucide-phone',
      to: '/contact-us'
    }
  ])
</script>
<template>
  <UHeader>
    <template #title>
      <Logo class="h-11 w-auto fill-primary" />
      <span class="text-2xl font-bold text-primary hidden md:block">TourCode</span>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UButton color="primary" variant="soft" to="/tours" icon="i-lucide-calendar-check">
        <span class="hidden md:block">Book Now</span>
      </UButton>
      <UColorModeButton class="cursor-pointer" />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
