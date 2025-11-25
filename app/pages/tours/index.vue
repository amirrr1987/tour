<script setup lang="ts">
  import { VehicleEnum } from '~/enums'
  import type { ViewMode } from '~/models/app.model'
  import type { IFilter } from '~/models/filter.model'
  import { useCategoryStore } from '~/stores/category.store'
  import { useLocationStore } from '~/stores/location.store'
  import { useTourStore } from '~/stores/tour.store'
  const tourStore = useTourStore()
  const categoryStore = useCategoryStore()
  const locationStore = useLocationStore()
  const formData = ref<IFilter>({
    search: '',
    category: '',
    location: '',
    price: [0, 2000],
    startDate: '',
    endDate: '',
    vehicle: '',
    count: 1
  })
  const clearFilter = () => {
    formData.value.search = ''
    formData.value.category = ''
    formData.value.location = ''
    formData.value.startDate = ''
    formData.value.endDate = ''
    formData.value.price = [0, 2000]
    formData.value.vehicle = ''
    formData.value.count = 1
  }
  const setFilterInParams = () => {
    search.value = formData.value.search
    category.value = formData.value.category
    location.value = formData.value.location
    priceMin.value = formData.value.price[0] ?? 0
    priceMax.value = formData.value.price[1] ?? 2000
    startDate.value = formData.value.startDate
    endDate.value = formData.value.endDate
    vehicle.value = formData.value.vehicle
    count.value = formData.value.count
  }
  const search = useRouteQuery<string>('search', '')
  const category = useRouteQuery<string>('category', '')
  const location = useRouteQuery<string>('location', '')
  const priceMin = useRouteQuery<number>('priceMin', 0)
  const priceMax = useRouteQuery<number>('priceMax', 2000)
  const vehicle = useRouteQuery<VehicleEnum | string>('vehicle', '')
  const startDate = useRouteQuery<string>('startDate', '')
  const endDate = useRouteQuery<string>('endDate', '')
  const count = useRouteQuery<number>('count', 1)
  const onSubmit = () => {
    setFilterInParams()
  }
  const onReset = () => {
    clearFilter()
    setFilterInParams()
  }

  const viewMode = ref<ViewMode>('grid')

  const filterTours = computed(() => {
    return tourStore.tours
  })
</script>
<template>
  <UPage class="py-6 md:py-8">
    <UContainer>
      <div class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold mb-2">Explore Our Tours</h1>
        <p class="text-muted">Discover amazing destinations and create unforgettable memories</p>
      </div>
      <div class="grid md:grid-cols-12 gap-6">
        <div class="md:col-span-5 lg:col-span-4 xl:col-span-3">
          <TourFilter
            v-model:form-data="formData"
            :categories="categoryStore.categories"
            :locations="locationStore.locations"
            @submit="onSubmit"
            @reset="onReset"
          />
        </div>
        <div class="md:col-span-7 lg:col-span-8 xl:col-span-9">
          <div class="mb-4 flex items-center justify-between">
            <TourTotalCount :total="filterTours.length" :count="filterTours.length" />
            <div class="flex gap-2 items-center w-full sm:w-auto">
              <ClientOnly>
                <ToggleView v-model:view-mode="viewMode" />
              </ClientOnly>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-4">
            <TourCard
              v-for="tour in filterTours"
              :key="tour.id"
              :tour="tour"
              class=""
              :class="
                viewMode === 'grid' ? 'col-span-full lg:col-span-6 xl:col-span-4' : 'col-span-full'
              "
            />
          </div>
        </div>
      </div>
    </UContainer>
  </UPage>
</template>
