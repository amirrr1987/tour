<script setup lang="ts">
import type { ICategory } from "~/models/category.model";
import type { IFilter } from "~/models/filter.model";
import type { ILocation } from "~/models/location.model";

const props = defineProps<{
  formData: IFilter;
  categories: ICategory[];
  locations: ILocation[];
}>();

const emit = defineEmits<{
  (e: "submit", formData: IFilter): void;
  (e: "reset"): void;
}>();

const localFormData = ref<IFilter>(props.formData);

const onSubmit = () => {
  emit("submit", localFormData.value);
};
const onReset = () => {
  emit("reset");
};
</script>
<template>
  <UCard>
    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="font-semibold">Filters</h3>
        <UButton class="text-xs" variant="ghost" size="sm" @click="onReset">
          Clear All
        </UButton>
      </div>
    </template>
    <form class="space-y-8" @submit.prevent="onSubmit">
      <UFormField label="Search">
        <UInput v-model="localFormData.search" type="text" placeholder="Search tours" icon="i-lucide-search"
          class="w-full" />
      </UFormField>
      <UFormField label="Category">
        <USelectMenu v-model="localFormData.category" :items="props.categories" value-key="id"
          placeholder="Select category" icon="i-lucide-tag" class="w-full" />
      </UFormField>
      <UFormField label="Location">
        <USelectMenu v-model="localFormData.location" :items="props.locations" value-key="id"
          placeholder="Select location" class="w-full" icon="i-lucide-map" />
      </UFormField>
      <UFormField label="Price">
        <USlider v-model="localFormData.price" tooltip :min="0" :max="2000" :step="50" icon="i-lucide-dollar-sign" />
      </UFormField>
      <UFormField label="Count">
        <UInput v-model="localFormData.count" type="number" placeholder="Count" icon="i-lucide-users" class="w-full" />
      </UFormField>
      <UFormField label="Start Date">
        <UInput v-model="localFormData.startDate" type="date" placeholder="Start date" icon="i-lucide-calendar"
          class="w-full" />
      </UFormField>
      <UButton type="submit" block> Apply Filters </UButton>
    </form>
  </UCard>
</template>
