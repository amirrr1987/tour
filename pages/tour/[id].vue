<template>
  <section class="py-12 single-tour">
    <TheContainer v-if="tour?.id" class="grid grid-cols-12 gap-4">
      <div class="col-span-8">
        <h4 class="text-2xl">{{ tour.name }}</h4>
        <p>{{ tour.description }}</p>
        <p>{{ tour.startDate }}</p>
        <p>{{ tour.endDate }}</p>
        <p>{{ tour.price }}</p>
        <p>{{ tour.priceDiscount }}</p>
        <p>{{ tour.priceOff }}</p>
      </div>
      <div class="col-span-4">
        <UCard>
          <swiper
            class="h-80 w-full mx-auto"
            :style="{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }"
            :loop="true"
            :spaceBetween="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="[FreeMode, Navigation, Thumbs]"
          >
            <SwiperSlide v-for="item in tour.imagesAddress">
              <NuxtImg
                class="rounded-t-3xl w-full h-full object-cover"
                :src="item"
              />
            </SwiperSlide>
          </swiper>
          <swiper
            @swiper="setThumbsSwiper"
            :loop="true"
            :spaceBetween="10"
            :slidesPerView="4"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="[FreeMode, Navigation, Thumbs]"
            class="mySwiper !pt-2"
          >
            <SwiperSlide v-for="item in tour.imagesAddress">
              <NuxtImg class="w-full !h-16 object-cover" :src="item" />
            </SwiperSlide>
          </swiper>
        </UCard>
      </div>
    </TheContainer>
  </section>
</template>
<script setup lang="ts">
import type { TourDTO } from "~/types/TourModel";
import "swiper/css";

import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/vue";
definePageMeta({
  layout: "single",
  name: "single",
});

const route = useRoute();

const { data: tour } = await useFetch<TourDTO.GetOne.Response>(
  `http://10.0.202.34:8081/tour/find/${route.query.id}`
);
useHead({
  title: `${tour.value?.name} | تور کده`,
});
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};
</script>
<style lang="less">
.single-tour {
  .mySwiper .swiper-slide {
    opacity: 0.4;
  }

  .mySwiper .swiper-slide-thumb-active {
    opacity: 1;
  }
}
</style>
