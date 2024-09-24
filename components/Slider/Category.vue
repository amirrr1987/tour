<script setup lang="ts">
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const list = [
  "assets/img/hero/hero_bg_1_1.jpg",
  "assets/img/hero/hero_bg_1_2.jpg",
  "assets/img/hero/hero_bg_1_3.jpg",
  "assets/img/hero/hero_bg_2_1.jpg",
  "assets/img/hero/hero_bg_2_2.jpg",
  "assets/img/hero/hero_bg_2_3.jpg",
  "assets/img/hero/hero_bg_3_1.jpg",
  "assets/img/hero/hero_bg_3_2.jpg",
  "assets/img/hero/hero_bg_3_3.jpg",
  "assets/img/hero/hero_bg_3_4.jpg",
  "assets/img/hero/hero_bg_3_5.jpg",
];
</script>

<template>
  <header class="slider-category">
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative, Navigation, Pagination]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :pagination="true"
      :navigation="true"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="slide in list" :key="slide">
        <NuxtImg :src="slide" />
      </SwiperSlide>
    </Swiper>
  </header>
</template>

<style>
.slider-category .swiper {
  width: 100%;
  height: 30rem;
  direction: ltr;
}

.slider-category .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider-category .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
