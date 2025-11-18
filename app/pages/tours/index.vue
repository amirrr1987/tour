<template>
  <section class="py-12">
    <u-container class="grid md:grid-cols-12 gap-4">
      <div class="col-span-12 md:col-span-3">
        <u-card class="h-full">sdf</u-card>
      </div>
      <div class="col-span-12 md:col-span-9 space-y-4">
        <u-card v-for="tour in tours" :key="tour.id">
          <h2>{{ tour.name }}</h2>
          <p>{{ tour.description }}</p>
          <NuxtLink :to="{ name: 'tours-slag', params: { slag: tour.slag } }">
            View Details
          </NuxtLink>
        </u-card>
        <div class="col-span-12 flex justify-center">
          <UPagination
            v-model:page="page"
            :total="total"
            :page-size="pageSize"
            show-edges
            :sibling-count="1"
            active-color="primary"
            active-variant="subtle"
          />
        </div>
      </div>
    </u-container>
  </section>
</template>
<script setup lang="ts">
const page = ref(5);
const pageSize = ref(10);
const total = ref(100);
const tours = [
  { id: 1, slag: "tour-1", name: "Tour 1", description: "Description 1" },
  { id: 2, slag: "tour-2", name: "Tour 2", description: "Description 2" },
  { id: 3, slag: "tour-3", name: "Tour 3", description: "Description 3" },
  { id: 4, slag: "tour-4", name: "Tour 4", description: "Description 4" },
  { id: 5, slag: "tour-5", name: "Tour 5", description: "Description 5" },
  { id: 6, slag: "tour-6", name: "Tour 6", description: "Description 6" },
  { id: 7, slag: "tour-7", name: "Tour 7", description: "Description 7" },
  { id: 8, slag: "tour-8", name: "Tour 8", description: "Description 8" },
  { id: 9, slag: "tour-9", name: "Tour 9", description: "Description 9" },
  { id: 10, slag: "tour-10", name: "Tour 10", description: "Description 10" },
];
</script>
