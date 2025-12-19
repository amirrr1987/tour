<script setup lang="ts">
  const props = defineProps<{
    total: number
    count: number
  }>()
</script>
<template>
  <p class="text-sm text-muted">
    {{ $t('components.tour.totalCount.showing') }}
    {{ props.count }}
    {{ $t('components.tour.totalCount.of') }}
    {{ props.total }}
    {{ $t('components.tour.totalCount.tours') }}
  </p>
</template>
