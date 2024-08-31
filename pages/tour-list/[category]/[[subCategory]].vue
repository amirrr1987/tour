<template>
  <section class="">
    <div class="flex justify-between">
      <div class="">sdfsdf</div>
      <URadioGroup :options="options" :ui="radioGroupUi"></URadioGroup>
    </div>
    <div class="grid grid-cols-12 gap-4">
      <TourCard
        class="col-span-3"
        :tour="tour"
        v-for="tour in tours"
        :key="tour.id"
      />
    </div>
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
  middleware: ["auth"],
});

const options = [
  { value: "email", label: "Email", icon: "i-heroicons-at-symbol" },
  { value: "sms", label: "Phone (SMS)", icon: "i-heroicons-phone" },
  { value: "push", label: "Push notification", icon: "i-heroicons-bell" },
];
const radioGroupUi = {
  wrapper: "relative flex items-start",
  container: "flex items-center h-5",
  base: "h-4 w-4 dark:checked:bg-current dark:checked:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",
  form: "form-radio",
  color: "text-{color}-500 dark:text-{color}-400",
  background: "bg-white dark:bg-gray-900",
  border: "border border-gray-300 dark:border-gray-700",
  ring: "focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",
  inner: "ms-3 flex flex-col",
  label: "text-sm font-medium text-gray-700 dark:text-gray-200",
  required: "text-sm text-red-500 dark:text-red-400",
  help: "text-sm text-gray-500 dark:text-gray-400",
  default: {
    color: "primary",
  },
};
const selected = ref("sms");

const city = useRouteQuery("city", "", { transform: String });
// const configStore = useConfigStore();

const { data: tours } = await useFetch<TourDTO.Content[]>(
  "/api/v1/tour/getAll"
);
</script>
