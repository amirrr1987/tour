<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'About Us',
    to: '/about-us'
  },
  {
    label: 'Tours',
    to: '/tours'
  },
  {
    label: 'Contact Us',
    to: '/contact-us'
  }
])

const phoneNumber = '+989198881400'
</script>

<template>
  <UHeader>
    <template #title>
      <NuxtLink to="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <Logo class="h-11 w-auto fill-primary" />
        <span class="text-2xl font-bold text-primary">TourCode</span>
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <!-- Phone Number (hidden on mobile) -->
      <div class="hidden md:flex items-center gap-2 text-sm">
        <UIcon name="i-lucide-phone" class="w-4 h-4 text-muted" />
        <a :href="`tel:${phoneNumber}`" class="text-muted hover:text-primary transition-colors">
          {{ phoneNumber }}
        </a>
      </div>

      <!-- Color Mode Toggle -->
      <UColorModeButton />

      <!-- Book Now Button -->
      <UButton to="/tours" color="primary" icon="i-lucide-calendar-check" class="hidden sm:flex">
        Book Now
      </UButton>

      <!-- Contact Button (mobile) -->
      <UButton to="/contact-us" variant="outline" icon="i-lucide-mail" class="sm:hidden" size="sm">
        Contact
      </UButton>
    </template>
  </UHeader>
</template>
