<script setup lang="ts">
  import type { ViewMode } from '~/models/app.model'

  const modelValue = defineModel<ViewMode>('viewMode', {
    required: true,
    default: 'grid'
  })
</script>
<template>
  <div class="flex border rounded-lg overflow-hidden">
    <UButton
      :variant="modelValue === 'grid' ? 'solid' : 'ghost'"
      :color="modelValue === 'grid' ? 'primary' : 'neutral'"
      size="sm"
      square
      @click="modelValue = 'grid'"
      class="cursor-pointer"
    >
      <UIcon name="i-lucide-grid" class="w-4 h-4" />
    </UButton>
    <UButton
      :variant="modelValue === 'list' ? 'solid' : 'ghost'"
      :color="modelValue === 'list' ? 'primary' : 'neutral'"
      size="sm"
      square
      @click="modelValue = 'list'"
      class="cursor-pointer"
    >
      <UIcon name="i-lucide-list" class="w-4 h-4" />
    </UButton>
  </div>
</template>
