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
  <UCard class="">
    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="font-semibold">Filters</h3>
        <UButton class="text-xs cursor-pointer" variant="ghost" size="sm" @click="onReset">
          Clear All
        </UButton>
      </div>
    </template>
    <form class="grid grid-cols-2 gap-y-6 gap-x-4" @submit.prevent="onSubmit">
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
              class="cursor-pointer"
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
              class="cursor-pointer"
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
              class="cursor-pointer"
            /> </template
        ></USelectMenu>
      </UFormField>
      <UFormField class="col-span-2">
        <template #label>Price ($)</template>
        <template #hint> {{ formData.price[0] }} - {{ formData.price[1] }} </template>
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
              class="cursor-pointer"
            />
          </template>
        </USelectMenu>
      </UFormField>

      <UFormField label="Count" class="col-span-1 md:col-span-2 count-field">
        <template #hint>
          <template v-if="formData.count !== undefined">
            <UButton
              color="neutral"
              variant="link"
              size="sm"
              icon="i-lucide-circle-x"
              aria-label="Clear input"
              @click="formData.count = undefined"
              class="cursor-pointer text-sm absolute end-2.5 -top-4"
            />
          </template>
        </template>
        <UInputNumber
          v-model="formData.count"
          placeholder="Count"
          icon="i-lucide-users"
          class="w-full"
          :min="1"
          :default-value="undefined"
        />
      </UFormField>
      <USeparator class="col-span-2" />
      <UButton type="submit" block class="col-span-2"> Apply Filters </UButton>
    </form>
  </UCard>
</template>
<style lang="less">
  .count-field {
    & > div[data-slot='wrapper'] {
      & > div[data-slot='labelWrapper'] {
        span {
          position: relative;
        }
      }
    }
  }
</style>
