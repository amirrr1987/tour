<script setup lang="ts">
interface Props{
  haveContainer: boolean
}
const props = withDefaults(defineProps<Props>(), {
  haveContainer: false
})
</script>

<template>
  <div class="border-t border-t-solid border-t-gray-300 my-2" :class="{'container mx-auto px-4' : props.haveContainer}" />
</template>

<style scoped></style>
