<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import type { ICategory } from '~/models/category.model'

const route = useRoute()
const { tours } = storeToRefs(useTourStore())
const { categories } = storeToRefs(useCategoryStore())

// Helper function to get category name from ID
const getCategoryName = (categoryId: ICategory['id']) => {
  const cat = categories.value.find(c => c.id === categoryId)
  return cat?.name || 'Unknown'
}

// Get tour ID from route params
const tourId = computed(() => parseInt(route.params.id as string))

// Find the tour from store
const tour = computed(() => {
  return tours.value.find(t => t.id === tourId.value)
})

const { t } = useI18n()
// Handle 404 if tour not found
if (!tour.value) {
  throw createError({
    statusCode: 404,
    statusMessage: t('components.tour.detail.tourNotFound')
  })
}

// Booking form state
const bookingForm = ref({
  travelers: 1,
  startDate: null as CalendarDate | null,
  specialRequests: ''
})

const startInputDateRef = useTemplateRef('startInputDateRef')
const startModelValue = shallowRef(new CalendarDate(2025, 1, 10))

const isBooking = ref(false)
const toast = useToast()

// Calculate total price
const totalPrice = computed(() => {
  return tour.value ? tour.value.price * bookingForm.value.travelers : 0
})

// Related tours (same category, excluding current tour)
const relatedTours = computed(() => {
  if (!tour.value) return []
  return tours.value
    .filter(t => t.category === tour.value?.category && t.id !== tour.value?.id)
    .slice(0, 3)
})

const handleBooking = async () => {
  if (!bookingForm.value.startDate) {
    toast.add({
      title: t('components.tour.detail.dateRequired'),
      description: t('components.tour.detail.dateRequiredDescription'),
      color: 'warning'
    })
    return
  }

  isBooking.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  isBooking.value = false

  toast.add({
    title: t('components.tour.detail.bookingSuccessful'),
    description: t('components.tour.detail.bookingSuccessfulDescription', { tourName: tour.value?.name }),
    color: 'success'
  })
}

// Set page meta
useHead({
  title: tour.value?.name || 'Tour Details',
  meta: [
    {
      name: 'description',
      content: tour.value?.description || ''
    }
  ]
})
</script>

