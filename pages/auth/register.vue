<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormGroup label="email" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Username" name="username">
      <UInput v-model="state.username" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton type="submit" block> ورود </UButton>
  </UForm>
</template>

<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

definePageMeta({
  layout: "auth",
});
const schema = object({
  username: string().required("Required"),
  password: string().required("Required"),
  email: string().email().required("Required"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  username: "amirrr1",
  password: "QWqw12!@",
  email: "gzx45633@tccho.com",
});


async function onSubmit(event: FormSubmitEvent<Schema>) {
  await useFetch("/api/v1/auth/register", {
    method: "post",
    body: state,
  });
}
</script>
