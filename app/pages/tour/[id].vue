<template>
  <section class="py-12 single-tour">
    <TheContainer v-if="tour?.id" class="grid md:grid-cols-12 gap-4">
      <div class="md:col-span-8">
        <h4 class="text-2xl font-bold mb-4">{{ tour.name }}</h4>
        <p>description:{{ tour.description }}</p>
        <p>startDate:{{ tour.startDate }}</p>
        <p>endDate:{{ tour.endDate }}</p>
        <p>price:{{ tour.price }}</p>
        <p>priceDiscount:{{ tour.priceDiscount }}</p>
        <p>priceOff:{{ tour.priceOff }}</p>
      </div>
      <div class="md:col-span-4">
        <UCard>
          <Swiper
            class="h-80 w-full mx-auto"
            :style="{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }"
            :loop="true"
            :space-between="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="[FreeMode, Navigation, Thumbs]"
          >
            <SwiperSlide
              v-for="(item, index) in tour.imagesAddress"
              :key="index"
            >
              <NuxtImg
                class="rounded-t-3xl w-full h-full object-cover"
                :src="item"
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            :loop="true"
            :space-between="10"
            :slides-per-view="4"
            :free-mode="true"
            :watch-slides-progress="true"
            :modules="[FreeMode, Navigation, Thumbs]"
            class="mySwiper pt-2!"
            @swiper="setThumbsSwiper"
          >
            <SwiperSlide
              v-for="(item, index) in tour.imagesAddress"
              :key="index"
            >
              <NuxtImg class="w-full h-16! object-cover" :src="item" />
            </SwiperSlide>
          </Swiper>
        </UCard>
      </div>
    </TheContainer>
  </section>
</template>
<script setup lang="ts">
import type { TourDTOGetOneResponse } from "~/types/TourModel";
import { Swiper, SwiperSlide } from "swiper/vue";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

definePageMeta({
  layout: "single",
  name: "single",
});

const route = useRoute();

const { data: tour } = await useFetch<TourDTOGetOneResponse>(
  `http://10.0.202.34:8081/tour/find/${route.params.id}`
);
useHead({
  title: `${tour.value?.name} | تور کده`,
});
const thumbsSwiper = ref<SwiperType | null>(null);

const setThumbsSwiper = (swiper: SwiperType) => {
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
