<template>
  <div class="absolute left-0 z-50 bg-white flex">
    <h1 class="">Color mode: {{ colorMode.value }}</h1>
    <select v-model="colorMode.preference" class="w-40 bg-red-500">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>
  </div>
  <NuxtLoadingIndicator color="#219603" :height="3" :throttle="0" />
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
const colorMode = useColorMode();
</script>
<style>
body {
  font-family: "Vazirmatn FD", sans-serif;
  font-optical-sizing: auto;
  font-weight: 268;
  font-style: normal;
}
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
