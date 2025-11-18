<template>
  <section class="py-12">
    <TheContainer class="grid gap-4 grid-cols-12">
      <div class="col-span-12 lg:col-span-4 xl:col-span-2">
        <UCard>
          <UForm
            :schema="schema"
            class="grid grid-cols-2 md:grid-cols-1 gap-4"
            @submit.prevent="onSubmit"
          >
            <UFormField label="جستجو" name="name">
              <template #hint>
                <UButton
                  v-if="state.name"
                  size="xs"
                  variant="soft"
                  color="neutral"
                  icon="tabler:trash"
                  @click="onReset('name')"
                />
              </template>
              <UInput
                v-model="state.name"
                class="radio-filed"
                @change="onSubmit"
              />
            </UFormField>
            <UFormField label="تعداد روز" name="duration">
              <template #hint>
                <UButton
                  size="xs"
                  variant="soft"
                  color="error"
                  :trailing="true"
                  icon="tabler:trash"
                  @click="onReset('duration')"
                />
              </template>
              <USelect
                v-model="state.duration"
                :options="DurationList"
                class="radio-filed"
                @change="onSubmit"
              />
            </UFormField>
            <UFormField label="تاریخ شروع" name="startDate">
              <template #hint>
                <UButton
                  size="xs"
                  variant="soft"
                  color="error"
                  :trailing="true"
                  icon="tabler:trash"
                  @click="onReset('startDate')"
                />
              </template>
              <DatePicker
                v-model:model-value="state.startDate"
                color="red"
                mode="single"
                @change="onSubmit"
              />
            </UFormField>

            <USeparator class="hidden md:flex" />
            <UFormField label="نوع تور" name="tourType">
              <template #hint>
                <UButton
                  size="xs"
                  variant="soft"
                  color="error"
                  :trailing="true"
                  icon="tabler:trash"
                  @click="onReset('tourType')"
                />
              </template>
              <URadioGroup
                v-model="state.tourType"
                :options="TourTypeEnumList"
                class="radio-filed"
                @change="onSubmit"
              />
            </UFormField>

            <USeparator class="hidden md:flex" />
            <UFormField name="transferType">
              <template #hint>
                <UButton
                  size="sm"
                  variant="soft"
                  color="error"
                  :trailing="true"
                  icon="tabler:trash"
                  @click="onReset('transferType')"
                />
              </template>
              <template #label>
                <UIcon name="tabler:car" />
                وسیله نقلیه
              </template>
              <URadioGroup
                v-model="state.transferType"
                :options="TransferTypeEnumList"
                class="radio-filed"
                @change="onSubmit"
              />
            </UFormField>
            <USeparator class="hidden md:flex" />
            <UFormField label="محل اقامت" name="stayType">
              <template #hint>
                <UButton
                  size="xs"
                  variant="soft"
                  color="error"
                  :trailing="true"
                  icon="tabler:trash"
                  @click="onReset('stayType')"
                />
              </template>
              <URadioGroup
                v-model="state.stayType"
                :options="StayTypeEnumList"
                class="radio-filed"
                @change="onSubmit"
              />
            </UFormField>
            <!-- <USeparator class="hidden md:flex" /> -->
            <!-- <div class="flex gap-x-4">
              <UButton size="xs" type="submit" icon="">اعمال فیلتر</UButton>
              <UButton size="xs" type="" variant="ghost" @click="onReset">
                پاک کردن
              </UButton>
            </div> -->
          </UForm>
        </UCard>
      </div>
      <div class="col-span-12 lg:col-span-8 xl:col-span-10">
        <div class="flex justify-between mb-4">
          <UBreadcrumb :links="links" />
          <div class="flex gap-x-2 items-center">
            <span>نمایش :</span>
            <USelect
              v-model="state.size"
              :options="[3, 5, 10, 20, 50]"
              @change="onSubmit"
            />
          </div>
        </div>
        <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          <TourListCard
            v-for="tour in tourList"
            :key="`tour-${tour.id}`"
            :tour="tour"
          />
        </div>
        <div class="flex justify-center py-4">
          <UPagination
            v-model="state.page"
            :page-count="state.size"
            :total="totalElements"
          />
        </div>
      </div>
    </TheContainer>
  </section>
