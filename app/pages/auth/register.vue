<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import { z } from "zod";

const schema = z.object({
  username: z.string().min(8, "نام کاربری نامعتبر است"),
  email: z.email("ایمیل نامعتبر است"),
  password: z.string().min(8, "باید حداقل 8 کاراکتر باشد"),
  remember: z.boolean(),
});

type Schema = z.infer<typeof schema>;

const state = reactive({
  username: "",
  email: "",
  password: "",
  remember: false,
});
const loading = ref(false);
async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true;
  await useFetch("/api/v1/auth/register", {
    method: "post",
    body: event.data,
  });
  loading.value = false;
}
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <div>
    <h5 class="my-6 text-xl font-semibold">ثبت نام</h5>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormField label="نام کاربری" name="username">
        <UInput v-model="state.username" />
      </UFormField>

      <UFormField label="ایمیل" name="email">
        <UInput
          v-model="state.email"
          type="email"
          placeholder="name@example.com"
        />
      </UFormField>

      <UFormField label="رمز عبور" name="password">
        <UInput
          v-model="state.password"
          type="password"
          placeholder="رمز عبور:"
        />
      </UFormField>

      <UFormField
        label="شرایط و ضوابط را می‌پذیرم"
        name="acceptCondition"
        class="flex gap-x-4 py-1"
      >
        <UCheckbox v-model="state.remember" />
      </UFormField>

      <UButton
        type="submit"
        block
        class="font-[Vazirmatn] text-md"
        :loading="loading"
      >
        ثبت نام
      </UButton>
      <div>
        حساب کاربری دارید؟
        <UButton to="/auth/login" color="neutral" variant="link">ورود</UButton>
      </div>
    </UForm>
  </div>
</template>
