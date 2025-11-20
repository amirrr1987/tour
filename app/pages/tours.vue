<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'

const tours = ref([
  {
    id: 1,
    name: 'Mountain Adventure',
    description: 'Explore breathtaking mountain landscapes and experience the thrill of adventure.',
    price: 299,
    originalPrice: 399,
    duration: '5 Days',
    rating: 4.8,
    reviews: 124,
    location: 'Switzerland',
    category: 'Adventure',
    image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
    featured: true
  },
  {
    id: 2,
    name: 'Cultural Heritage Tour',
    description: 'Discover ancient cultures and historical landmarks with expert guides.',
    price: 399,
    duration: '7 Days',
    rating: 4.9,
    reviews: 89,
    location: 'Egypt',
    category: 'Cultural',
    image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
  },
  {
    id: 3,
    name: 'Beach Paradise',
    description: 'Relax on pristine beaches and enjoy crystal-clear waters.',
    price: 249,
    duration: '4 Days',
    rating: 4.7,
    reviews: 156,
    location: 'Maldives',
    category: 'Relaxation',
    image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
  },
  {
    id: 4,
    name: 'City Explorer',
    description: 'Experience vibrant city life, local cuisine, and nightlife.',
    price: 199,
    duration: '3 Days',
    rating: 4.6,
    reviews: 203,
    location: 'Tokyo',
    category: 'Urban',
    image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
  },
  {
    id: 5,
    name: 'Wildlife Safari',
    description: 'Witness amazing wildlife in their natural habitat with expert guides.',
    price: 549,
    duration: '8 Days',
    rating: 5.0,
    reviews: 67,
    location: 'Kenya',
    category: 'Adventure',
    image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
    featured: true
  },
  {
    id: 6,
    name: 'Desert Expedition',
    description: 'Journey through stunning desert landscapes and experience Bedouin culture.',
    price: 349,
    duration: '6 Days',
    rating: 4.5,
    reviews: 92,
    location: 'Morocco',
    category: 'Adventure',
    image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
  },
  {
    id: 7,
    name: 'Tropical Island Hopping',
    description: 'Visit multiple tropical islands and enjoy diverse marine activities.',
    price: 449,
    duration: '7 Days',
    rating: 4.8,
    reviews: 134,
    location: 'Philippines',
    category: 'Relaxation',
    image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
  },
  {
    id: 8,
    name: 'European Grand Tour',
    description: 'Explore multiple European cities and their rich history.',
    price: 1299,
    duration: '14 Days',
    rating: 4.9,
    reviews: 78,
    location: 'Europe',
    category: 'Cultural',
    image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
  }
])

const search = ref('')
const showFilters = ref(false)

const categories = ref([
  { id: 'all', name: 'All Categories' },
  { id: 'Adventure', name: 'Adventure' },
  { id: 'Cultural', name: 'Cultural' },
  { id: 'Relaxation', name: 'Relaxation' },
  { id: 'Urban', name: 'Urban' }
])

const category = ref('all')

const startInputDateRef = useTemplateRef('startInputDateRef')
const startModelValue = shallowRef(new CalendarDate(2025, 1, 10))

const tourCount = ref(1)

const price = ref([0, 2000])

const sortBy = ref('popular')
const sortByOptions = ref([
  { id: 'popular', name: 'Most Popular' },
  { id: 'price-low', name: 'Price: Low to High' },
  { id: 'price-high', name: 'Price: High to Low' },
  { id: 'rating', name: 'Highest Rated' },
  { id: 'duration', name: 'Duration' }
])

const locations = ref([
  { id: 'all', name: 'All Locations' },
  { id: 'Switzerland', name: 'Switzerland' },
  { id: 'Egypt', name: 'Egypt' },
  { id: 'Maldives', name: 'Maldives' },
  { id: 'Tokyo', name: 'Tokyo' },
  { id: 'Kenya', name: 'Kenya' },
  { id: 'Morocco', name: 'Morocco' },
  { id: 'Philippines', name: 'Philippines' },
  { id: 'Europe', name: 'Europe' }
])

const location = ref('all')

const vehicles = ref([
  { id: 'all', name: 'All Vehicles' },
  { id: 'Car', name: 'Car' },
  { id: 'Bus', name: 'Bus' },
  { id: 'Train', name: 'Train' },
  { id: 'Flight', name: 'Flight' }
])

const vehicle = ref('all')

const viewMode = ref<'grid' | 'list'>('grid')
const page = ref(1)
const perPage = ref(12)
const total = computed(() => filteredTours.value.length)

