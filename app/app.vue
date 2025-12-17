<script setup lang="ts">
  import type { Locale, Messages } from '@nuxt/ui'
  import { en, fa_ir } from '@nuxt/ui/locale'

  const { locale: i18nLocale } = useI18n()

  const locale = computed<Locale<Messages>>(() => {
    return i18nLocale.value === 'fa' ? fa_ir : en
  })
</script>
<template>
  <UApp class="bg-gray-100 dark:bg-gray-900" :locale="locale" :dir="locale.dir">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
