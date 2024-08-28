<script setup lang="ts">
import type { TourDTO } from "~/types/TourModel";
import { getTourType } from "~/utils";
const cardUi = {
  base: "overflow-hidden text-sm bg-red-500",
  header: {
    base: "relative",
    padding: "px-0 py-0 sm:px-0",
  },
  body: {
    base: "",
    background: "",
    padding: "px-2 py-2 sm:p-4",
  },
};
const badgeUi = {
  base: "absolute end-4 top-4",
  rounded: "rounded-md",
  font: "font-medium",
};

interface Props {
  tour: TourDTO.GetOne.Response;
}
const props = withDefaults(defineProps<Props>(), {
  tour: () => {
    return {} as TourDTO.GetOne.Response;
  },
});
</script>

<template>
  <NuxtLink :to="`/tour/${props.tour.tourUrl}`" class="">
    <UCard as="figure" :ui="cardUi">
      <template #header>
        <UBadge :ui="badgeUi" color="rose" variant="solid">
          {{ props.tour.priceDiscount }}%
        </UBadge>
        <NuxtImg
          format="webp"
          class="aspect-[3/2] object-cover w-full"
          :src="props.tour.mainImageAddress"
          :placeholder="[50, 25]"
          :title="props.tour.name"
          :alt="props.tour.name"
        />

        <div
          class="grid grid-cols-[1fr,max-content,1fr,max-content,1fr] text-center h-10"
        >
          <div class="flex items-center justify-center">
            <Icon name="tabler:user" />
            {{ props.tour.capacity }}
          </div>
          <UDivider orientation="vertical" />
          <div class="flex items-center justify-center">
            {{ props.tour.tourLevelTypeEnum }}
          </div>
          <UDivider orientation="vertical" />
          <div class="flex items-center justify-center gap-x-1">
            <Icon class="bg-yellow-500" name="tabler:star-filled" />
            {{ props.tour.rate }}
          </div>
        </div>
      </template>
      <div>{{ props.tour.name }}</div>
      <div></div>
      <div class="flex justify-between">
        <div class="">
          <span class="font-medium"
            >{{ Number(props.tour.price).toLocaleString() }}
          </span>
          <span> تومان</span>
        </div>
      </div>
      <div class="flex justify-between">
        <div>
          {{
            $dayjs(props.tour.startDate)
              .calendar("jalali")
              .locale("fa")
              .format("DD MMMM")
          }}
        </div>
        <!-- <div>{{ getTourType(props.tour.tourTypeEnum) }}</div> -->
        <div>{{ props.tour.tourTypeEnum }}</div>
      </div>
      <template #footer>
        <!--      {{ props.tour }}-->
      </template>
    </UCard>
  </NuxtLink>
</template>

<style scoped></style>
