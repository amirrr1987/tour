<template>
  <section class="py-12">
    <div class="container mx-auto px-4 grid grid-cols-2 gap-8">
      <div class="">{{ category }}</div>
      <div class="">{{ subCategory }}</div>
    </div>
  </section>
</template>
<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const subCategory = computed(() => route.params.subCategory);
const category = computed(() => route.params.category);

definePageMeta({
  layout: "filter",
});
</script>
