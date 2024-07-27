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
