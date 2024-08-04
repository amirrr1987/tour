<template>
  <section class="py-12">
    <AContainer class="grid grid-cols-12 gap-4">
      <UCard class="col-span-2">
        <UForm>
          <UFormGroup>
            <USelectMenu v-model="city" :options="cities" />
          </UFormGroup>
        </UForm>
      </UCard>
      <div class="col-span-10 flex flex-wrap gap-4">
        <UCard v-for="item in 30" class="w-[24.02%]">{{ item }}</UCard>
      </div>
    </AContainer>
  </section>
</template>
<script setup lang="ts">
import { useRouteQuery } from "@vueuse/router";
const cities = ['خوی', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']

definePageMeta({
  layout: "filter",
});

const city = useRouteQuery("city", "", { transform: String });

console.log(city.value);
</script>
