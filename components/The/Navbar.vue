<script setup lang="ts">
const { data } = await useFetch("http://10.0.202.34:8081/category/getAll");
</script>

<template>
  <nav class="bg-white shadow sticky top-0 z-50 py-4">
    <TheContainer class="flex items-center gap-x-4">
      <ul class="flex gap-4 flex-1">
        <li><NuxtLink active-class="text-rose-500" to="/">صفحه اصلی</NuxtLink></li>
        <li><NuxtLink active-class="text-rose-500" to="/tour-list">تورها</NuxtLink></li>
        <li><NuxtLink active-class="text-rose-500" to="/about-us">درباره ما</NuxtLink></li>
        <li><NuxtLink active-class="text-rose-500" to="/contact-us">تماس با ما</NuxtLink></li>
      </ul>
      <NuxtLink to="/">
        <NuxtImg class="h-10" src="assets/img/logo.svg" />
      </NuxtLink>
    </TheContainer>
  </nav>
</template>
