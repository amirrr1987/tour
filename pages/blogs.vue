<script setup lang="ts">

</script>

<template>
<section class="py-12">
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      <UCard v-for="item in 12">
        {{item}}
      </UCard>
    </div>
  </div>
</section>
</template>

<style scoped>

</style>