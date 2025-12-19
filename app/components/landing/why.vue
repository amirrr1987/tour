<script setup lang="ts">
  const props = defineProps<{
    features: any[]
  }>()
</script>
<template>
  <UContainer class="">
    <div class="mb-16">
      <div class="text-center mb-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-2">{{ $t('components.landing.why.title') }}</h2>
        <p class="text-muted">
          {{ $t('components.landing.why.description') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <UCard v-for="(feature, index) in props.features" :key="index" class="text-center">
          <div class="flex flex-col items-center gap-4">
            <div class="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
              <UIcon :name="feature.icon" class="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
              <p class="text-sm text-muted">{{ feature.description }}</p>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>
