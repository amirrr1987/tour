<script setup lang="ts">
  const props = defineProps<{
    featuredTours: any[]
  }>()
</script>
<template>
  <UContainer class="">
    <div class="mb-16">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-2">Featured Tours</h2>
          <p class="text-muted">Handpicked experiences for unforgettable memories</p>
        </div>
        <UButton to="/tours" variant="outline" icon="i-lucide-arrow-right"> View All </UButton>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <UCard
          v-for="tour in props.featuredTours"
          :key="tour.id"
          class="overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div class="relative h-48 overflow-hidden">
            <img :src="tour.image" :alt="tour.name" class="w-full h-full object-cover" />
            <div class="absolute top-3 right-3">
              <UBadge color="primary">{{ tour.price }}</UBadge>
            </div>
          </div>
          <div class="p-4">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-lg font-semibold">{{ tour.name }}</h3>
              <UBadge variant="subtle" color="neutral">{{ tour.duration }}</UBadge>
            </div>
            <p class="text-sm text-muted mb-4 line-clamp-2">{{ tour.description }}</p>
            <UButton :to="`/tours/${tour.id}`" variant="outline" block size="sm">
              Learn More
            </UButton>
          </div>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>
