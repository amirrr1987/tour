<script setup lang="ts">
const props = defineProps<{
  values: any[]
}>()
</script>
<template>
  <UContainer>
    <div class="mb-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
        <p class="text-lg text-muted max-w-2xl mx-auto">
          These core values guide everything we do and shape the experiences we create for our
          travelers.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <UCard v-for="(value, index) in props.values" :key="index" class="text-center">
          <div class="flex flex-col items-center gap-4">
            <div class="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
              <UIcon :name="value.icon" class="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">{{ value.title }}</h3>
              <p class="text-sm text-muted">{{ value.description }}</p>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>
