<script setup lang="ts">
const config = {
  constrained: '!container',
}
</script>

<template>
  <UContainer  :ui="config">
    <slot />
  </UContainer>
</template>

<style scoped></style>
