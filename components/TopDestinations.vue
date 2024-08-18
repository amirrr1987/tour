<script setup lang="ts"></script>

<template>
  <section class="py-12 md:py-24">
    <div class="container mx-auto px-4">
      <h3
        class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-center"
      >
        Top Destinations
      </h3>

      <p class="text-slate-400 max-w-xl mx-auto text-center mb-12">
        Planning for a trip? We will organize your trip with the best places and
        within best budget!
      </p>

      <Swiper
        dir="ltr"
        :slides-per-view="4"
        :space-between="50"
        :loop="true"
        :effect="'creative'"
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
        <SwiperSlide v-for="(slide,index) in 11" :key="slide">
          <div class="group text-center m-2">
            <div class="relative overflow-hidden rounded-full">
              <img
                :src="`/images/listing/${index+1}.jpg`"
                class="w-full md:h-32 h-36 object-cover scale-125 group-hover:scale-100 duration-500 shadow dark:shadow-gray-800"
                alt=""
              />
            </div>

            <div class="mt-2">
              <a
                href=""
                class="text-lg font-medium hover:text-red-500 duration-500 ease-in-out"
                >Rome, Italy</a
              >
              <p class="text-slate-400 text-sm duration-500">3 Hotels</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped></style>
