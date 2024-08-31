<script setup lang="ts">
import { boolean, object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import { useLocalStorage } from "@vueuse/core";

const schema = object({
  username: string().required("الزامی است"),
  password: string().min(8, "باید حداقل 8 کاراکتر باشد").required("الزامی است"),
  remember: boolean(),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  username: "test1",
  password: "test-password",
});
const router = useRouter();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  const { data: tokenData } = await useFetch("/api/v1/auth/login", {
    method: "post",
    body: event.data,
  });
  const configStore = useConfigStore();
  configStore.token = tokenData.value?.accessToken;
  router.push("/");
}
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <h5 class="my-6 text-xl font-semibold">ورود</h5>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup v-slot="{ error }" label="نام کاربری" name="username">
      <UInput v-model="state.username" type="text" />
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
    <div class="flex justify-center gap-4 pt-8">
      <UButton to="/auth/register" color="gray" variant="link">ثبت نام</UButton>
      <UButton to="/auth/forget" color="gray" variant="link">
        فراموشی رمز عبور
      </UButton>
    </div>
  </UForm>
</template>
