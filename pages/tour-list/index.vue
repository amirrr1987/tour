<template>
  <section class="py-12">
    <AContainer class="grid grid-cols-12 gap-4">
      <UCard class="col-span-2">
        <UForm :state="{}">
          <UFormGroup>
            <USelectMenu v-model="city" :options="cities" />
          </UFormGroup>
        </UForm>
      </UCard>
      <div class="col-span-10 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <TourCard :tour="tour" v-for="tour in tours" :key="tour.id" />
      </div>
    </AContainer>
  </section>
</template>
<script setup lang="ts">
import { useRouteQuery } from "@vueuse/router";
import { useConfigStore } from "~/stores/configStore";
import type { TourDTO } from "~/types/TourModel";
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
  middleware: "auth",
});

const city = useRouteQuery("city", "", { transform: String });
const configStore = useConfigStore();
console.log("configStore");
console.log(configStore);
console.log("configStore");

const { data: tours } = await useFetch<TourDTO.Content[]>(
  "/api/v1/tour/getAll"
);
</script>
