<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
import {definePageMeta} from "#imports";

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
      .min(8, 'Must be at least 8 characters')
      .required('Required')
})

type Schema = InferType<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
}
definePageMeta({
  layout: 'auth'
})
</script>

<template>
  <div class="">
    <img src="https://nuxtjs.ir/logos/nuxt-icon-white.png" title="dog" alt="dog" class="rounded-full w-32 mx-auto mb-4">
    <h4 class="text-center mb-4">صفحه فراموشی گذرواژه</h4>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit" autocomplete="off">
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormGroup>

      <UButton type="submit" block>
        ارسال
      </UButton>
    </UForm>
  </div>
</template>

