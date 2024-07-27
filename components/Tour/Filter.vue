<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const schema = object({
  email: string().email("Invalid email").required("Required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
}

const search = useRouteQuery("search", "");
const priceFrom: Ref<number> = useRouteQuery("priceFrom", 0);
const priceTo: Ref<number> = useRouteQuery("priceTo", 0);

const resetQueries = () => {
  search.value = "";
  priceFrom.value = 0;
  priceTo.value = 0;
};
const queryCounter = computed(() => {
  let counter = 0;
  if (search.value) counter += 1;
  if (priceFrom.value) counter += 1;
  if (priceTo.value) counter += 1;
  return counter;
});
const value2 = ref<[number, number]>([0, 10000000]);


const afterChange = () => {
  priceFrom.value = value2.value[0];
  priceTo.value = value2.value[1];
};
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UBadge color="purple">
      <UButton type="reset" variant="success" @click="resetQueries">
        پاک کردن
      </UButton>
      {{ queryCounter }}</UBadge
    >
    <UDivider />
    <UButton type="submit" block> فیلتر کردن </UButton>
    <UDivider />
    <div class="flex gap-x-4">
      <UFormGroup label="قیمت تا" name="priceTo">
        <UInput type="number" v-model.number="priceTo" />
      </UFormGroup>
      <UFormGroup label="قیمت از" name="priceFrom">
        <UInput type="number" v-model.number="priceFrom" />
      </UFormGroup>

    </div>
    <a-slider
      :step="10000"
      v-model:value="value2"
      range
      :max="10000000"
      @afterChange="afterChange"
    />
    <UFormGroup label="Search" name="search">
      <UInput v-model="search" placeholder="Search..." />
    </UFormGroup>
  </UForm>
</template>
