<script setup lang="ts">
import { boolean, object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const schema = object({
  username: string().min(8, "نام کاربری نامعتبر است").required("الزامی است"),
  email: string().email("ایمیل نامعتبر است").required("الزامی است"),
  password: string().min(8, "باید حداقل 8 کاراکتر باشد").required("الزامی است"),
  remember: boolean(),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  username: undefined,
  email: undefined,
  password: undefined,
  remember: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  await useFetch("/api/v1/auth/register", {
    method: "post",
    body: event.data,
  });
}
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <UCard class="w-[400px]">
    <img class="mx-auto" src="/images/logo-icon.png" title="" alt="" />
    <h5 class="my-6 text-xl font-semibold">ورود</h5>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="نام کاربری" name="username">
        <UInput v-model="state.username" />
      </UFormGroup>

      <UFormGroup label="ایمیل" name="email">
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
        label="شرایط و ضوابط را می‌پذیرم"
        name="acceptCondition"
        class="flex gap-x-4 py-1"
      >
        <UCheckbox v-model="state.remember" />
      </UFormGroup>

      <UButton type="submit" block class="font-[Vazirmatn] text-md">
        ثبت نام
      </UButton>
      <div>
        حساب کاربری دارید؟
        <UButton to="/auth/login" color="gray" variant="link">ورود</UButton>
      </div>
    </UForm>
  </UCard>
</template>
