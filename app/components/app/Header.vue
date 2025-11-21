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
const isMobileMenuOpen = ref(false)
</script>

<template>
  <UHeader>
    <template #title>
      <NuxtLink to="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <Logo class="h-11 w-auto fill-primary" />
        <span class="text-2xl font-bold text-primary">TourCode</span>
      </NuxtLink>
    </template>

    <!-- Desktop Navigation Menu -->
    <div class="hidden md:block">
      <UNavigationMenu :items="items" />
    </div>

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

      <!-- Book Now Button (Desktop) -->
      <UButton to="/tours" color="primary" icon="i-lucide-calendar-check" class="hidden sm:flex">
        Book Now
      </UButton>

      <!-- Mobile Menu Button -->
      <UButton variant="ghost" icon="i-lucide-menu" class="md:hidden" @click="isMobileMenuOpen = true"
        aria-label="Open menu" square />
    </template>
  </UHeader>

  <!-- Mobile Navigation Drawer -->
  <UDrawer v-model="isMobileMenuOpen" side="right">
    <template #header>
      <div class="flex items-center justify-between w-full">
        <h3 class="text-lg font-semibold">Menu</h3>
        <UButton variant="ghost" icon="i-lucide-x" @click="isMobileMenuOpen = false" aria-label="Close menu" square />
      </div>
    </template>

    <div class="flex flex-col py-4">
      <!-- Mobile Navigation Links -->
      <NuxtLink v-for="(item, index) in items" :key="index" :to="item.to"
        class="flex items-center gap-3 px-6 py-4 text-base hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        :class="{
          'bg-primary/10 text-primary font-semibold border-r-2 border-primary': route.path === item.to
        }" @click="isMobileMenuOpen = false">
        <span>{{ item.label }}</span>
      </NuxtLink>

      <!-- Divider -->
      <div class="border-t my-2"></div>

      <!-- Mobile Phone Number -->
      <div class="px-6 py-4">
        <a :href="`tel:${phoneNumber}`" class="flex items-center gap-3 text-muted hover:text-primary transition-colors"
          @click="isMobileMenuOpen = false">
          <UIcon name="i-lucide-phone" class="w-5 h-5" />
          <span>{{ phoneNumber }}</span>
        </a>
      </div>

      <!-- Mobile Book Now Button -->
      <div class="px-6 py-4">
        <UButton to="/tours" color="primary" block icon="i-lucide-calendar-check" @click="isMobileMenuOpen = false">
          Book Now
        </UButton>
      </div>
    </div>
  </UDrawer>
</template>
