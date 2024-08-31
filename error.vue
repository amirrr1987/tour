<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <section
    class="relative bg-red-300/5 flex flex-col items-center justify-center h-screen"
  >
    <NuxtLink to="/">
      <NuxtImg class="w-20" src="images/logo-icon.png" />
    </NuxtLink>
    <NuxtImg src="images/maintenance.svg" class="mx-auto w-96" alt="" />
    <h1 class="my-6 md:text-4xl text-3xl font-bold">صفحه یافت نشد!</h1>
    <p class="text-slate-400 mb-4">
      به نظر می‌رسد صفحه‌ای که به دنبال آن بودید یافت نشد.
    </p>
    <UButton @click="handleError" color="rose" size="lg" class="mb-4">
      بازگشت به خانه
    </UButton>

    <p class="mb-0 text-slate-400">
      طراحی توسط
      <NuxtLink to="https://amirmaghami.ir/" target="_blank">
        امیر مغامی
      </NuxtLink>
    </p>
  </section>
</template>
