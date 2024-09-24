<template>
  <section class="py-12">
    <TheContainer class="grid gap-4 grid-cols-12">
      <div class="lg:col-span-4 xl:col-span-2">
        <!-- <TourListFilter  /> -->
        <UCard>
          <UForm
            :schema="schema"
            :state="state"
            class="space-y-4"
            @submit.prevent="onSubmit"
          >
            <UFormGroup
              label="درجه سختی"
              name="tourLevelType"
              :ui="formGroupUi"
            >
              <URadioGroup
                v-model="state.tourLevelType"
                :options="TourLevelTypeEnumList"
                class="radio-filed"
              />
            </UFormGroup>
            <UDivider />
            <UFormGroup label="نوع تور" name="tourType" :ui="formGroupUi">
              <URadioGroup
                v-model="state.tourType"
                :options="TourTypeEnumList"
                class="radio-filed"
              />
            </UFormGroup>

            <UDivider />
            <UFormGroup name="transferType" :ui="formGroupUi">
              <template #label>
                <UIcon name="tabler:car" />
                وسیله نقلیه
              </template>
              <URadioGroup
                v-model="state.transferType"
                :options="TransferTypeEnumList"
                class="radio-filed"
              />
            </UFormGroup>
            <UDivider />
            <UFormGroup label="محل اقامت" name="stayType" :ui="formGroupUi">
              <URadioGroup
                v-model="state.stayType"
                :options="StayTypeEnumList"
                class="radio-filed"
              />
            </UFormGroup>
            <UDivider />
            <div class="flex gap-x-4">
              <UButton size="xs" type="submit" icon="">اعمال فیلتر</UButton>
              <UButton size="xs" type="" variant="ghost" @click="onReset"
                >پاک کردن</UButton
              >
            </div>
          </UForm>
        </UCard>
      </div>
      <div class="lg:col-span-8 xl:col-span-10">
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
        <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <TourListCard v-for="tour in tourList" :tour="tour" />
        </div>
        <div class="flex justify-center py-4">
          {{ state.page }}
          <UPagination
            v-model="state.page"
            :pageCount="state.size"
            :total="totalElements"
            @nextButton="onSubmit"
            @prevButton="onSubmit"
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
  MealTypeEnumList,
  TransferTypeEnum,
  TransferTypeEnumList,
  StayTypeEnum,
  StayTypeEnumList,
} from "~/enums";

import { object, string, number, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

definePageMeta({
  layout: "filter",
  name: "تور‌ها",
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
const page = ref(1);
const currentPage = computed(() => {
  return useRouteQuery<number>("page", page.value).value;
});
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
  page: useRouteQuery<number>("page", 1),
  size: useRouteQuery<number>("size", 5),
});
const tourList = ref<TourDTO.Content[]>([]);

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  console.log(state.page);
  console.log(state.size);
  const { data } = await useFetch<TourDTO.Search.Response>(
    // "http://10.0.202.34:8081/tour/getAll"

    "http://10.0.202.34:8081/tour/search",
    {
      method: "POST",
      body: {
        stayTypeEnum: state.stayType,
        transferTypeEnum: state.transferType,
        mealTypeEnum: state.mealType,
        tourLevelTypeEnum: state.tourLevelType,
        tourTypeEnum: state.tourType,
        page: currentPage.value,
        size: state.size,
      },
    }
  );
  if (data.value) {
    console.log("🚀 ~ onSubmit ~ data.value:", data.value);
    tourList.value = await data.value.content;
    totalElements.value = data.value?.totalElements + 1;
    // totalElements.value = data.value?.totalElements + 1;
  }
};

const onReset = async (e: any) => {
  state.tourLevelType = undefined;
  state.tourType = undefined;
  state.mealType = undefined;
  state.transferType = undefined;
  state.stayType = undefined;
  await onSubmit(e);
};
watch(
  () => state,
  async (e) => {
    console.log(state.page);
    console.log(state.size);
    const { data } = await useFetch<TourDTO.Search.Response>(
      // "http://10.0.202.34:8081/tour/getAll"

      "http://10.0.202.34:8081/tour/search",
      {
        method: "POST",
        body: {
          stayTypeEnum: state.stayType,
          transferTypeEnum: state.transferType,
          mealTypeEnum: state.mealType,
          tourLevelTypeEnum: state.tourLevelType,
          tourTypeEnum: state.tourType,
          page: state.page - 1,
          size: state.size,
        },
      }
    );
    if (data.value) {
      console.log("🚀 ~ onSubmit ~ data.value:", data.value);
      tourList.value = await data.value.content;
      console.log(state.page);
      
      totalElements.value = await data.value?.totalElements + 1;
      // totalElements.value = data.value?.totalElements + 1;
    }
  }
);

const { data } = await useFetch<TourDTO.Search.Response>(
  "http://10.0.202.34:8081/tour/search",
  {
    method: "POST",
    body: {
      stayTypeEnum: state.stayType,
      transferTypeEnum: state.transferType,
      mealTypeEnum: state.mealType,
      tourLevelTypeEnum: state.tourLevelType,
      tourTypeEnum: state.tourType,
      page: state.page - 1,
      size: state.size,
    },
  }
);
const totalElements = ref(0);

if (data.value) {
  tourList.value = await data.value.content;
  totalElements.value = data.value?.totalElements + 1;
}
const route = useRoute();

const links = computed(() => {
  let list = [
    {
      label: "صفحه اصلی",
      to: "/",
    },
  ];
  route.matched.forEach((item) => {
    list.push({ label: String(item.meta.name), to: item.path });
  });
  return list;
});

const formGroupUi = {
  label: { base: "mb-2 text-gray-400 dark:text-gray-300" },
};
</script>
<style>
label {
  font-weight: 800;
}
.radio-filed fieldset {
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
}
</style>
