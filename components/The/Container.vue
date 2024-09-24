<script setup lang="ts">
const ui = {
  constrained: "!container",
};
</script>

<template>
  <UContainer :ui="ui">
    <slot />
  </UContainer>
</template>

