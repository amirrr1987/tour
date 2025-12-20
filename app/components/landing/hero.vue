<script setup lang="ts">
import type { IFilter } from "~/models/filter.model";
import { useUrlSearchParams } from "@vueuse/core";

const formData = ref<Pick<IFilter, "search" | "location" | "startDate">>({
  search: "",
  location: "",
  startDate: "",
});

interface IObj {
  path: string;
  query?: {
    search?: string;
    location?: string;
    startDate?: string;
  };
}
const handleSearch = () => {
  const obj: IObj = {
    path: "/tours",
  };

  const params = useUrlSearchParams("history", { removeNullishValues: true });

  if (formData.value.search) {
    params.search = formData.value.search;
  }
  if (formData.value.location) {
    params.location = formData.value.location;
  }
  if (formData.value.startDate) {
    params.startDate = formData.value.startDate;
  }

  obj.query = { ...params };
  navigateTo(obj);
};
</script>
<template>
  <section
    class="relative py-20 md:py-32 bg-linear-to-br from-primary/10 via-background to-background"
  >
    <UContainer>
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          {{ $t("components.landing.hero.title") }}
          <span class="text-primary">{{
            $t("components.landing.hero.titleHighlight")
          }}</span>
        </h1>
        <p class="text-xl text-muted mb-8 max-w-2xl mx-auto">
          {{ $t("components.landing.hero.description") }}
        </p>

        <!-- Search Bar -->
        <UCard class="max-w-3xl mx-auto">
          <form class="space-y-4" @submit.prevent="handleSearch">
            <div class="grid md:grid-cols-3 gap-4">
              <UFormField :label="$t('components.landing.hero.searchTours')">
                <UInput
                  v-model="formData.search"
                  :placeholder="$t('components.landing.hero.searchPlaceholder')"
                  icon="i-lucide-search"
                  class="w-full"
                />
              </UFormField>
              <UFormField :label="$t('components.landing.hero.destination')">
                <UInput
                  v-model="formData.location"
                  :placeholder="
                    $t('components.landing.hero.destinationPlaceholder')
                  "
                  icon="i-lucide-map-pin"
                  class="w-full"
                />
              </UFormField>
              <UFormField :label="$t('components.landing.hero.date')">
                <UInput
                  v-model="formData.startDate"
                  type="date"
                  icon="i-lucide-calendar"
                  class="w-full"
                />
              </UFormField>
            </div>
            <UButton type="submit" size="lg" block icon="i-lucide-search">
              {{ $t("components.landing.hero.searchButton") }}
            </UButton>
          </form>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
