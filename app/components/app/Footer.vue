<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const quickLinks: NavigationMenuItem[] = [
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
]

const socialLinks = [
  {
    icon: 'i-simple-icons-facebook',
    label: 'Facebook',
    to: '#',
    ariaLabel: 'Facebook'
  },
  {
    icon: 'i-simple-icons-instagram',
    label: 'Instagram',
    to: '#',
    ariaLabel: 'Instagram'
  },
  {
    icon: 'i-simple-icons-twitter',
    label: 'Twitter',
    to: '#',
    ariaLabel: 'Twitter'
  },
  {
    icon: 'i-simple-icons-youtube',
    label: 'YouTube',
    to: '#',
    ariaLabel: 'YouTube'
  }
]

const contactInfo = {
  phone: '+1 (555) 123-4567',
  email: 'info@toursite.com',
  address: '123 Tour Street, Travel City, TC 12345'
}
</script>

<template>
  <UFooter>
    <template #left>
      <div class="space-y-6">
        <div>
          <Logo class="h-6 w-auto mb-3" />
          <p class="text-sm text-muted max-w-xs">
            Your trusted partner for unforgettable travel experiences. Explore the world with us.
          </p>
        </div>
        <div class="space-y-4">
          <div>
            <h3 class="font-semibold text-sm mb-3">Quick Links</h3>
            <UNavigationMenu :items="quickLinks" variant="link" class="flex-col items-start gap-2" />
          </div>
          <div class="flex flex-col gap-2 text-sm">
            <a :href="`tel:${contactInfo.phone}`"
              class="text-muted hover:text-primary transition-colors flex items-center gap-2">
              <UIcon name="i-lucide-phone" class="w-4 h-4" />
              {{ contactInfo.phone }}
            </a>
            <a :href="`mailto:${contactInfo.email}`"
              class="text-muted hover:text-primary transition-colors flex items-center gap-2">
              <UIcon name="i-lucide-mail" class="w-4 h-4" />
              {{ contactInfo.email }}
            </a>
            <div class="text-muted flex items-start gap-2">
              <UIcon name="i-lucide-map-pin" class="w-4 h-4 mt-0.5 shrink-0" />
              <span>{{ contactInfo.address }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #right>
      <div class="space-y-6">
        <div>
          <h3 class="font-semibold text-sm mb-3">Follow Us</h3>
          <div class="flex gap-2">
            <UButton v-for="social in socialLinks" :key="social.label" :icon="social.icon" color="neutral"
              variant="ghost" :to="social.to" :aria-label="social.ariaLabel" size="sm" />
          </div>
        </div>
        <div class="text-sm text-muted">
          <h3 class="font-semibold text-sm mb-3 text-foreground">Business Hours</h3>
          <div class="space-y-1">
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p>Sat - Sun: 10:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
    </template>

    <template #bottom>
      <div class="w-full pt-6 border-t">
        <UContainer class=" flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-muted text-sm">
            Copyright © {{ new Date().getFullYear() }} Tour Site. All rights reserved.
          </p>
          <div class="flex gap-4 text-sm text-muted">
            <a href="#" class="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </UContainer>
      </div>
    </template>
  </UFooter>
</template>
