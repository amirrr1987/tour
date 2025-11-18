<template>
  <div>{{ data }}</div>
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rerum illum
    dolore ad hic voluptates veritatis, dignissimos autem est, numquam laborum
    dolor voluptate facilis inventore nesciunt minus vitae voluptatem officiis.
  </div>
</template>
<script setup lang="ts">
const { data } = await useFetch("http://10.0.202.34:8081/tour/getAll");
</script>
