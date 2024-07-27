<template>
<UContainer>
  <div class="">tour {{ id }}</div>
</UContainer>
</template>
<script setup lang="ts">
const route = useRoute()
const id = computed(()=> route.params.id)
</script>