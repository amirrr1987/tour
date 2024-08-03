<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import { gsap } from "gsap";

definePageMeta({
  layout: "auth",
});
const schema = object({
  username: string().required("Required"),
  password: string().required("Required"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  username: undefined,
  password: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
}
const formRef = ref(null);

onMounted(() => {
  gsap.from(formRef.value, { y: "-100vh", duration: 1, opacity: 0 });
  gsap.to(formRef.value, { y: 0, duration: 1, opacity: 1 });
});
</script>

<template>
  <div ref="formRef">
    <UForm
      :schema="schema"
      :state="state"
      class="space-y-4 w-100"
      @submit="onSubmit"
    >
      <UFormGroup label="Username" name="username">
        <UInput v-model="state.username" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormGroup>

      <UButton type="submit"> Submit </UButton>
    </UForm>
  </div>
</template>
