<script setup lang="ts"></script>

<template>
  <section class="py-12">
    <TheContainer class="grid lg:grid-cols-5">
      <div class="lg:col-span-2">
        <h3 class="text-lg font-bold mb-4 text-gray-600">
          به تورم خوش آمدید ما آژانس مسافرتی معتبر جهانی هستیم
        </h3>
        <p class="text-base font-base mb-4 text-gray-600 leading-7">
          تنوع بسیاری از معابر موجود است اما اکثریت با تزریق تصادفی هوم به شکلی
          دچار تغییر شده اند کلمات
        </p>
        <p class="text-base font-base mb-4 text-gray-600 leading-7">
          در همان زمان، کار و درد بزرگی رخ داد. برای آن من به کمترین چیزی می رسم
          که جز این می تواند هر نوع کاری را تمرین کند برخی از آن مفید است با
          عجله وارد خانه نشوید او می خواهد در لذت عیب جویی کند، اما نیازی به
          فرار از درد نیست متولد شود تا شهوت کور نشوند بیرون نمی آیند داخل هستند
          تقصیر کسانی است که دفتر خود را ترک می کنند.
        </p>
      </div>
      <div
        class="lg:col-span-3 grid gap-4 lg:gap-none lg:grid-cols-3 relative h-[56rem]"
      >
        <NuxtImg
          class="w-full lg:w-[28rem] shadow p-2 bg-white rounded-xl lg:left-0 lg:top-0 lg:absolute"
          src="/assets/img/normal/about_3_1.jpg"
        />
        <NuxtImg
          class="w-full lg:w-[28rem] shadow p-2 bg-white rounded-xl left-96 top-20 lg:absolute"
          src="/assets/img/normal/about_3_2.jpg"
        />
        <NuxtImg
          class="w-full lg:w-[28rem] shadow p-2 bg-white rounded-xl lg:left-0 lg:top-[34rem] lg:absolute lg:animate-translate"
          src="/assets/img/normal/about_3_3.jpg"
        />
      </div>
    </TheContainer>
  </section>
</template>

<style>
@media (min-width: 1024px) {
  .lg\:animate-translate {
    animation: translate 8s infinite ease-in-out;
  }
}

@keyframes translate {
  0% {
    left: 0px;
  }
  75% {
    left: 100px;
  }
}
</style>
