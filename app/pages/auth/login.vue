<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import { z } from "zod";
import { useConfigStore } from "~/stores/config.store"; // Update the path as needed

const schema = z.object({
  username: z.string(),
  password: z.string().min(8, "باید حداقل 8 کاراکتر باشد"),
  remember: z.boolean(),
});

type Schema = z.infer<typeof schema>;

const state = reactive({
  username: "fwn01411@zccck.com",
  password: "fwn01411@zccck.com",
  remember: false,
});
const router = useRouter();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  const { data: tokenData } = await useFetch<{ accessToken?: string }>("/api/v1/auth/login", {
    method: "post",
    body: event.data,
  });
  // Ensure useConfigStore is imported

  const configStore = useConfigStore();
  // Assign token or empty string if not available, ensuring correct typing
  configStore.token = tokenData.value?.accessToken ?? "";
  router.push("/");
}
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <div>
    <h5 class="my-6 text-xl font-semibold">ورود</h5>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormField label="نام کاربری" name="username">
        <UInput v-model="state.username" type="text" />
      </UFormField>

      <UFormField label="رمز عبور" name="password">
        <UInput
          v-model="state.password"
          type="password"
          placeholder="رمز عبور:"
        />
      </UFormField>

      <UFormField
        label="مرا به خاطر بسپار"
        name="remember"
        class="flex gap-x-4 py-1"
      >
        <UCheckbox v-model="state.remember" />
      </UFormField>

      <UButton type="submit" block class="font-[Vazirmatn] text-md">
        ورود
      </UButton>
      <div class="flex justify-center gap-4 pt-8">
        <UButton to="/auth/register" color="neutral" variant="link"
          >ثبت نام</UButton
        >
        <UButton to="/auth/forget" color="neutral" variant="link">
          فراموشی رمز عبور
        </UButton>
      </div>
    </UForm>
  </div>
</template>
