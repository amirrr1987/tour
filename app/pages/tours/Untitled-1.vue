<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import { VehicleEnum } from '~/enums'

const route = useRoute()
const router = useRouter()

// read tours from store
const { tours } = storeToRefs(useTourStore())
const { categories: categoryStore } = storeToRefs(useCategoryStore())
const { sorts } = storeToRefs(useSortStore())

// Read initial values from URL query params (one-time read on mount)
const getQueryParam = (key: string, defaultValue: any) => {
  const value = route.query[key]
  if (value === undefined || value === null) return defaultValue
  return value
}

// Initialize form inputs from URL query params or defaults
const search = ref<string>(getQueryParam('search', '') as string)
const categoryVal = getQueryParam('category', 'all')
const category = ref<string | number>(categoryVal === 'all' ? 'all' : Number(categoryVal))
const location = ref<string>(getQueryParam('location', 'all') as string)
const sortBy = ref<string>(getQueryParam('sort', 'popular') as string)
const vehicle = ref<string>(getQueryParam('vehicle', 'all') as string)
const page = ref<number>(Number(getQueryParam('page', 1)) || 1)

// User preferences (no localStorage)
const viewMode = ref<'grid' | 'list'>('grid')
const showFilters = ref(false)
// Initialize tourCount from URL or default
const initialTravelersParam = getQueryParam('travelers', null)
const tourCount = ref(initialTravelersParam ? Number(initialTravelersParam) : 1)

// Initialize price from URL or defaults
const urlPriceMin = getQueryParam('priceMin', null)
const urlPriceMax = getQueryParam('priceMax', null)

const price = ref<[number, number]>([
  urlPriceMin ? Number(urlPriceMin) : 0,
  urlPriceMax ? Number(urlPriceMax) : 2000
])

// Build categories list from store with "All" option
const categories = computed(() => [
  { id: 'all', label: 'All Categories' },
  ...categoryStore.value.map(cat => ({ id: cat.id, label: cat.name }))
])

const startInputDateRef = useTemplateRef('startInputDateRef')
// Initialize start date from URL or default
const initialStartDateStr = getQueryParam('startDate', null) as string | null
const getInitialStartDate = () => {
  if (initialStartDateStr) {
    const parts = initialStartDateStr.split('-').map(Number)
    if (parts.length === 3 && parts[0] && parts[1] && parts[2]) {
      return new CalendarDate(parts[0], parts[1], parts[2])
    }
  }
  return new CalendarDate(2025, 1, 10)
}
const startModelValue = shallowRef(getInitialStartDate())

// Build sort options from store
const sortByOptions = computed(() => sorts.value.map(sort => ({
  id: sort.value,
  label: sort.label
})))

// Build locations list dynamically from tours
const locations = computed(() => {
  const uniqueLocations = [...new Set(tours.value.map(tour => tour.location))]
  return [
    { id: 'all', label: 'All Locations' },
    ...uniqueLocations.sort().map(loc => ({ id: loc, label: loc }))
  ]
})

// Helper function to get category name from ID
const getCategoryName = (categoryId: number) => {
  const cat = categoryStore.value.find(c => c.id === categoryId)
  return cat?.name || 'Unknown'
}

const vehicles = ref([
  { id: 'all', label: 'All Vehicles' },
  { id: 'Car', label: 'Car' },
  { id: 'Bus', label: 'Bus' },
  { id: 'Train', label: 'Train' },
  { id: 'Flight', label: 'Flight' }
])

const perPage = ref(12)

// Applied filters - these are the actual values used for filtering (only updated on submit)
const appliedCategory = ref(category.value)
const appliedLocation = ref(location.value)
const appliedVehicle = ref(vehicle.value)
const appliedPrice = ref<[number, number]>([price.value[0], price.value[1]])
const getInitialAppliedStartDate = (): Date | null => {
  if (initialStartDateStr) {
    const parts = initialStartDateStr.split('-').map(Number)
    if (parts.length === 3 && parts[0] && parts[1] && parts[2]) {
      return new Date(parts[0], parts[1] - 1, parts[2])
    }
  }
  return null
}
const appliedStartDate = ref<Date | null>(getInitialAppliedStartDate())
const appliedTourCount = ref(initialTravelersParam ? Number(initialTravelersParam) : tourCount.value)

