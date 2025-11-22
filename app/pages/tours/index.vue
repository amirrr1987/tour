<script setup lang="ts">
import { useCategoryStore } from "~/stores/category.store";
import { useLocationStore } from "~/stores/location.store";
import { useTourStore } from "~/stores/tour.store";
const tourStore = useTourStore();
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
      <div class="grid md:grid-cols-12 gap-6">
        <div class="md:col-span-5 lg:col-span-4 xl:col-span-3">
          <UCard>
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="font-semibold">Filters</h3>
                <UButton
                  class="text-xs"
                  variant="ghost"
                  size="sm"
                  @click="onReset"
                >
                  Clear All
                </UButton>
              </div>
            </template>
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
              <UButton type="submit" block> Apply Filters </UButton>
            </form>
          </UCard>
        </div>
        <div class="md:col-span-7 lg:col-span-8 xl:col-span-9">
          <div class="mb-4 flex items-center justify-between">
            <p class="text-sm text-muted">
              Showing
              {{ tourStore.tours.length }}
              of
              {{ tourStore.tours.length }}
              tours
            </p>
          </div>

          <div class="grid grid-cols-12">
            <UCard
              v-for="tour in tourStore.tours"
              :key="tour.id"
              class="col-span-full md:col-span-6 lg:col-span-4 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div class="relative h-48 overflow-hidden">
                <img
                  :src="tour.image"
                  :alt="tour.name"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div class="absolute top-3 left-3 flex gap-2">
                  <UBadge v-if="tour.featured" color="primary">Featured</UBadge>
                  <UBadge v-if="tour.originalPrice" color="success"
                    >Sale</UBadge
                  >
                </div>
                <div class="absolute top-3 right-3">
                  <UBadge color="neutral" variant="solid" class="bg-black/50">
                    <UIcon name="i-lucide-map-pin" class="w-3 h-3 mr-1" />
                    {{ tour.location }}
                  </UBadge>
                </div>
              </div>
              <div class="p-4">
                <div class="flex items-start justify-between mb-2">
                  <h3 class="text-lg font-semibold line-clamp-1">
                    {{ tour.name }}
                  </h3>
                </div>
                <p class="text-sm text-muted mb-3 line-clamp-2">
                  {{ tour.description }}
                </p>
                <div class="flex items-center gap-4 mb-3 text-sm text-muted">
                  <div class="flex items-center gap-1">
                    <UIcon name="i-lucide-clock" class="w-4 h-4" />
                    {{ tour.duration }}
                  </div>
                  <div class="flex items-center gap-1">
                    <UIcon
                      name="i-lucide-star"
                      class="w-4 h-4 text-yellow-500 fill-yellow-500"
                    />
                    {{ tour.rating }} ({{ tour.reviews }})
                  </div>
                </div>
                <div class="flex items-center justify-between pt-3 border-t">
                  <div>
                    <div
                      v-if="tour.originalPrice"
                      class="flex items-center gap-2"
                    >
                      <span class="text-lg font-bold text-primary"
                        >${{ tour.price }}</span
                      >
                      <span class="text-sm text-muted line-through"
                        >${{ tour.originalPrice }}</span
                      >
                    </div>
                    <span v-else class="text-lg font-bold text-primary"
                      >${{ tour.price }}</span
                    >
                    <span class="text-xs text-muted">/person</span>
                  </div>
                  <UButton
                    :to="`/tours/${tour.id}`"
                    size="sm"
                    icon="i-lucide-arrow-right"
                  >
                    View
                  </UButton>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </div>
    </UContainer>
  </UPage>
</template>
