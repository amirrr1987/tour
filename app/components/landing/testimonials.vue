<script setup lang="ts">
  const props = defineProps<{
    testimonials: any[]
  }>()
</script>
<template>
  <UContainer class="py-12 md:py-16">
    <div class="mb-16">
      <div class="text-center mb-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-2">{{ $t('components.landing.testimonials.title') }}</h2>
        <p class="text-muted">{{ $t('components.landing.testimonials.description') }}</p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <UCard v-for="(testimonial, index) in props.testimonials" :key="index">
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-1 mb-2">
              <UIcon
                v-for="i in testimonial.rating"
                :key="i"
                name="i-lucide-star"
                class="w-4 h-4 text-yellow-500 fill-yellow-500"
              />
            </div>
            <p class="text-muted italic">"{{ testimonial.text }}"</p>
            <div class="flex items-center gap-3 pt-4 border-t">
              <img
                :src="testimonial.avatar"
                :alt="testimonial.name"
                class="w-10 h-10 rounded-full"
              />
              <div>
                <div class="font-semibold">{{ testimonial.name }}</div>
                <div class="text-sm text-muted">{{ testimonial.location }}</div>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>
