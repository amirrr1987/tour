<template>
  <!-- <NuxtRouteAnnouncer /> -->
  <NuxtLoadingIndicator color="#2196f3" :height="5" :throttle="0" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Vazirmatn", sans-serif;
}
</style>
