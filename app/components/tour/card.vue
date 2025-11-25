<script setup lang="ts">
import type { ITour } from '~/models/tour.model';

const props = defineProps<{
  tour: ITour;
}>();
</script>
<template>
  <UCard class="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
    <div class="relative h-48 overflow-hidden">
      <img :src="props.tour.image" :alt="props.tour.name"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
      <div class="absolute top-3 left-3 flex gap-2">
        <UBadge v-if="props.tour.featured" color="primary">Featured</UBadge>
        <UBadge v-if="props.tour.originalPrice" color="success">Sale</UBadge>
      </div>
      <div class="absolute top-3 right-3">
        <UBadge color="neutral" variant="solid" class="bg-black/50">
          <UIcon name="i-lucide-map-pin" class="w-3 h-3 mr-1" />
          {{ props.tour.location }}
        </UBadge>
      </div>
    </div>
    <div class="p-4">
      <div class="flex items-start justify-between mb-2">
        <h3 class="text-lg font-semibold line-clamp-1">
          {{ props.tour.name }}
        </h3>
      </div>
      <p class="text-sm text-muted mb-3 line-clamp-2">
        {{ props.tour.description }}
      </p>
      <div class="flex items-center gap-4 mb-3 text-sm text-muted">
        <div class="flex items-center gap-1">
          <UIcon name="i-lucide-clock" class="w-4 h-4" />
          {{ props.tour.duration }}
        </div>
        <div class="flex items-center gap-1">
          <UIcon name="i-lucide-star" class="w-4 h-4 text-yellow-500 fill-yellow-500" />
          {{ props.tour.rating }} ({{ props.tour.reviews }})
        </div>
      </div>
      <div class="flex items-center justify-between pt-3 border-t">
        <div>
          <div v-if="props.tour.originalPrice" class="flex items-center gap-2">
            <span class="text-lg font-bold text-primary">${{ props.tour.price }}</span>
            <span class="text-sm text-muted line-through">${{ props.tour.originalPrice }}</span>
          </div>
          <span v-else class="text-lg font-bold text-primary">${{ props.tour.price }}</span>
          <span class="text-xs text-muted">/person</span>
        </div>
        <UButton :to="`/tours/${props.tour.id}`" size="sm" icon="i-lucide-arrow-right">
          View
        </UButton>
      </div>
    </div>
  </UCard>
</template>
