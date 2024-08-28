<script setup lang="ts"></script>

<template>
  <section class="py-12 md:py-24">
    <div class="container mx-auto px-4">
      <h3
        class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-center"
      >
        بسته‌های تور
      </h3>

      <p class="text-slate-400 max-w-xl mx-auto text-center mb-12">
        برنامه‌ریزی برای یک سفر؟ ما سفر شما را با بهترین مکان‌ها و بهترین بودجه
        سازماندهی می‌کنیم!
      </p>

      <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
        <UCard
          v-for="(item, index) in 12"
          :key="item"
          as="figure"
          :ui="{
            base: 'overflow-hidden',
            body: {
              base: 'group',
            },
            header: {
              padding: 'px-0 py-0 sm:px-0',
            },
            footer: {
              base: 'flex justify-between text-xs',
            },
          }"
        >
          <template #header>
            <div class="relative overflow-hidden">
              <img
                :src="`/images/listing/${index + 1}.jpg`"
                class="scale-125 group-hover:scale-100 duration-500"
                alt=""
              />
              <UBadge color="rose" class="absolute block-0 start-2 top-2"
                >تخفیف ٪۱۰</UBadge
              >
            </div>
            <div class="grid grid-cols-3 text-center text-rose-600">
              <div
                class="border py-2 text-sm flex items-center justify-center gap-x-2"
              >
                <Icon name="tabler:map" />
                خوی
              </div>
              <div
                class="border py-2 text-sm flex items-center justify-center gap-x-2"
              >
                <Icon name="tabler:users" />
                ۲ نفر
              </div>
              <div
                class="border py-2 text-sm flex items-center justify-center gap-x-2"
              >
                sdf
              </div>
            </div>
          </template>

          <NuxtLink
            to="/about-us"
            class="text-lg font-medium hover:text-red-500 duration-500 ease-in-out"
          >
            <h4>ماجراجویی قایقرانی در کوبا</h4>
          </NuxtLink>

          <div class="items-center mt-2 flex items-center gap-x-2">
            <span class="text-slate-400">امتیاز:</span>
            <ul class="text-lg font-medium text-amber-400 list-none mt-2">
              <li class="inline" v-for="item in 5">
                <Icon name="mdi-star" />
              </li>
            </ul>

            <ul>
              <li class="inline text-black dark:text-white text-sm">۵.۰(۳۰)</li>
            </ul>
          </div>

          <template #footer>
            <h5 class="text-lg font-medium text-red-500 text-sm">
              26.000.000 (تومان) / روز
            </h5>
            <UButton
              to="/"
              variant="ghost"
              icon="mdi-arrow-right"
              class="text-slate-400 hover:text-red-500 text-sm"
            >
              بیشتر
            </UButton>
          </template>
        </UCard>
      </div>

      <UButton
        to="/"
        class="mx-auto flex mt-6 w-max"
        variant="ghost"
        icon="mdi-arrow-right"
      >
        مشاهده همه
      </UButton>
      <div class="mt-6 text-center"></div>
    </div>
  </section>
</template>

<style scoped></style>
