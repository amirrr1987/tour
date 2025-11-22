<script setup lang="ts">
import { useCategoryStore } from "~/stores/category.store";
import { useLocationStore } from "~/stores/location.store";

const categoryStore = useCategoryStore();
const locationStore = useLocationStore();
const formData = ref({
  search: "",
  category: "",
  location: "",
  price: [0, 2000],
  count: 0,
  startDate: "",
  vehicle: "all",
});
const clearFilter = () => {
  formData.value = {
    search: "",
    category: "",
    location: "",
    startDate: "",
    price: [0, 2000],
    count: 0,
    vehicle: "all",
  };
};
const setFilterInParams = () => {
  search.value = formData.value.search;
  category.value = formData.value.category;
  location.value = formData.value.location;
  priceMin.value = formData.value.price[0] ?? 0;
  priceMax.value = formData.value.price[1] ?? 2000;
  count.value = formData.value.count;
  vehicle.value = formData.value.vehicle;
  startDate.value = formData.value.startDate;
};
const search = useRouteQuery<string>("search", "");
const category = useRouteQuery<string>("category", "");
const location = useRouteQuery<string>("location", "");
const priceMin = useRouteQuery<number>("priceMin", 0);
const priceMax = useRouteQuery<number>("priceMax", 2000);
const count = useRouteQuery<number>("count", 0);
const vehicle = useRouteQuery<string>("vehicle", "all");
const startDate = useRouteQuery<string>("startDate", "");
const onSubmit = () => {
  setFilterInParams();
};
const onReset = () => {
  clearFilter();
  setFilterInParams();
};

const viewMode = ref<"grid" | "list">("grid");
const showFilters = ref(false);

const searchInput = ref("");
const onSearch = () => {
  search.value = searchInput.value;
};
</script>
<template>
  <UPage class="py-6 md:py-8">
    <UContainer>
      <div class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold mb-2">Explore Our Tours</h1>
        <p class="text-muted">
          Discover amazing destinations and create unforgettable memories
        </p>
      </div>

      <!-- Search and Sort Bar -->
      <div
        class="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
      >
        <div class="flex-1 w-full sm:max-w-md flex gap-2 items-center">
          <UInput
            v-model="searchInput"
            type="text"
            placeholder="Search tours, destinations..."
            icon="i-lucide-search"
            class="w-full"
            @keyup.enter="onSearch"
          />
          <UButton
            variant="subtle"
            color="primary"
            class="cursor-pointer"
            icon="i-lucide-search"
            @click="onSearch"
          />
        </div>
        <div class="flex gap-2 items-center w-full sm:w-auto">
          <UButton
            class="sm:hidden"
            variant="outline"
            @click="showFilters = !showFilters"
          >
            <UIcon
              :name="showFilters ? 'i-lucide-x' : 'i-lucide-filter'"
              class="w-4 h-4 mr-2"
            />
            Filters
          </UButton>
          <USelectMenu
            v-model="sortBy"
            :items="sortByOptions"
            value-key="id"
            option-attribute="label"
            placeholder="Sort by"
            class="w-full sm:w-48"
          />
          <div class="flex border rounded-lg overflow-hidden">
            <UButton
              :variant="viewMode === 'grid' ? 'solid' : 'ghost'"
              color="neutral"
              size="sm"
              square
              @click="viewMode = 'grid'"
            >
              <UIcon name="i-lucide-grid" class="w-4 h-4" />
            </UButton>
            <UButton
              :variant="viewMode === 'list' ? 'solid' : 'ghost'"
              color="neutral"
              size="sm"
              square
              @click="viewMode = 'list'"
            >
              <UIcon name="i-lucide-list" class="w-4 h-4" />
            </UButton>
          </div>
        </div>
      </div>

      <form class="space-y-8" @submit.prevent="onSubmit">
        <UFormField label="Search">
          <UInput
            v-model="formData.search"
            type="text"
            placeholder="Search tours"
            icon="i-lucide-search"
            class="w-full"
          />
        </UFormField>
        <UFormField label="Category">
          <USelectMenu
            v-model="formData.category"
            :items="categoryStore.categories"
            value-key="id"
            placeholder="Select category"
            icon="i-lucide-tag"
            class="w-full"
          />
        </UFormField>
        <UFormField label="Location">
          <USelectMenu
            v-model="formData.location"
            :items="locationStore.locations"
            value-key="id"
            placeholder="Select location"
            class="w-full"
            icon="i-lucide-map"
          />
        </UFormField>
        <UFormField label="Price">
          <USlider
            v-model="formData.price"
            tooltip
            :min="0"
            :max="2000"
            :step="50"
            icon="i-lucide-dollar-sign"
          />
        </UFormField>
        <UFormField label="Count">
          <UInput
            v-model="formData.count"
            type="number"
            placeholder="Count"
            icon="i-lucide-users"
            class="w-full"
          />
        </UFormField>
        <UFormField label="Start Date">
          <UInput
            v-model="formData.startDate"
            type="date"
            placeholder="Start date"
            icon="i-lucide-calendar"
            class="w-full"
          />
        </UFormField>
        <UFormField>
          <UButton type="submit">Filter</UButton>
          <UButton type="reset" variant="outline" @click="onReset">
            Clear
          </UButton>
        </UFormField>
      </form>
    </UContainer>
  </UPage>
</template>
