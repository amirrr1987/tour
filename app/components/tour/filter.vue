<script setup lang="ts">
  import { VehicleEnum } from '~/enums'
  import type { ICategory } from '~/models/category.model'
  import type { IFilter } from '~/models/filter.model'
  import type { ILocation } from '~/models/location.model'
  const props = defineProps<{
    categories: ICategory[]
    locations: ILocation[]
  }>()
  const formData = defineModel<IFilter>('formData', { required: true })
  const emit = defineEmits<{
    (e: 'submit', formData: IFilter): void
    (e: 'reset'): void
  }>()

  const onSubmit = () => {
    emit('submit', formData.value)
  }
  const onReset = () => {
    emit('reset')
  }
</script>
<template>
  <UCard>
    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="font-semibold">Filters</h3>
        <UButton class="text-xs" variant="ghost" size="sm" @click="onReset"> Clear All </UButton>
      </div>
    </template>
    <form class="grid grid-cols-2 gap-4" @submit.prevent="onSubmit">
      <UFormField label="Search" class="col-span-2">
        <UInput
          v-model="formData.search"
          type="text"
          placeholder="Search tours"
          icon="i-lucide-search"
          class="w-full"
          clearable
        >
          <template v-if="formData.search?.length" #trailing>
            <UButton
              color="neutral"
              variant="link"
              size="sm"
              icon="i-lucide-circle-x"
              aria-label="Clear input"
              @click="formData.search = ''"
            />
          </template>
        </UInput>
      </UFormField>
      <UFormField label="Category" class="col-span-1 md:col-span-2">
        <USelectMenu
          v-model="formData.category"
          :items="props.categories"
          value-key="id"
          label-key="name"
          searchable
          placeholder="Select category"
          icon="i-lucide-tag"
          class="w-full"
        >
          <template v-if="formData.category?.length" #trailing>
            <UButton
              color="neutral"
              variant="link"
              size="sm"
              icon="i-lucide-circle-x"
              aria-label="Clear input"
              @click="formData.category = ''"
            /> </template
        ></USelectMenu>
      </UFormField>
      <UFormField label="Location" class="col-span-1 md:col-span-2">
        <USelectMenu
          v-model="formData.location"
          :items="props.locations"
          value-key="id"
          label-key="name"
          searchable
          placeholder="Select location"
          class="w-full"
          icon="i-lucide-map"
        >
          <template v-if="formData.location?.length" #trailing>
            <UButton
              color="neutral"
              variant="link"
              size="sm"
              icon="i-lucide-circle-x"
              aria-label="Clear input"
              @click="formData.location = ''"
            /> </template
        ></USelectMenu>
      </UFormField>
      <UFormField label="Price" class="col-span-2">
        <USlider
          v-model="formData.price"
          tooltip
          :min="0"
          :max="2000"
          :step="50"
          icon="i-lucide-dollar-sign"
        />
      </UFormField>

      <UFormField label="Start Date" class="col-span-1 md:col-span-2">
        <UInput
          v-model="formData.startDate"
          type="date"
          placeholder="Start date"
          icon="i-lucide-calendar"
          class="w-full"
          :max="formData.endDate"
        />
      </UFormField>
      <UFormField label="End Date" class="col-span-1 md:col-span-2">
        <UInput
          v-model="formData.endDate"
          type="date"
          placeholder="End date"
          icon="i-lucide-calendar"
          class="w-full"
          :min="formData.startDate"
        />
      </UFormField>
      <UFormField label="Vehicle" class="col-span-1 md:col-span-2">
        <USelectMenu
          v-model="formData.vehicle as VehicleEnum"
          :items="[
            { value: VehicleEnum.Car, label: 'Car' },
            { value: VehicleEnum.Bus, label: 'Bus' },
            { value: VehicleEnum.Train, label: 'Train' },
            { value: VehicleEnum.Flight, label: 'Flight' }
          ]"
          value-key="value"
          label-key="label"
          placeholder="Select vehicle"
          class="w-full"
          icon="i-lucide-car"
          searchable
        >
          <template v-if="formData.vehicle?.length" #trailing>
            <UButton
              color="neutral"
              variant="link"
              size="sm"
              icon="i-lucide-circle-x"
              aria-label="Clear input"
              @click="formData.vehicle = ''"
            />
          </template>
        </USelectMenu>
      </UFormField>

      <UFormField label="count" class="col-span-1 md:col-span-2">
        <UInputNumber
          v-model="formData.count"
          placeholder="Count"
          icon="i-lucide-users"
          class="w-full"
        />
      </UFormField>
      <USeparator class="col-span-2" />
      <UButton type="submit" block class="col-span-2"> Apply Filters </UButton>
    </form>
  </UCard>
</template>