const filteredTours = computed(() => {
  let result = [...tours.value]

  // Search filter
  if (search.value) {
    const query = search.value.toLowerCase()
    result = result.filter(tour =>
      tour.name.toLowerCase().includes(query) ||
      tour.description.toLowerCase().includes(query) ||
      tour.location.toLowerCase().includes(query)
    )
  }

  // Category filter
  if (category.value && category.value !== 'all') {
    result = result.filter(tour => tour.category === category.value)
  }

  // Location filter
  if (location.value && location.value !== 'all') {
    result = result.filter(tour => tour.location === location.value)
  }

  // Price filter
  result = result.filter(tour => tour.price >= (price.value[0] ?? 0) && tour.price <= (price.value[1] ?? 2000))

  // Sort
  switch (sortBy.value) {
    case 'price-low':
      result.sort((a, b) => a.price - b.price)
      break
    case 'price-high':
      result.sort((a, b) => b.price - a.price)
      break
    case 'rating':
      result.sort((a, b) => b.rating - a.rating)
      break
    case 'duration':
      result.sort((a, b) => parseInt(a.duration) - parseInt(b.duration))
      break
    default:
      // Popular (by reviews)
      result.sort((a, b) => b.reviews - a.reviews)
  }

  return result
})

const paginatedTours = computed(() => {
  const start = (page.value - 1) * perPage.value
  const end = start + perPage.value
  return filteredTours.value.slice(start, end)
})

const filterTours = () => {
  page.value = 1
}

