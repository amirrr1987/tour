<template>
  <div>
    <section v-for="value in sections" :key="value.id" class="py-12">
      <u-container> sdfsdf </u-container>
    </section>
  </div>
</template>
<script setup lang="ts">
const sections = [
    { id: 1, title: "Section 1", description: "Description 1" },
    { id: 2, title: "Section 2", description: "Description 2" },
    { id: 3, title: "Section 3", description: "Description 3" },
    { id: 4, title: "Section 4", description: "Description 4" },
    { id: 5, title: "Section 5", description: "Description 5" },
    { id: 6, title: "Section 6", description: "Description 6" },
    { id: 7, title: "Section 7", description: "Description 7" },
    { id: 8, title: "Section 8", description: "Description 8" },
    { id: 9, title: "Section 9", description: "Description 9" },
    { id: 10, title: "Section 10", description: "Description 10" },
];
</script>
