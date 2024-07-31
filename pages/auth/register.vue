<!-- <template>
  <div class="flex justify-center items-center h-screen">
    <form class="w-100" @submit="register" ref="formRef">
      <img src="" alt="" />
      <div class="mb-5">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your Username</label
        >
        <input
          type="text"
          id="username"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
          v-model="state.username"
        />
      </div>
      <div class="mb-5">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your email</label
        >
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
          v-model="state.email"
        />
      </div>
      <div class="mb-5">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your password</label
        >
        <input
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          v-model="state.password"
        />
      </div>

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Register
      </button>
    </form>
  </div>
</template> -->
<!-- <script setup lang="ts">
import { gsap } from "gsap";

const state = reactive({
  username: "",
  password: "",
  email: "",
});
const register = async () => {
  await useFetch("http://10.0.202.34:8080/api/auth/register", {
    method: "post",
    body: state,
  });
};
const formRef = ref(null);

onMounted(() => {
  gsap.from(formRef.value, { y: "-100vh", duration: 1, opacity: 0 });
  gsap.to(formRef.value, { y: 0, duration: 1, opacity: 1 });
});
</script> -->

<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import { gsap } from "gsap";

const schema = object({
  username: string().required("Required"),
  password: string().required("Required"),
  email: string().email().required("Required"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  username: "",
  password: "",
  email: "",
});
const register = async () => {
  await useFetch("http://10.0.202.34:8080/api/auth/register", {
    method: "post",
    body: state,
  });
};

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
  register();
}
const formRef = ref(null);

onMounted(() => {
  gsap.from(formRef.value, { y: "-100vh", duration: 1, opacity: 0 });
  gsap.to(formRef.value, { y: 0, duration: 1, opacity: 1 });
});
</script>

<template>
  <div class="h-screen flex items-center justify-center" ref="formRef">
    <UForm
      :schema="schema"
      :state="state"
      class="space-y-4 w-100"
      @submit.prevent="onSubmit"
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

      <UButton type="submit"> Submit </UButton>
    </UForm>
  </div>
</template>
