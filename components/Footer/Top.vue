<template>
  <div class="py-12">
    <TheContainer class="grid gap-8 md:grid-cols-12">
      <NuxtLink to="/" class="flex md:col-span-4">
        <NuxtImg
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8 me-3"
          alt="FlowBite Logo"
        />
        <span class="text-2xl font-semibold whitespace-nowrap dark:text-white"
          >فلو بایت</span
        >
      </NuxtLink>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:col-span-8">
        <div v-for="item in 4">
          <h2
            class="mb-6 text-sm font-medium text-gray-900 uppercase dark:text-white"
          >
            منابع
          </h2>
          <ul
            class="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-y-2"
          >
            <li v-for="single in 4">
              <NuxtLink to="https://flowbite.com/" class="hover:underline">
                فلو بایت
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </TheContainer>
  </div>
</template>
