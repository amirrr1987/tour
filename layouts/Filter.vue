<script setup lang="ts">
import { useRouteQuery } from "@vueuse/router";

const cities = [
  "خوی",
  "Arlene Mccoy",
  "Devon Webb",
  "Tom Cook",
  "Tanya Fox",
  "Hellen Schmidt",
  "Caroline Schultz",
  "Mason Heaney",
  "Claudie Smitham",
  "Emil Schaefer",
];
const city = useRouteQuery("city", "", { transform: String });
</script>

<template>
  <div>
    <TheNavbar />
    <main class="bg-gray-50 py-12">
      <div class="container mx-auto px-4 grid grid-cols-12 gap-4">
        <UCard class="col-span-3">
          <UForm >
            <UFormGroup>
              <USelectMenu v-model="city" :options="cities" />
            </UFormGroup>
          </UForm>
        </UCard>
        <div class="col-span-9">
          <slot />
        </div>
      </div>
    </main>
    <TheFooter />
  </div>
</template>
