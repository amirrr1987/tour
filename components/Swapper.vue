<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperEffectCreative]"
    :slidesPerView="1"
    :spaceBetween="10"
    :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 4.5,
        spaceBetween: 50,
      },
    }"
    :loop="true"
    :autoplay="{
      delay: 1000,
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
    <SwiperSlide v-for="slide in slides" :key="slide.id" class="py-1">
      <UCard :ui="cardUi">
        <template #header>
          <img
            class="aspect-[1.7] object-cover"
            :src="slide.img"
            :title="slide.title"
            :alt="slide.title"
          />
        </template>
        {{ slide.title }}
      </UCard>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
interface Slide {
  id: number;
  title: string;
  img: string;
}
const slides = ref<Slide[]>([
  {
    id: 1,
    title: "فنلاند سوئد کشتی کروز 8 روزه شهریور1403",
    img: "https://youtopin.com/_next/image?url=https%3A%2F%2Fapi.youtopin.com%2Fmedia%2Fv1%2Ftour%2Fimage%2F0516c589-ade3-4a62-ac48-d4b6559da39b&w=1920&q=75",
  },
  {
    id: 2,
    title: "فرانسه  6 روزه آذر 1403",
    img: "https://youtopin.com/_next/image?url=https%3A%2F%2Fapi.youtopin.com%2Fmedia%2Fv1%2Ftour%2Fimage%2F9d293379-1ea7-4cdb-b0f6-7d997abb64e1&w=1920&q=75",
  },
  {
    id: 3,
    title: "فرانسه اسپانیا 9 روزه آذر1403 ",
    img: "https://youtopin.com/_next/image?url=https%3A%2F%2Fapi.youtopin.com%2Fmedia%2Fv1%2Ftour%2Fimage%2Fcac11527-3e90-4fd9-8554-b6c7d374cd6c&w=1920&q=75",
  },
  {
    id: 4,
    title: "تور 10 روزه کوبا شهریور 1403",
    img: "https://youtopin.com/_next/image?url=https%3A%2F%2Fapi.youtopin.com%2Fmedia%2Fv1%2Ftour%2Fimage%2F28ef0383-a0cf-482b-90be-13342f8473ca&w=1920&q=75",
  },
  {
    id: 5,
    title: "فرانسه ایتالیا 9 روزه مهر 1403 ",
    img: "https://youtopin.com/_next/image?url=https%3A%2F%2Fapi.youtopin.com%2Fmedia%2Fv1%2Ftour%2Fimage%2F7274b6f5-5e25-4b31-a7bc-3b99a9c654c8&w=1920&q=75",
  },
  {
    id: 6,
    title: "تور تستی",
    img: "https://s3gw.at.shab.cloud/production/houses/photos/2024/1/15/20/104643/thumb-house-104643-2024-06-10-08-41-02-0e76292794888d4f1fa75fb3aff4ca27c58f56a6-751044.jpg",
  },
]);

const cardUi = {
  base: "overflow-hidden",
  body: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:p-6",
  },
  header: {
    base: "",
    background: "",
    padding: "",
  },
  footer: {
    base: "",
    background: "",
    padding: "px-4 py-4 sm:px-6",
  },
};
</script>
