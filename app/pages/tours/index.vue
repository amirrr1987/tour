<script setup lang="ts">
import { useCategoryStore } from '~/stores/category.store'
import { useLocationStore } from '~/stores/location.store'

const categoryStore = useCategoryStore()
const locationStore = useLocationStore()
const formData = ref({
  search: '',
  category: '',
  location: '',
  price: [0, 2000],
  count: 0,
  startDate: '',
  vehicle: 'all'
})
const clearFilter = () => {
  formData.value = {
    search: '',
    category: '',
    location: '',
    startDate: '',
    price: [0, 2000],
    count: 0,
    vehicle: 'all'
  }
}
const setFilterInParams = () => {
  search.value = formData.value.search
  category.value = formData.value.category
  location.value = formData.value.location
  priceMin.value = formData.value.price[0] ?? 0
  priceMax.value = formData.value.price[1] ?? 2000
  count.value = formData.value.count
  vehicle.value = formData.value.vehicle
  startDate.value = formData.value.startDate
}
const search = useRouteQuery<string>('search', '')
const category = useRouteQuery<string>('category', '')
const location = useRouteQuery<string>('location', '')
const priceMin = useRouteQuery<number>('priceMin', 0)
const priceMax = useRouteQuery<number>('priceMax', 2000)
const count = useRouteQuery<number>('count', 0)
const vehicle = useRouteQuery<string>('vehicle', 'all')
const startDate = useRouteQuery<string>('startDate', '')
const onSubmit = () => {
  setFilterInParams()
}
const onReset = () => {
  clearFilter()
  setFilterInParams()

}
</script>
<template>
  <UPage class="py-6 md:py-8">
    <UContainer>
      <form @submit.prevent="onSubmit" class="space-y-8">
        <UFormField label="Search">
          <UInput v-model="formData.search" type="text" placeholder="Search tours" icon="i-lucide-search"
            class="w-full" />
        </UFormField>
        <UFormField label="Category">
          <USelectMenu v-model="formData.category" :items="categoryStore.categories" value-key="id"
            placeholder="Select category" icon="i-lucide-tag" class="w-full" />
        </UFormField>
        <UFormField label="Location">
          <USelectMenu v-model="formData.location" :items="locationStore.locations" value-key="id"
            placeholder="Select location" class="w-full" icon="i-lucide-map" />
        </UFormField>
        <UFormField label="Price">
          <USlider v-model="formData.price" tooltip :min="0" :max="2000" :step="50" icon="i-lucide-dollar-sign" />
        </UFormField>
        <UFormField label="Count">
          <UInput v-model="formData.count" type="number" placeholder="Count" icon="i-lucide-users" class="w-full" />
        </UFormField>
        <UFormField label="Start Date">
          <UInput v-model="formData.startDate" type="date" placeholder="Start date" icon="i-lucide-calendar"
            class="w-full" />
        </UFormField>
        <UFormField>
          <UButton type="submit">Filter</UButton>
          <UButton type="reset" variant="outline" @click="onReset">Clear</UButton>
        </UFormField>
      </form>
    </UContainer>
  </UPage>


  
</template>