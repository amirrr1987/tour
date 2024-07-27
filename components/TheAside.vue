<template>
  <UCard as="aside">
    <form action="">
      <div class="flex gap-x-2">
        <label for="" class="p-1">search: </label>
        <input type="text" class="border p-1" v-model="search" />
      </div>
    </form>
  </UCard>
</template>
<script setup lang="ts">
const search = useRouteQuery("search");
</script>
