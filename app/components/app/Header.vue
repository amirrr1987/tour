<script setup lang="ts">
  import type { NavigationMenuItem } from '@nuxt/ui'
  import { en, fa_ir } from '@nuxt/ui/locale'

  const { t } = useI18n()
  const items = computed<NavigationMenuItem[]>(() => [
    {
      label: t('home.title'),
      icon: 'i-lucide-home',
      to: '/'
    },
    {
      label: t('tours.title'),
      icon: 'i-lucide-calendar-check',
      to: '/tours'
    },
    {
      label: t('aboutUs.title'),
      icon: 'i-lucide-info',
      to: '/about-us'
    },
    {
      label: t('contactUs.title'),
      icon: 'i-lucide-phone',
      to: '/contact-us'
    }
  ])
  const switchLocalePath = useSwitchLocalePath()

  const locale = ref('fa-IR')
  const handleLocaleChange = (loc: 'en' | 'fa-IR') => {
    if (loc === 'en') {
      navigateTo(switchLocalePath('en'))
      window.document.documentElement.lang = 'en'
      window.document.dir = 'ltr'
    }
    if (loc === 'fa-IR') {
      navigateTo(switchLocalePath('fa'))
      window.document.documentElement.lang = 'fa'
      window.document.dir = 'rtl'
    }
  }
  onMounted(() => {
    if (window.document.documentElement.lang === 'en') {
      locale.value = 'en'
    }
    if (window.document.documentElement.lang === 'fa') {
      locale.value = 'fa-IR'
    }
  })
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
        <span class="hidden md:block">{{ $t('components.header.bookNow') }}</span>
      </UButton>
      <UColorModeButton class="cursor-pointer" />

      <ULocaleSelect
        v-model="locale"
        @update:model-value="(value: string) => handleLocaleChange(value as 'en' | 'fa-IR')"
        :locales="[fa_ir, en]"
        class="w-30"
      />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
