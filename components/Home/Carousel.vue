<script setup lang="ts">
const items = [
  "https://picsum.photos/1920/450?random=1",
  "https://picsum.photos/1920/450?random=2",
  "https://picsum.photos/1920/450?random=3",
  "https://picsum.photos/1920/450?random=4",
  "https://picsum.photos/1920/450?random=5",
  "https://picsum.photos/1920/450?random=6",
];
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    :items="items"
    arrows
    indicators
  >
    <img :src="item" class="w-full" draggable="false" />
  </UCarousel>
</template>
