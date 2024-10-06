<script setup lang="ts">
const ui = {
  // constrained: "w-full lg:w-8/12",
};
</script>

<template>
  <UContainer :ui="ui">
    <slot />
  </UContainer>
</template>