<template>
  <UPage v-if="tour && tour.id" class="py-6 md:py-8">
    <UContainer>
      <!-- Breadcrumb -->
      <div class="mb-6">
        <nav class="flex items-center gap-2 text-sm text-muted">
          <NuxtLink to="/" class="hover:text-primary transition-colors">{{ $t('components.tour.detail.breadcrumbHome') }}</NuxtLink>
          <UIcon name="i-lucide-chevron-right" class="w-4 h-4" />
          <NuxtLink to="/tours" class="hover:text-primary transition-colors">{{ $t('components.tour.detail.breadcrumbTours') }}</NuxtLink>
          <UIcon name="i-lucide-chevron-right" class="w-4 h-4" />
          <span class="text-foreground">{{ tour.name }}</span>
        </nav>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Hero Image -->
          <div class="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
            <img :src="tour.image" :alt="tour.name" class="w-full h-full object-cover" />
            <div class="absolute top-4 left-4 flex gap-2">
              <UBadge v-if="tour.featured" color="primary" size="lg">{{ $t('components.tour.detail.featured') }}</UBadge>
              <UBadge v-if="tour.originalPrice" color="success" size="lg">{{ $t('components.tour.detail.sale') }}</UBadge>
            </div>
            <div class="absolute top-4 right-4">
              <UBadge color="neutral" variant="solid" size="lg" class="bg-black/50">
                <UIcon name="i-lucide-map-pin" class="w-4 h-4 mr-1" />
                {{ tour.location }}
              </UBadge>
            </div>
          </div>

          <!-- Tour Title & Info -->
          <div>
            <div class="flex items-start justify-between mb-4">
              <div>
                <h1 class="text-3xl md:text-4xl font-bold mb-2">{{ tour.name }}</h1>
                <div class="flex items-center gap-4 text-muted">
                  <div class="flex items-center gap-1">
                    <UIcon name="i-lucide-map-pin" class="w-4 h-4" />
                    {{ tour.location }}
                  </div>
                  <div class="flex items-center gap-1">
                    <UIcon name="i-lucide-clock" class="w-4 h-4" />
                    {{ tour.duration }}
                  </div>
                  <div class="flex items-center gap-1">
                    <UIcon name="i-lucide-star" class="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    {{ tour.rating }} ({{ tour.reviews }} {{ $t('components.tour.detail.reviews') }})
                  </div>
                </div>
              </div>
              <UBadge variant="subtle" size="lg">{{ getCategoryName(tour.category) }}</UBadge>
            </div>
          </div>

          <!-- Description -->
          <UCard>
            <template #header>
              <h2 class="text-2xl font-semibold">{{ $t('components.tour.detail.aboutTour') }}</h2>
            </template>
            <p class="text-muted leading-relaxed">{{ tour.description }}</p>
          </UCard>

          <!-- Tour Highlights -->
          <UCard>
            <template #header>
              <h2 class="text-2xl font-semibold">{{ $t('components.tour.detail.highlights') }}</h2>
            </template>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="flex items-start gap-3">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 class="font-semibold mb-1">{{ $t('components.tour.detail.expertGuides') }}</h3>
                  <p class="text-sm text-muted">{{ $t('components.tour.detail.expertGuidesDesc') }}</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 class="font-semibold mb-1">{{ $t('components.tour.detail.smallGroups') }}</h3>
                  <p class="text-sm text-muted">{{ $t('components.tour.detail.smallGroupsDesc') }}</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 class="font-semibold mb-1">{{ $t('components.tour.detail.flexibleCancellation') }}</h3>
                  <p class="text-sm text-muted">{{ $t('components.tour.detail.flexibleCancellationDesc') }}</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 class="font-semibold mb-1">{{ $t('components.tour.detail.bestPriceGuarantee') }}</h3>
                  <p class="text-sm text-muted">{{ $t('components.tour.detail.bestPriceGuaranteeDesc') }}</p>
                </div>
              </div>
            </div>
          </UCard>

          <!-- Reviews Section -->
          <UCard>
            <template #header>
              <div class="flex items-center justify-between">
                <h2 class="text-2xl font-semibold">{{ $t('components.tour.detail.reviewsTitle') }}</h2>
                <div class="flex items-center gap-2">
                  <UIcon name="i-lucide-star" class="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span class="text-lg font-semibold">{{ tour.rating }}</span>
                  <span class="text-muted">({{ tour.reviews }} {{ $t('components.tour.detail.reviews') }})</span>
                </div>
              </div>
            </template>
            <div class="space-y-4">
              <div class="flex items-start gap-4 pb-4 border-b">
                <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <UIcon name="i-lucide-user" class="w-6 h-6 text-primary" />
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="font-semibold">Sarah Johnson</span>
                    <div class="flex items-center gap-1">
                      <UIcon v-for="i in 5" :key="i" name="i-lucide-star"
                        class="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>
                  <p class="text-muted text-sm">
                    "An absolutely amazing experience! The tour guides were knowledgeable and friendly, and the
                    itinerary
                    was perfect. Highly recommend!"
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-4 pb-4 border-b">
                <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <UIcon name="i-lucide-user" class="w-6 h-6 text-primary" />
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="font-semibold">Michael Chen</span>
                    <div class="flex items-center gap-1">
                      <UIcon v-for="i in 5" :key="i" name="i-lucide-star"
                        class="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>
                  <p class="text-muted text-sm">
                    "Best travel experience I've ever had. Everything was well-organized, and we got to see places we
                    never would have found on our own."
                  </p>
                </div>
              </div>
            </div>
          </UCard>

          <!-- Related Tours -->
          <div v-if="relatedTours.length > 0">
            <h2 class="text-2xl font-semibold mb-6">{{ $t('components.tour.detail.relatedTours') }}</h2>
            <div class="grid md:grid-cols-3 gap-6">
              <UCard v-for="relatedTour in relatedTours" :key="relatedTour.id"
                class="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <NuxtLink :to="`/tours/${relatedTour.id}`">
                  <div class="relative h-48 overflow-hidden">
                    <img :src="relatedTour.image" :alt="relatedTour.name"
                      class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div class="p-4">
                    <h3 class="font-semibold mb-2 line-clamp-1">{{ relatedTour.name }}</h3>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-muted">{{ relatedTour.duration }}</span>
                      <span class="font-bold text-primary">${{ relatedTour.price }}</span>
                    </div>
                  </div>
                </NuxtLink>
              </UCard>
            </div>
          </div>
        </div>

        <!-- Booking Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-6">
            <UCard>
              <template #header>
                <h3 class="text-xl font-semibold">{{ $t('components.tour.detail.bookTour') }}</h3>
              </template>

              <!-- Price -->
              <div class="mb-6 pb-6 border-b">
                <div v-if="tour.originalPrice" class="flex items-center gap-2 mb-2">
                  <span class="text-3xl font-bold text-primary">${{ tour.price }}</span>
                  <span class="text-lg text-muted line-through">${{ tour.originalPrice }}</span>
                </div>
                <span v-else class="text-3xl font-bold text-primary">${{ tour.price }}</span>
                <span class="text-muted">{{ $t('components.tour.detail.person') }}</span>
              </div>

              <!-- Booking Form -->
              <ClientOnly>
                <form @submit.prevent="handleBooking" class="space-y-4">
                  <UFormField :label="$t('components.tour.detail.numberOfTravelers')">
                    <UInputNumber v-model="bookingForm.travelers" type="number" class="w-full" :min="1" :max="20"
                      :step="1" />
                  </UFormField>

                  <UFormField :label="$t('components.tour.detail.startDate')" required>
                    <UInputDate ref="startInputDateRef" v-model="startModelValue" class="w-full">
                      <template #trailing>
                        <UPopover :reference="startInputDateRef?.inputsRef[3]?.$el">
                          <UButton color="neutral" variant="link" size="sm" icon="i-lucide-calendar"
                            aria-label="Select a date" class="px-0" />
                          <template #content>
                            <UCalendar v-model="startModelValue" class="p-2" />
                          </template>
                        </UPopover>
                      </template>
                    </UInputDate>
                  </UFormField>

                  <UFormField :label="$t('components.tour.detail.specialRequests')">
                    <UTextarea v-model="bookingForm.specialRequests" :placeholder="$t('components.tour.detail.specialRequestsPlaceholder')" :rows="3"
                      class="w-full" />
                  </UFormField>

                  <!-- Total Price -->
                  <div class="pt-4 border-t">
                    <div class="flex items-center justify-between mb-4">
                      <span class="font-semibold">{{ $t('components.tour.detail.totalPrice') }}</span>
                      <span class="text-2xl font-bold text-primary">${{ totalPrice }}</span>
                    </div>
                  </div>

                  <UButton type="submit" size="lg" block :loading="isBooking" icon="i-lucide-calendar-check">
                    {{ $t('components.tour.detail.bookNow') }}
                  </UButton>

                  <UButton variant="outline" size="lg" block icon="i-lucide-heart">
                    {{ $t('components.tour.detail.saveForLater') }}
                  </UButton>
                </form>
                <template #fallback>
                  <div class="space-y-4">
                    <div class="h-20 bg-default/50 rounded animate-pulse" />
                    <div class="h-20 bg-default/50 rounded animate-pulse" />
                    <div class="h-24 bg-default/50 rounded animate-pulse" />
                    <div class="h-12 bg-default/50 rounded animate-pulse" />
                  </div>
                </template>
              </ClientOnly>

              <!-- Contact Info -->
              <div class="mt-6 pt-6 border-t">
                <p class="text-sm text-muted mb-3">{{ $t('components.tour.detail.needHelp') }}</p>
                <div class="space-y-2 text-sm">
                  <a href="tel:+15551234567"
                    class="flex items-center gap-2 text-muted hover:text-primary transition-colors">
                    <UIcon name="i-lucide-phone" class="w-4 h-4" />
                    +1 (555) 123-4567
                  </a>
                  <a href="mailto:info@toursite.com"
                    class="flex items-center gap-2 text-muted hover:text-primary transition-colors">
                    <UIcon name="i-lucide-mail" class="w-4 h-4" />
                    info@toursite.com
                  </a>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </div>
    </UContainer>
  </UPage>
</template>
