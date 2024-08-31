<template>
  <section class="py-12" v-if="tour">
    <figure
      class="container mx-auto px-4 grid grid-cols-[max-content,1fr] gap-4"
    >
      <NuxtImg class="rounded" :src="tour.mainImageAddress" />
      <figcaption>
        <div class="flex gap-1">
          <Icon class="font-bold text-lg leading-7" name="tabler:map" />
          <h3 class="font-bold text-lg leading-7">
            {{ tour.name }}
          </h3>
        </div>
        <UDivider class="my-3" label="توضیحات" />
        <p>{{ tour.description }}</p>
        <p>
          شروع:
          <span dir="ltr">{{
            $dayjs(tour.startDate)
              .calendar("jalali")
              .locale("fa")
              .format("YYYY-MM-DD")
          }}</span>
        </p>
        <p>
          پایان:
          <span dir="ltr">{{
            $dayjs(tour.endDate)
              .calendar("jalali")
              .locale("fa")
              .format("YYYY-MM-DD")
          }}</span>
        </p>
        <p>ظرفیت: {{ tour.capacity }} نفر</p>
        <p>تخفیف: {{ tour.priceDiscount }}٪</p>
        <div>
          <span>امتیاز تور: 4.9 از 5 (2 نظر): </span>
          <span>{{ tour.rate }}</span>
        </div>

        <div>
          <span>حمل و نقل: </span>
          <span>{{ findTransferType(tour.transferTypeEnum) }}</span>
        </div>
        <div>
          <span>وعده های غذایی: </span>
          <span>{{ findMealType(tour.mealTypeEnum) }}</span>
        </div>
        <div>
          <span>سختی تور: </span>
          <span>{{ findTourLevelType(tour.tourLevelTypeEnum) }}</span>
        </div>
        <div>
          <span>اقامتگاه تور: </span>
          <span>{{ findStayType(tour.stayTypeEnum) }}</span>
        </div>
        <div>
          <span>کلاس تور: </span>
          <span>{{ findTourType(tour.tourTypeEnum) }}</span>
        </div>

        <UBadge color="gray">{{ tour.price }}</UBadge>
        <UBadge>{{ tour.priceOff }}</UBadge>
        <div class="flex flex-wrap gap-4 border p-4 items-start">
          <NuxtImg
            class="rounded"
            v-for="item in tour.imagesAddress"
            :src="item"
          />
        </div>
      </figcaption>
    </figure>
  </section>
</template>

<script setup lang="ts">
import { useRouteQuery } from "@vueuse/router";
import type { TourDTO } from "~/types/TourModel";
import { createError } from "h3";
import { findTourLevelType, findStayType, findTourType } from "~/utils";

const id = useRouteQuery("id", "");
const { data: tour, error } = await useFetch<TourDTO.Content>(
  `/api/v1/tour/getOne/${id.value}`
);

if (error.value?.statusCode == 404) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
}
</script>
