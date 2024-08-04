<script setup lang="ts">
const inputUi = {
  base: "md:w-96",
}


const buttonGroupUi = {
  rounded: "rounded-xl",
  shadow: "shadow-xl",
};
</script>

<template>
  <header class="py-12 flex">
    <AContainer class="flex justify-center items-center">
      <UButtonGroup size="xl" orientation="horizontal" :ui="buttonGroupUi">
        <UInput :ui="inputUi" />
        <UButton icon="tabler:click" color="green" />
        <UButton icon="tabler:x" color="green" />
        <UButton icon="tabler:search" color="green" />
      </UButtonGroup>
    </AContainer>
  </header>
</template>

<style scoped>
header {
  background-image: url("/public/3d-render-view-beach-summer-holidays-concept_56345-794.jpg");
  height: 30rem;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
