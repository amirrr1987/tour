<template>
  <header class="bg-[url('assets/img/hero/hero_bg_1_1.jpg')] py-12 md:py-72">
    <TheContainer>
      <h4 class="text-3xl text-white mb-2">بگذار سفر آغاز شود...</h4>
      <p class="mb-4 text-base text-white">
        در حال برنامه‌ریزی برای سفر هستید؟ ما سفر شما را با بهترین مکان‌ها و در
        بهترین بودجه سازماندهی خواهیم کرد!
      </p>

      <UCard>
        <UForm :state="{}" class="space-y-4 md:space-y-0 md:flex gap-x-4">
          <UFormGroup label="جستجو" class="md:flex-1">
            <UInput v-model="search.name" />
          </UFormGroup>

          <UFormGroup label="تاریخ شروع">
            <DatePicker
              v-model:modelValue="search.startDate"
              color="red"
              mode="single"
            />
          </UFormGroup>

          <UFormGroup label="تعداد روز">
            <USelect
              v-model:modelValue="search.duration"
              :options="DurationList"
              color="red"
            />
          </UFormGroup>

          <div class="pt-4">
            <UButton size="lg" icon="tabler-search" @click="searched">
              جستجو
            </UButton>
          </div>
        </UForm>
      </UCard>
    </TheContainer>
  </header>
</template>
<script setup lang="ts">
import DatePicker from "@alireza-ab/vue3-persian-datepicker";
import { useRouteQuery } from "@vueuse/router";
import { useRouter } from "nuxt/app";
import { DurationList } from "~/enums";
const search = ref({
  startDate: undefined,
  name: undefined,
  duration: undefined,
});

const router = useRouter();
const searched = () => {
  router.push({
    name: "tour-list", // Make sure this matches your route name
    query: {
      startDate: search.value.startDate,
      name: search.value.name,
      duration: search.value.duration,
    },
  });
};
</script>
