<template>
  <section class="py-12">
    <TheContainer class="grid gap-4 grid-cols-12">
      <div class="col-span-12 lg:col-span-4 xl:col-span-2">
        <UCard>
          <UForm
            :schema="schema"
            :state="state"
            class="grid grid-cols-2 md:grid-cols-1 gap-4"
            @submit.prevent="onSubmit"
          >
            <UFormGroup label="جستجو" name="name" :ui="formGroupUi">
              <template #hint>
                <UButton
                  size="2xs"
                  variant="soft"
                  color="gray"
                  icon="tabler:trash"
                  @click="onReset('name')"
                  v-if="state.name"
                />
              </template>
              <UInput
                v-model="state.name"
                class="radio-filed"
                @change="onSubmit"
              />
            </UFormGroup>
            <UFormGroup label="تعداد روز" name="duration" :ui="formGroupUi">
              <template #hint>
                <UButton
                  size="2xs"
                  variant="soft"
                  color="red"
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
            </UFormGroup>
            <UFormGroup label="تاریخ شروع" name="startDate" :ui="formGroupUi">
              <template #hint>
                <UButton
                  size="2xs"
                  variant="soft"
                  color="red"
                  :trailing="true"
                  icon="tabler:trash"
                  @click="onReset('startDate')"
                />
              </template>
              <DatePicker
                v-model:modelValue="state.startDate"
                color="red"
                mode="single"
                @change="onSubmit"
              />
            </UFormGroup>

            <UDivider class="hidden md:flex" />
            <UFormGroup label="نوع تور" name="tourType" :ui="formGroupUi">
              <template #hint>
                <UButton
                  size="2xs"
                  variant="soft"
                  color="red"
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
            </UFormGroup>

            <UDivider class="hidden md:flex" />
            <UFormGroup name="transferType" :ui="formGroupUi">
              <template #hint>
                <UButton
                  size="2xs"
                  variant="soft"
                  color="red"
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
            </UFormGroup>
            <UDivider class="hidden md:flex" />
            <UFormGroup label="محل اقامت" name="stayType" :ui="formGroupUi">
              <template #hint>
                <UButton
                  size="2xs"
                  variant="soft"
                  color="red"
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
            </UFormGroup>
            <!-- <UDivider class="hidden md:flex" /> -->
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
            :tour="tour"
            :key="`tour-${tour.id}`"
          />
        </div>
        <div class="flex justify-center py-4">
          <UPagination
            v-model="state.page"
            :pageCount="state.size"
            :total="totalElements"
          />
        </div>
      </div>
    </TheContainer>
  </section>
</template>
<script setup lang="ts">
import type { TourDTO } from "~/types/TourModel";
import { useRouteQuery } from "@vueuse/router";
import { useRoute } from "vue-router";
import {
  TourLevelTypeEnum,
  TourLevelTypeEnumList,
  TourTypeEnum,
  TourTypeEnumList,
  MealTypeEnum,
  TransferTypeEnum,
  TransferTypeEnumList,
  StayTypeEnum,
  StayTypeEnumList,
  DurationList,
} from "~/enums";
import DatePicker from "@alireza-ab/vue3-persian-datepicker";

import { object, string, number, type InferType } from "yup";

definePageMeta({
  layout: "filter",
});
const schema = object({
  tourLevelType: string(),
  tourType: string(),
  mealType: string(),
  transferType: string(),
  stayType: string(),
  page: number(),
  size: number(),
});

type Schema = InferType<typeof schema>;

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

const tourList = ref<TourDTO.Content[]>([]);
const totalElements = ref(0);

const fetchTours = async () => {
  const { data } = await useFetch<TourDTO.Search.Response>(
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
  console.log("1");

  switch (key) {
    case "name":
      return (state.name = undefined);
    case "duration":
      return (state.duration = undefined);
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
    default:
      break;
  }
  console.log("2");

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

const formGroupUi = {
  label: { base: "w-full mb-2 text-gray-400 dark:text-gray-300" },
};
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
