<script setup lang="ts">
import { boolean, object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const schema = object({
  email: string().email("ایمیل نامعتبر است").required("الزامی است"),
  password: string().min(8, "باید حداقل 8 کاراکتر باشد").required("الزامی است"),
  remember: boolean(),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
  remember: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
}
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <h5 class="my-6 text-xl font-semibold">فراموشی کلمه عبور</h5>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup v-slot="{ error }" label="ایمیل" name="email">
      <UInput
        v-model="state.email"
        type="email"
        placeholder="name@example.com"
      />
    </UFormGroup>

    <UFormGroup label="رمز عبور" name="password">
      <UInput
        v-model="state.password"
        type="password"
        placeholder="رمز عبور:"
      />
    </UFormGroup>

    <UFormGroup
      label="مرا به خاطر بسپار"
      name="remember"
      class="flex gap-x-4 py-1"
    >
      <UCheckbox v-model="state.remember" />
    </UFormGroup>

    <UButton type="submit" block class="font-[Vazirmatn] text-md">
      ورود
    </UButton>

    <UButton to="/auth/register" color="gray" variant="link">ثبت نام</UButton>
    <UButton to="" color="gray" variant="link">فراموشی رمز عبور</UButton>
  </UForm>
</template>
