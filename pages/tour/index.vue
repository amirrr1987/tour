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
        <UCard as="figure" v-for="(item, index) in tours" :key="index" class="w-[24.02%]" :ui="cardUi">
          <template #header>
            <img :src="item.mainImageAddress" :title="item.name" :alt="item.name" >
          </template>
          {{ item.name }}</UCard
        >
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
  base: '',
  background: 'bg-white dark:bg-gray-900',
  divide: 'divide-y divide-gray-200 dark:divide-gray-800',
  ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
  rounded: 'rounded-lg',
  shadow: 'shadow',
  body: {
    base: '',
    background: '',
    padding: 'px-4 py-5 sm:p-6',
  },
  header: {
    base: '',
    background: '',
    padding: 'px-0 py-0 sm:px-0',
  },
  footer: {
    base: '',
    background: '',
    padding: 'px-4 py-4 sm:px-6',
  },
}

</script>
