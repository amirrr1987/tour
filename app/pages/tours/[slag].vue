<template>
  <div>
    <section class="py-12">
      <u-container>
        <h1>Tour {{ slag }}</h1>
      </u-container>
    </section>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const { slag } = route.params;
</script>
