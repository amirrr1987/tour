<script setup lang="ts">
const inputUi = {
  base: "md:w-96",
};

const buttonGroupUi = {
  rounded: "rounded-xl",
  shadow: "shadow-xl",
};

const city = ref("");

const router = useRouter();
const findByData = () => {
  router.push(`/tour/?city=${city.value}`);
};
const cities = ['خوی', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']
</script>

<template>
  <header class="py-12 flex">
    <AContainer class="flex justify-center items-center">
      <UButtonGroup size="xl" orientation="horizontal" :ui="buttonGroupUi">
        <UInputMenu  :ui="inputUi" v-model="city" :options="cities" @keyup.enter="findByData" />

        <!-- <UButton icon="tabler:click" color="green" /> -->
        <!-- <UButton icon="tabler:x" color="green" /> -->
        <UButton icon="tabler:search" color="green" label="جستجو" @click="findByData" />
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
