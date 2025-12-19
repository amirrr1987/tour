<script setup lang="ts">
  const props = defineProps<{
    destinations: any[]
  }>()
</script>
<template>
  <UContainer class="">
    <div class="mb-16">
      <div class="text-center mb-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-2">{{ $t('components.landing.destinations.title') }}</h2>
        <p class="text-muted">{{ $t('components.landing.destinations.description') }}</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <UCard
          v-for="(destination, index) in props.destinations"
          :key="index"
          class="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
        >
          <div class="relative h-64 overflow-hidden">
            <img
              :src="destination.image"
              :alt="destination.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <h3 class="text-xl font-bold mb-1">{{ destination.name }}</h3>
              <p class="text-sm opacity-90">{{ destination.tours }}</p>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>
