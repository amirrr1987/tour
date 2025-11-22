<script setup lang="ts">
const modelValue = defineModel<"grid" | "list">("viewMode", {
  required: true,
  default: "grid",
});
</script>
<template>
  <div class="flex border rounded-lg overflow-hidden">
    <UButton
      :variant="modelValue === 'grid' ? 'solid' : 'ghost'"
      color="neutral"
      size="sm"
      square
      @click="modelValue = 'grid'"
    >
      <UIcon name="i-lucide-grid" class="w-4 h-4" />
    </UButton>
    <UButton
      :variant="modelValue === 'list' ? 'solid' : 'ghost'"
      color="neutral"
      size="sm"
      square
      @click="modelValue = 'list'"
    >
      <UIcon name="i-lucide-list" class="w-4 h-4" />
    </UButton>
  </div>
</template>
