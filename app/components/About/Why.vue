<script setup lang="ts">
const props = defineProps<{
  features: any[]
}>()
</script>
<template>
  <UContainer>
    <div class="mb-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
        <p class="text-lg text-muted max-w-2xl mx-auto">
          We go above and beyond to ensure your travel experience is nothing short of extraordinary.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard v-for="(feature, index) in props.features" :key="index">
          <div class="flex flex-col gap-4">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <UIcon :name="feature.icon" class="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
              <p class="text-sm text-muted">{{ feature.description }}</p>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>
