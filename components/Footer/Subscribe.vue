<script setup lang="ts">
const config = {
  base: "md:w-96",
};
</script>

<template>
  <AContainer class="flex flex-col items-center gap-4">
    <h4 class="text-xl font-medium text-green-500">با ما همسفر شو!</h4>
    <div class="text-xs font-normal text-gray-500">
      از تخفیف‌ها و جدیدترین‌ تورها با خبر شوید.
    </div>
    <UButtonGroup size="xl" orientation="horizontal" dir="ltr">
      <UInput :ui="config" type="email" />
      <UButton icon="tabler:send" color="green" />
    </UButtonGroup>
  </AContainer>
</template>

<style scoped></style>
