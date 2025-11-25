<script setup lang="ts">
const props = defineProps<{
  total: number;
  count: number;
}>();
</script>
<template>
  <p class="text-sm text-muted">
    Showing
    {{ props.count }}
    of
    {{ props.total }}
    tours
  </p>
</template>
