<script setup lang="ts">
  const props = defineProps<{
    stats: any[]
  }>()
</script>
<template>
  <UContainer class="py-12 md:py-16">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      <UCard v-for="(stat, index) in props.stats" :key="index" class="text-center">
        <div class="flex flex-col items-center gap-3">
          <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <UIcon :name="stat.icon" class="w-6 h-6 text-primary" />
          </div>
          <div>
            <div class="text-3xl font-bold mb-1">{{ stat.number }}</div>
            <div class="text-sm text-muted">{{ stat.label }}</div>
          </div>
        </div>
      </UCard>
    </div>
  </UContainer>
</template>
