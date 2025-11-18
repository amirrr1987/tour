<template>
  <div>
    <h1>Tour {{ slug }}</h1>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const { slug } = route.params;
</script>
