<template>
  <header class="bg-[url('assets/img/hero/hero_bg_1_1.jpg')] py-12 md:py-72">
    <TheContainer>
      <h4 class="text-3xl text-white mb-2">بگذار سفر آغاز شود...</h4>
      <p class="mb-4 text-base text-white">
        در حال برنامه‌ریزی برای سفر هستید؟ ما سفر شما را با بهترین مکان‌ها و در
        بهترین بودجه سازماندهی خواهیم کرد!
      </p>

      <UCard>
        <UForm class="space-y-4 md:space-y-0 md:flex">
          <UFormGroup label="جستجو" class="md:flex-1/2">
            <UInput v-model:modelValue="search.search" />
          </UFormGroup>
          {{ search.date[0] }}
          {{ search.date[1] }}
          <UFormGroup label="تاریخ شروع">
            <DatePicker v-model:modelValue="search.date" color="red" />
          </UFormGroup>

          <UButton class="md:flex-1/2" icon="tabler-search">جستجو</UButton>
        </UForm>
      </UCard>
    </TheContainer>
  </header>
</template>
<script setup lang="ts">
import DatePicker from "@alireza-ab/vue3-persian-datepicker";
import { useRouteQuery } from "@vueuse/router";
const search = ref({
  date: useRouteQuery<string>("start", '', { transform: String }),
  search: useRouteQuery<string>("search", undefined, { transform: String }),
});
</script>