// Helper function to compare dates (ignoring time)
const compareDates = (date1: Date, date2: Date): boolean => {
  const d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate())
  const d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate())
  return d1.getTime() === d2.getTime()
}

const total = computed(() => filteredTours.value.length)

const filteredTours = computed(() => {
  let result = [...tours.value]

  // Search filter (reactive - works immediately)
  if (search.value) {
    const query = (search.value as string).toLowerCase()
    result = result.filter(tour =>
      tour.name.toLowerCase().includes(query) ||
      tour.description.toLowerCase().includes(query) ||
      tour.location.toLowerCase().includes(query)
    )
  }

  // Category filter (applied filters)
  if (appliedCategory.value && appliedCategory.value !== 'all') {
    const categoryId = typeof appliedCategory.value === 'string' ? parseInt(appliedCategory.value) : appliedCategory.value
    result = result.filter(tour => tour.category === categoryId)
  }

  // Location filter (applied filters)
  if (appliedLocation.value && appliedLocation.value !== 'all') {
    result = result.filter(tour => tour.location === appliedLocation.value)
  }

  // Vehicle filter (applied filters)
  if (appliedVehicle.value && appliedVehicle.value !== 'all') {
    const vehicleValue = appliedVehicle.value as VehicleEnum
    result = result.filter(tour => tour.vehicle === vehicleValue)
  }

  // Price filter (applied filters)
  result = result.filter(tour =>
    tour.price >= (appliedPrice.value[0] ?? 0) &&
    tour.price <= (appliedPrice.value[1] ?? 2000)
  )

  // Start Date filter (applied filters)
  if (appliedStartDate.value) {
    result = result.filter(tour => {
      const tourStartDate = new Date(tour.startDate)
      return compareDates(tourStartDate, appliedStartDate.value!)
    })
  }

  // Number of Travelers filter (applied filters)
  if (appliedTourCount.value && appliedTourCount.value > 0) {
    result = result.filter(tour => tour.numberOfTravelers >= appliedTourCount.value)
  }

  // Sort
  switch (sortBy.value) {
    case 'price-asc':
      result.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      result.sort((a, b) => b.price - a.price)
      break
    case 'rating-desc':
      result.sort((a, b) => b.rating - a.rating)
      break
    case 'duration-asc':
      result.sort((a, b) => parseInt(a.duration) - parseInt(b.duration))
      break
    case 'duration-desc':
      result.sort((a, b) => parseInt(b.duration) - parseInt(a.duration))
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
  // Apply all filter values when submit is clicked
  appliedCategory.value = formData.value.category
  appliedLocation.value = formData.value.location
  appliedVehicle.value = formData.value.vehicle
  appliedPrice.value = [formData.value.price[0] ?? 0, formData.value.price[1] ?? 2000]
  // Convert CalendarDate to Date for filtering
  appliedStartDate.value = formData.value.startDate ? new Date(formData.value.startDate.year, formData.value.startDate.month - 1, formData.value.startDate.day) : (null as unknown as Date | null)
  appliedTourCount.value = formData.value.count
  page.value = 1

  // Update URL query parameters only when submit is clicked
  const query: Record<string, any> = {}

  if (search.value) query.search = search.value
  if (formData.value.category && formData.value.category !== 'all') query.category = formData.value.category
  if (formData.value.location && formData.value.location !== 'all') query.location = formData.value.location
  if (formData.value.vehicle && formData.value.vehicle !== 'all') query.vehicle = formData.value.vehicle
  if (sortBy.value && sortBy.value !== 'popular') query.sort = sortBy.value
  if (formData.value.price[0] > 0) query.priceMin = formData.value.price[0]
  if (formData.value.price[1] < 2000) query.priceMax = formData.value.price[1]
  if (formData.value.startDate) {
    query.startDate = `${formData.value.startDate.year}-${String(formData.value.startDate.month).padStart(2, '0')}-${String(formData.value.startDate.day).padStart(2, '0')}`
  }
  if (formData.value.count > 1) query.travelers = formData.value.count
  if (page.value > 1) query.page = page.value

  // Update URL without triggering navigation
  router.push({ query })
}

const clearFilters = () => {
  search.value = ''
  category.value = 'all' as any
  location.value = 'all'
  vehicle.value = 'all'
  price.value = [0, 2000]
  tourCount.value = 1
  startModelValue.value = new CalendarDate(2025, 1, 10)

  // Clear applied filters
  appliedCategory.value = 'all' as any
  appliedLocation.value = 'all'
  appliedVehicle.value = 'all'
  appliedPrice.value = [0, 2000]
  appliedStartDate.value = null
  appliedTourCount.value = 1
  page.value = 1

  // Clear URL query parameters
  router.push({ query: {} })
}

const formData = ref({
  search: '',
  category: '',
  location: '',
  price: [],
  count: 0,
  startDate: null,
  vehicle: 'all'
})
const clearFilter = () => {
  formData.value = {
    search: '',
    category: '',
    location: '',
    startDate: null,
    price: [],
    count: 0,
    vehicle: 'all'
  }
}
const search = useRouteQuery('search', '')
const category = useRouteQuery('category', '')
const location = useRouteQuery('location', '')
const priceMin = useRouteQuery('priceMin', 0)
const priceMax = useRouteQuery('priceMax', 2000)
const count = useRouteQuery('count', 0)
const vehicle = useRouteQuery('vehicle', 'all')
const startDate = useRouteQuery('startDate', null)
const onSubmit = () => {
  search.value = formData.value.search
  category.value = formData.value.category
  location.value = formData.value.location
  priceMin.value = formData.value.price[0] ?? 0
  priceMax.value = formData.value.price[1] ?? 2000
  count.value = formData.value.count
  vehicle.value = formData.value.vehicle
  startDate.value = formData.value.startDate
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
            class="w-full" />
        </div>
        <div class="flex gap-2 items-center w-full sm:w-auto">
          <UButton variant="outline" @click="showFilters = !showFilters" class="sm:hidden">
            <UIcon :name="showFilters ? 'i-lucide-x' : 'i-lucide-filter'" class="w-4 h-4 mr-2" />
            Filters
          </UButton>
          <USelectMenu v-model="sortBy" :items="sortByOptions" value-key="id" option-attribute="label"
            placeholder="Sort by" class="w-full sm:w-48" />
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
                <UButton variant="ghost" size="sm" @click="clearFilter" class="text-xs">
                  Clear All
                </UButton>
              </div>
            </template>

            <form @submit.prevent="filterTours" class="space-y-6">
              <!-- Category -->
              <UFormField label="Category">
                <USelectMenu v-model="formData.category" :items="categories" value-key="id"
                  placeholder="Select category" class="w-full" />
              </UFormField>

              <!-- Location -->
              <UFormField label="Location">
                <USelectMenu v-model="formData.location" :items="locations" value-key="id" placeholder="Select location"
                  class="w-full" />
              </UFormField>

              <!-- Price Range -->
              <UFormField :label="`Price: $${price[0] ?? 0} - $${price[1] ?? 2000}`">
                <USlider v-model="formData.price" tooltip :min="0" :max="2000" :step="50" />
              </UFormField>

              <!-- Start Date -->
              <UFormField label="Start Date">
                <UInputDate ref="startInputDateRef" v-model="formData.startDate" class="w-full">
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
                <UInputNumber v-model="formData.count" type="number" class="w-full" :min="1" :max="20" :step="1" />
              </UFormField>

              <!-- Vehicle Type -->
              <UFormField label="Vehicle Type">
                <USelectMenu v-model="formData.vehicle" :items="vehicles" value-key="id" placeholder="Select vehicle"
                  class="w-full" />
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
                    <UButton :to="`/tours/${tour.id}`" size="sm" icon="i-lucide-arrow-right">
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
                        <UBadge variant="subtle">{{ getCategoryName(tour.category) }}</UBadge>
                      </div>
                    </div>
                    <div class="flex gap-2 mt-4 pt-4 border-t">
                      <UButton variant="outline" class="flex-1">
                        <UIcon name="i-lucide-heart" class="w-4 h-4 mr-2" />
                        Save
                      </UButton>
                      <UButton :to="`/tours/${tour.id}`" class="flex-1" icon="i-lucide-arrow-right">
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