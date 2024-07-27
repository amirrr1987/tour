<template>
  <main class="grid grid-cols-12 gap-4">
    <UCard as="aside" class="span-4" :ui="asideUi">
      <form action="">
        <div class="flex gap-x-2">
          <label for="" class="p-1">search: </label>
          <input type="text" class="border p-1" v-model="search" />
        </div>
      </form>
    </UCard>
    <UCard as="section" :ui="sectionUi"> f </UCard>
  </main>
</template>
<script setup lang="ts">
const search = useRouteQuery("search");

const sectionUi = {
  base: "flex-1 col-span-8",
};
const asideUi = {
  base: "col-span-2",
};
</script>
<style lang="css"></style>