</template>
<script setup lang="ts">
import DatePicker from "@alireza-ab/vue3-persian-datepicker";
import { useRouteQuery } from "@vueuse/router";
import { useRoute } from "vue-router";
import type {
  MealTypeEnum,
  StayTypeEnum,
  TourLevelTypeEnum,
  TourTypeEnum,
  TransferTypeEnum,
} from "~/enums";
import {
  DurationList,
  StayTypeEnumList,
  TourTypeEnumList,
  TransferTypeEnumList,
} from "~/enums";
import type { TourDTOContent, TourDTOSearchResponse } from "~/types/tour.model";
import { z } from "zod";

definePageMeta({
  layout: "filter",
});
const schema = z
  .object({
    tourLevelType: z.string(),
    tourType: z.string(),
    mealType: z.string(),
    transferType: z.string(),
    stayType: z.string(),
    page: z.number(),
    size: z.number(),
    name: z.string(),
    startDate: z.string(),
    duration: z.string(),
  })
  .partial();

const state = reactive({
  tourLevelType: useRouteQuery<TourLevelTypeEnum | undefined>(
    "tourLevelType",
    undefined
  ),
  tourType: useRouteQuery<TourTypeEnum | undefined>("tourType", undefined),
  mealType: useRouteQuery<MealTypeEnum | undefined>("mealType", undefined),
  transferType: useRouteQuery<TransferTypeEnum | undefined>(
    "transferType",
    undefined
  ),
  stayType: useRouteQuery<StayTypeEnum | undefined>("stayType", undefined),
  page: useRouteQuery<number | string>("page", "1", { transform: Number }),
  size: useRouteQuery<number>("size", 5),
  name: useRouteQuery<string | undefined>("name"),
  startDate: useRouteQuery<string | undefined>("startDate"),
  duration: useRouteQuery<string | undefined>("duration"),
});

const tourList = ref<TourDTOContent[]>([]);
const totalElements = ref(0);

const fetchTours = async () => {
  const { data } = await useFetch<TourDTOSearchResponse>(
    "http://10.0.202.34:8081/tour/search",
    {
      method: "POST",
      body: {
        stayTypeEnum: state.stayType,
        transferTypeEnum: state.transferType,
        tourLevelTypeEnum: state.tourLevelType,
        tourTypeEnum: state.tourType,
        page: Number(state.page) - 1,
        size: state.size,
        name: state.name,
        startDate: state.startDate,
        duration: state.duration,
      },
    }
  );

  if (data.value) {
    tourList.value = data.value.content;
    totalElements.value = data.value.totalElements;
  }
};

const onSubmit = async () => {
  await fetchTours();
};

const onReset = async (key: string) => {
  switch (key) {
    case "name":
      return (state.name = undefined);
    case "stayType":
      return (state.stayType = undefined);
    case "transferType":
      return (state.transferType = undefined);
    case "tourLevelType":
      return (state.tourLevelType = undefined);
    case "tourType":
      return (state.tourType = undefined);
    case "startDate":
      return (state.startDate = undefined);
    case "duration":
      return (state.duration = undefined);
  }

  await fetchTours();
  console.log("3");
};

await fetchTours();

watch(
  () => state.page,
  async () => await fetchTours()
);

const route = useRoute();
console.log(route.name);

const links = computed(() => [
  { label: "صفحه اصلی", to: "/" },
  { label: "تورها", to: "/tour-list" },
]);
</script>
<style lang="less">
label {
  font-weight: 800;
}
.radio-filed fieldset {
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
}
</style>
