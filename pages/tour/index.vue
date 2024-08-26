<template>
  <section class="py-12">
    <AContainer class="grid grid-cols-12 gap-4">
      <UCard class="col-span-2">
        <UForm>
          <UFormGroup>
            <USelectMenu v-model="city" :options="cities" />
          </UFormGroup>
        </UForm>
      </UCard>
      <div class="col-span-10 flex flex-wrap gap-4">
        <TourCard :tour="tour" v-for="tour in tours" :key="tour.id" />
      </div>
    </AContainer>
  </section>
</template>
<script setup lang="ts">
import { useRouteQuery } from "@vueuse/router";
const cities = [
  "خوی",
  "Arlene Mccoy",
  "Devon Webb",
  "Tom Cook",
  "Tanya Fox",
  "Hellen Schmidt",
  "Caroline Schultz",
  "Mason Heaney",
  "Claudie Smitham",
  "Emil Schaefer",
];

definePageMeta({
  layout: "filter",
});

const city = useRouteQuery("city", "", { transform: String });
const { data: tours } = await useFetch("/api/v1/tour/getAll");

console.log(city.value);

const cardUi = {
  base: "overflow-hidden",
  background: "bg-white dark:bg-gray-900",
  divide: "divide-y divide-gray-200 dark:divide-gray-800",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  rounded: "rounded-lg",
  shadow: "shadow",
  body: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:p-6",
  },
  header: {
    base: "relative",
    background: "",
    padding: "px-0 py-0 sm:px-0",
  },
  footer: {
    base: "",
    background: "",
    padding: "px-4 py-4 sm:px-6",
  },
};
const badgeUi = {
  base: "absolute end-4 top-4",
  rounded: "rounded-md",
  font: "font-medium",
};
</script>
