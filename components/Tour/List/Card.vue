<script setup lang="ts">
import { findTourType, TourTypeEnum, TourTypeEnumList } from "~/enums";
import type { TourDTO } from "~/types/TourModel";
import _ from "lodash";
interface Props {
  tour: TourDTO.Content;
}
const props = withDefaults(defineProps<Props>(), {});

const cardUi = {
  base: "",
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
    base: "",
    background: "",
    padding: "p-0 sm:p-0",
  },
  footer: {
    base: "",
    background: "",
    padding: "px-4 py-4 sm:px-6",
  },
};
</script>

<template>
  <NuxtLink
    :to="{
      path: `tour/${props.tour.tourUrl}`,
      query: {
        id: props.tour.id,
      },
    }"
  >
    <UCard :ui="cardUi">
      <template #header>
        <div class="relative">
          <UBadge
            :ui="{ base: 'absolute left-4 top-4' }"
            v-if="props.tour.priceDiscount"
            >{{ props.tour.priceDiscount }}%</UBadge
          >
          <NuxtImg
            class="w-full aspect-[3/2] object-cover"
            :src="props.tour.mainImageAddress"
            loading="lazy"
            
          />
        </div>
      </template>
      <div class="flex justify-between">
        <div class="flex gap-x-2">
          <Icon name="heroicons:map-pin" />
          <h4 class="mb-2">{{ props.tour.name }}</h4>
        </div>
        <div>
          {{ props.tour.rate }}
          <Icon name="heroicons:star-16-solid" style="color: gold" />
        </div>
      </div>
      <div>
        <span>ظرفیت : {{ props.tour.capacity }} نفر</span>
      </div>
      <div>
        <Icon :name="`${findTourType(props.tour.tourTypeEnum).icon}`" />
      </div>

      <template #footer>
        <div class="flex items-center justify-between">
          <UButton variant="solid">رزرو تور</UButton>
          <div class="text-left">
            {{ props.tour.price.toLocaleString() }} تومان
          </div>
        </div>
      </template>
    </UCard>
  </NuxtLink>
</template>

<style scoped></style>
