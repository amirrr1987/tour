<template>
  <section class="py-12">
    <TheContainer class="grid grid-cols-4 gap-4">
      <!-- <TourCard v-for="item in 12" /> -->
      <SliderCategory class="col-span-12" />
    </TheContainer>
  </section>
  <section class="py-12 bg-[url('/assets/img/bg/team_bg_1.png')] bg-[#E9F6F9]">
    <TheContainer class="flex gap-4">
      <div>
        <h3 class="text-2xl font-bold text-gray-600 mb-4">
          سفر خود را با ما برنامه ریزی کنید
        </h3>
        <p class="mb-4">
          انواع مختلفی از متن های موجود وجود دارد، اما اکثر آنها به شکلی دچار
          تغییراتی شده اند، با تزریق زمزمه کلمات تصادفی که حتی کمی هم به نظر نمی
          رسند.
        </p>
        <div>
          <UButton >Learn more</UButton>
        </div>
      </div>
      <div class="w-max grid gap-4 grid-cols-2 grid-rows-2 p-">
        <NuxtImg
          class="w-96 h-full rounded-tr-[8rem] rounded-bl-[8rem] col-start-2 col-end-3 row-start-1 row-end-3"
          src="/assets/img/normal/about_1_1.jpg"
        />
        <NuxtImg
          class="w-96 rounded-t-[4rem] rounded-br-[4rem] col-start-1 col-end-2 row-start-1 row-end-2"
          src="/assets/img/normal/about_1_2.jpg"
        />
        <NuxtImg
          class="w-96 rounded-b-[4rem] rounded-tr-[4rem] col-start-1 col-end-2 row-start-2 row-end-3"
          src="/assets/img/normal/about_1_3.jpg"
        />
      </div>
    </TheContainer>
  </section>
</template>
