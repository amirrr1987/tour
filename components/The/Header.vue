<script setup lang="ts">
const config = {
  base: "w-96",
};
</script>

<template>
  <header class="py-12 flex ">
    <AContainer class="flex justify-center items-center">
      <UButtonGroup size="xl" orientation="horizontal" >
        <UInput :ui="config" />
        <UButton icon="tabler:click" color="green" />
        <UButton icon="tabler:x" color="green" />
        <UButton icon="tabler:search" color="green" />
      </UButtonGroup>
    </AContainer>
  </header>
</template>

<style scoped>
header {
  background-image: url("/public/realistic-travel-background-with-elements.jpg");
  height: 30rem;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
