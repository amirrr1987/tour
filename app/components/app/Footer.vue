<script setup lang="ts">
  import type { NavigationMenuItem } from '@nuxt/ui'

  const { t } = useI18n()
  const quickLinks: NavigationMenuItem[] = [
    {
      label: t('home.title'),
      to: '/'
    },
    {
      label: t('aboutUs.title'),
      to: '/about-us'
    },
    {
      label: t('tours.title'),
      to: '/tours'
    },
    {
      label: t('contactUs.title'),
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
  <UFooter class="border-t border-gray-200 pb-0" :ui="{ bottom: 'py-2 lg:py-2' }">
    <template #left>
      <div class="space-y-6">
        <div>
          <Logo class="h-6 w-auto mb-3" />
          <p class="text-sm text-muted max-w-xs">
            {{ $t('components.footer.description') }}
          </p>
        </div>
        <div class="space-y-4">
          <div>
            <h3 class="font-semibold text-sm mb-3">{{ $t('components.footer.quickLinks') }}</h3>
            <UNavigationMenu
              :items="quickLinks"
              variant="link"
              class="flex-col items-start gap-2"
            />
          </div>
          <div class="flex flex-col gap-2 text-sm">
            <a
              :href="`tel:${contactInfo.phone}`"
              class="text-muted hover:text-primary transition-colors flex items-center gap-2"
            >
              <UIcon name="i-lucide-phone" class="w-4 h-4" />
              {{ contactInfo.phone }}
            </a>
            <a
              :href="`mailto:${contactInfo.email}`"
              class="text-muted hover:text-primary transition-colors flex items-center gap-2"
            >
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
          <h3 class="font-semibold text-sm mb-3">{{ $t('components.footer.followUs') }}</h3>
          <div class="flex gap-2">
            <UButton
              v-for="social in socialLinks"
              :key="social.label"
              :icon="social.icon"
              color="neutral"
              variant="ghost"
              :to="social.to"
              :aria-label="social.ariaLabel"
              size="sm"
            />
          </div>
        </div>
        <div class="text-sm text-muted">
          <h3 class="font-semibold text-sm mb-3 text-foreground">{{ $t('components.footer.businessHours') }}</h3>
          <div class="space-y-1">
            <p>{{ $t('components.footer.businessHoursWeekday') }}</p>
            <p>{{ $t('components.footer.businessHoursWeekend') }}</p>
          </div>
        </div>
      </div>
    </template>

    <template #bottom>
      <UContainer class="border-t border-gray-200 pt-2">
        <div class="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-muted text-sm">
            {{ $t('components.footer.copyright', { year: new Date().getFullYear() }) }}
          </p>
          <div class="flex gap-4 text-sm text-muted">
            <a href="#" class="hover:text-primary transition-colors">{{ $t('components.footer.privacyPolicy') }}</a>
            <a href="#" class="hover:text-primary transition-colors">{{ $t('components.footer.termsOfService') }}</a>
          </div>
        </div>
      </UContainer>
    </template>
  </UFooter>
</template>
<style lang="less">
</style>
