<template>
  <NuxtRouteAnnouncer>
    <template #default="{ message }">
      <p>{{ message }} was loaded.</p>
    </template>
  </NuxtRouteAnnouncer>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
#__nuxt{
  font-family: 'Vazirmatn';
}
</style>