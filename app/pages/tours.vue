<script setup lang="ts">
import { CalendarDate } from '@internationalized/date';

const tours = ref([
  {
    id: 1,
    name: 'Tour 1',
    description: 'Tour 1 description',
  },
  {
    id: 2,
    name: 'Tour 2',
    description: 'Tour 2 description',
  },
  {
    id: 3,
    name: 'Tour 3',
    description: 'Tour 3 description',
  },
  {
    id: 4,
    name: 'Tour 4',
    description: 'Tour 4 description',
  },
  {
    id: 5,
    name: 'Tour 5',
    description: 'Tour 5 description',
  },
  {
    id: 6,
    name: 'Tour 6',
    description: 'Tour 6 description',
  },
  {
    id: 7,
    name: 'Tour 7',
    description: 'Tour 7 description',
  },
  {
    id: 8,
    name: 'Tour 8',
    description: 'Tour 8 description',
  },
  {
    id: 9,
    name: 'Tour 9',
    description: 'Tour 9 description',
  },
  {
    id: 10,
    name: 'Tour 10',
    description: 'Tour 10 description',
  },
  {
    id: 11,
    name: 'Tour 11',
    description: 'Tour 11 description',
  },
  {
    id: 12,
    name: 'Tour 12',
    description: 'Tour 12 description',
  },
  {
    id: 13,
    name: 'Tour 13',
    description: 'Tour 13 description',
  },
  {
    id: 14,
    name: 'Tour 14',
    description: 'Tour 14 description',
  },
  {
    id: 15,
    name: 'Tour 15',
    description: 'Tour 15 description',
  },
  {
    id: 16,
    name: 'Tour 16',
    description: 'Tour 16 description',
  },
  {
    id: 17,
    name: 'Tour 17',
    description: 'Tour 17 description',
  },
  {
    id: 18,
    name: 'Tour 18',
    description: 'Tour 18 description',
  },
  {
    id: 19,
    name: 'Tour 19',
    description: 'Tour 19 description',
  },
  {
    id: 20,
    name: 'Tour 20',
    description: 'Tour 20 description',
  },
]);

const search = ref('');

const categories = ref([
  {
    id: 1,
    name: 'Category 1',
  },
  {
    id: 2,
    name: 'Category 2',
  },
  {
    id: 3,
    name: 'Category 3',
  },
]);

const category = ref(null);

const startInputDateRef = useTemplateRef('startInputDateRef')
const startModelValue = shallowRef(new CalendarDate(2022, 1, 10))

const tourCount = ref(0)

const price = ref([
  25,
  75
])

const sortBy = ref('name')
const sortByOptions = ref([
  {
    id: 'name',
    name: 'Name',
  },
]);

const sortOrder = ref('asc')
const sortOrderOptions = ref([
  {
    id: 'asc',
    name: 'Ascending',
  },
]);
const locations = ref([
  {
    id: 1,
    name: 'Location 1',
  },
  {
    id: 2,
    name: 'Location 2',
  },
]);

const location = ref(null);
  
const Vehicles = ref([
  {
    id: 1,
    name: 'Car',
  },
]);

const Vehicle = ref(null);

const page = ref(1)
const perPage = ref(10)
const pageOptions = ref([
  {
    id: 10,
    name: '10',
  },
]);
const total = ref(100)

const filterTours = () => {
  console.log(search.value);
}

</script>
<template>
  <UPage class="py-6">
    <UContainer>
      <h1>Tours</h1>
      <div class="grid md:grid-cols-12 gap-4">
        <div class="md:col-span-3">
          <UCard class="h-full ">
            <form @submit.prevent="filterTours" class="space-y-4">
              <UFormField label="Search">
                <UInput v-model="search" type="text" placeholder="Search" class="w-full" />
              </UFormField>

              <UFormField label="Category">
                <USelect v-model="category" :options="categories" option-attribute="name" value-attribute="id"
                  class="w-full" />
              </UFormField>

              <UFormField label="start date">
                <UInputDate ref="startInputDateRef" v-model="startModelValue" class="w-full">
                  <template #trailing>
                    <UPopover :reference="startInputDateRef?.inputsRef[3]?.$el">
                      <UButton color="neutral" variant="link" size="sm" icon="i-lucide-calendar"
                        aria-label="Select a date" class="px-0" />

                      <template #content>
                        <UCalendar v-model="startModelValue" class="p-2" />
                      </template>
                    </UPopover>
                  </template>
                </UInputDate>
              </UFormField>

              <UFormField label="count">
                <UInputNumber v-model="tourCount" type="number" class="w-full" :min="0" :max="100" :step="1" />
              </UFormField>


              <UFormField label="price">
                <USlider v-model="price" tooltip :min="0" :max="100000" :step="1" />

              </UFormField>

              <UFormField label="location">
                <USelect v-model="location" :options="locations" option-attribute="name" value-attribute="id"
                  class="w-full" />
              </UFormField>


              <UFormField label="Vehicles">
                <USelect v-model="Vehicle" :options="Vehicles" option-attribute="name" value-attribute="id"
                  class="w-full" />
              </UFormField>


              <UFormField>
                <UButton type="submit" block>Filter</UButton>
              </UFormField>
            </form>
          </UCard>
        </div>
        <div class="md:col-span-9">
          <div class="flex gap-4 mb-4">
            <USelect v-model="sortBy" :options="sortByOptions" option-attribute="name" value-attribute="id" class="w-full" />
            <USelect v-model="sortOrder" :options="sortOrderOptions" option-attribute="name" value-attribute="id" class="w-full" />
            <USelect v-model="perPage" :options="pageOptions" option-attribute="name" value-attribute="id" class="w-full" />
          </div>
          <div class="grid lg:grid-cols-2 gap-4">
            <UCard v-for="tour in tours" :key="tour.id">
              <img
                src="https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg"
                alt="">
              <div class="mt-4">{{ tour.name }}</div>
            </UCard>
          </div>
          <UPagination v-model:page="page" :total="total" :per-page="perPage" />

        </div>
      </div>
    </UContainer>
  </UPage>
</template>