const clearFilters = () => {
  search.value = ''
  category.value = 'all'
  location.value = 'all'
  vehicle.value = 'all'
  price.value = [0, 2000]
  tourCount.value = 1
  page.value = 1
}
</script>
<template>
  <UPage class="py-6 md:py-8">
    <UContainer>
      <!-- Page Header -->
      <div class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold mb-2">Explore Our Tours</h1>
        <p class="text-muted">Discover amazing destinations and create unforgettable memories</p>
      </div>

      <!-- Search and Sort Bar -->
      <div class="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div class="flex-1 w-full sm:max-w-md">
          <UInput v-model="search" type="text" placeholder="Search tours, destinations..." icon="i-lucide-search"
            class="w-full" @input="filterTours" />
        </div>
        <div class="flex gap-2 items-center w-full sm:w-auto">
          <UButton variant="outline" @click="showFilters = !showFilters" class="sm:hidden">
            <UIcon :name="showFilters ? 'i-lucide-x' : 'i-lucide-filter'" class="w-4 h-4 mr-2" />
            Filters
          </UButton>
          <USelect v-model="sortBy" :options="sortByOptions" option-attribute="name" value-attribute="id"
            class="w-full sm:w-48" />
          <div class="flex border rounded-lg overflow-hidden">
            <UButton :variant="viewMode === 'grid' ? 'solid' : 'ghost'" color="neutral" size="sm" square
              @click="viewMode = 'grid'">
              <UIcon name="i-lucide-grid" class="w-4 h-4" />
            </UButton>
            <UButton :variant="viewMode === 'list' ? 'solid' : 'ghost'" color="neutral" size="sm" square
              @click="viewMode = 'list'">
              <UIcon name="i-lucide-list" class="w-4 h-4" />
            </UButton>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-12 gap-6">
        <!-- Filters Sidebar -->
        <div :class="['md:col-span-3', { 'hidden md:block': !showFilters }]">
          <UCard>
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="font-semibold">Filters</h3>
                <UButton variant="ghost" size="sm" @click="clearFilters" class="text-xs">
                  Clear All
                </UButton>
              </div>
            </template>

            <form @submit.prevent="filterTours" class="space-y-6">
              <!-- Category -->
              <UFormField label="Category">
                <USelect v-model="category" :options="categories" option-attribute="name" value-attribute="id"
                  class="w-full" @update:model-value="filterTours" />
              </UFormField>

              <!-- Location -->
              <UFormField label="Location">
                <USelect v-model="location" :options="locations" option-attribute="name" value-attribute="id"
                  class="w-full" @update:model-value="filterTours" />
              </UFormField>

              <!-- Price Range -->
              <UFormField :label="`Price: $${price[0] ?? 0} - $${price[1] ?? 2000}`">
                <USlider v-model="price" tooltip :min="0" :max="2000" :step="50" @update:model-value="filterTours" />
              </UFormField>

              <!-- Start Date -->
              <UFormField label="Start Date">
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

              <!-- Number of Travelers -->
              <UFormField label="Number of Travelers">
                <UInputNumber v-model="tourCount" type="number" class="w-full" :min="1" :max="20" :step="1" />
              </UFormField>

              <!-- Vehicle Type -->
              <UFormField label="Vehicle Type">
                <USelect v-model="vehicle" :options="vehicles" option-attribute="name" value-attribute="id"
                  class="w-full" @update:model-value="filterTours" />
              </UFormField>

              <UButton type="submit" block>
                Apply Filters
              </UButton>
            </form>
          </UCard>
        </div>

        <!-- Tours Grid/List -->
        <div class="md:col-span-9">
          <!-- Results Count -->
          <div class="mb-4 flex items-center justify-between">
            <p class="text-sm text-muted">
              Showing {{ paginatedTours.length }} of {{ total }} tours
            </p>
          </div>

          <!-- Tours Display -->
          <div v-if="paginatedTours.length > 0">
            <!-- Grid View -->
            <div v-if="viewMode === 'grid'" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <UCard v-for="tour in paginatedTours" :key="tour.id"
                class="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <div class="relative h-48 overflow-hidden">
                  <img :src="tour.image" :alt="tour.name"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div class="absolute top-3 left-3 flex gap-2">
                    <UBadge v-if="tour.featured" color="primary">Featured</UBadge>
                    <UBadge v-if="tour.originalPrice" color="success">Sale</UBadge>
                  </div>
                  <div class="absolute top-3 right-3">
                    <UBadge color="neutral" variant="solid" class="bg-black/50">
                      <UIcon name="i-lucide-map-pin" class="w-3 h-3 mr-1" />
                      {{ tour.location }}
                    </UBadge>
                  </div>
                </div>
                <div class="p-4">
                  <div class="flex items-start justify-between mb-2">
                    <h3 class="text-lg font-semibold line-clamp-1">{{ tour.name }}</h3>
                  </div>
                  <p class="text-sm text-muted mb-3 line-clamp-2">{{ tour.description }}</p>
                  <div class="flex items-center gap-4 mb-3 text-sm text-muted">
                    <div class="flex items-center gap-1">
                      <UIcon name="i-lucide-clock" class="w-4 h-4" />
                      {{ tour.duration }}
                    </div>
                    <div class="flex items-center gap-1">
                      <UIcon name="i-lucide-star" class="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      {{ tour.rating }} ({{ tour.reviews }})
                    </div>
                  </div>
                  <div class="flex items-center justify-between pt-3 border-t">
                    <div>
                      <div v-if="tour.originalPrice" class="flex items-center gap-2">
                        <span class="text-lg font-bold text-primary">${{ tour.price }}</span>
                        <span class="text-sm text-muted line-through">${{ tour.originalPrice }}</span>
                      </div>
                      <span v-else class="text-lg font-bold text-primary">${{ tour.price }}</span>
                      <span class="text-xs text-muted">/person</span>
                    </div>
                    <UButton size="sm" icon="i-lucide-arrow-right">
                      View
                    </UButton>
                  </div>
                </div>
              </UCard>
            </div>

            <!-- List View -->
            <div v-else class="space-y-4 mb-8">
              <UCard v-for="tour in paginatedTours" :key="tour.id"
                class="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div class="flex flex-col sm:flex-row gap-4">
                  <div class="relative w-full sm:w-64 h-48 sm:h-auto overflow-hidden shrink-0">
                    <img :src="tour.image" :alt="tour.name" class="w-full h-full object-cover" />
                    <div class="absolute top-3 left-3 flex gap-2">
                      <UBadge v-if="tour.featured" color="primary">Featured</UBadge>
                      <UBadge v-if="tour.originalPrice" color="success">Sale</UBadge>
                    </div>
                  </div>
                  <div class="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <div class="flex items-start justify-between mb-2">
                        <div>
                          <h3 class="text-xl font-semibold mb-1">{{ tour.name }}</h3>
                          <div class="flex items-center gap-2 text-sm text-muted mb-2">
                            <UIcon name="i-lucide-map-pin" class="w-4 h-4" />
                            {{ tour.location }}
                          </div>
                        </div>
                        <div class="text-right">
                          <div v-if="tour.originalPrice" class="flex items-center gap-2 justify-end">
                            <span class="text-2xl font-bold text-primary">${{ tour.price }}</span>
                            <span class="text-sm text-muted line-through">${{ tour.originalPrice }}</span>
                          </div>
                          <span v-else class="text-2xl font-bold text-primary">${{ tour.price }}</span>
                          <span class="text-xs text-muted block">/person</span>
                        </div>
                      </div>
                      <p class="text-muted mb-3">{{ tour.description }}</p>
                      <div class="flex items-center gap-4 text-sm text-muted">
                        <div class="flex items-center gap-1">
                          <UIcon name="i-lucide-clock" class="w-4 h-4" />
                          {{ tour.duration }}
                        </div>
                        <div class="flex items-center gap-1">
                          <UIcon name="i-lucide-star" class="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          {{ tour.rating }} ({{ tour.reviews }} reviews)
                        </div>
                        <UBadge variant="subtle">{{ tour.category }}</UBadge>
                      </div>
                    </div>
                    <div class="flex gap-2 mt-4 pt-4 border-t">
                      <UButton variant="outline" class="flex-1">
                        <UIcon name="i-lucide-heart" class="w-4 h-4 mr-2" />
                        Save
                      </UButton>
                      <UButton class="flex-1" icon="i-lucide-arrow-right">
                        View Details
                      </UButton>
                    </div>
                  </div>
                </div>
              </UCard>
            </div>

            <!-- Pagination -->
            <div class="flex justify-center">
              <UPagination v-model:page="page" :total="total" :per-page="perPage" />
            </div>
          </div>

          <!-- No Results -->
          <UCard v-else class="text-center py-12">
            <UIcon name="i-lucide-search-x" class="w-16 h-16 text-muted mx-auto mb-4" />
            <h3 class="text-xl font-semibold mb-2">No tours found</h3>
            <p class="text-muted mb-4">Try adjusting your filters or search terms</p>
            <UButton variant="outline" @click="clearFilters">
              Clear Filters
            </UButton>
          </UCard>
        </div>
      </div>
    </UContainer>
  </UPage>
</template>