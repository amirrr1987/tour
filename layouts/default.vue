<template>
  <TheNavbar />
  <HomeCarousel />
  <slot />
  <UDivider class="my-4" />
  <TheFooter />
</template>
<style lang="css">
#__nuxt {
  display: grid;
  grid-template-rows: max-content 1fr max-content max-content;
  min-height: 100vh;
  /* padding: 1rem; */
  /* gap: 1rem; */
}
</style>
