<template>
  <div>
    <h1>Tours</h1>
    <ul class="grid grid-cols-4 gap-4">
      <li v-for="tour in tours" :key="tour.id">
        <NuxtLink :to="`/tours/${tour.slug}`">
          <h2>{{ tour.name }}</h2>
          <p>{{ tour.description }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const tours = [
  { id: 1, slug: "tour-1", name: "Tour 1", description: "Description 1" },
  { id: 2, slug: "tour-2", name: "Tour 2", description: "Description 2" },
  { id: 3, slug: "tour-3", name: "Tour 3", description: "Description 3" },
  { id: 4, slug: "tour-4", name: "Tour 4", description: "Description 4" },
];
</script>
