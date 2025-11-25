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
  const phoneNumber = '+989198881400'
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
  <nav>
    <UContainer class="flex items-center justify-between pb-2">
      <div class="flex items-center gap-2">
        <Logo class="h-11 w-auto fill-primary" />
        <span class="text-2xl font-bold text-primary hidden md:block">TourCode</span>
      </div>
      <UNavigationMenu
        :items="items"
        variant="link"
        class="flex-col items-start gap-2 md:flex-row md:gap-4"
      />
      <UButton color="primary" variant="soft" to="/tours" icon="i-lucide-calendar-check">
        <span class="hidden md:block">Book Now</span>
      </UButton>
    </UContainer>
  </nav>
</template>
