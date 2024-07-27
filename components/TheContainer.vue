<script lang="ts" setup>
const containerUI = {
  base: 'mx-auto',
  padding: 'px-4 sm:px-4 lg:px-4',
  constrained: '!container',
}

</script>

<template>
  <UContainer :ui="containerUI">
    <slot />
  </UContainer>
</template>

<style scoped></style>
