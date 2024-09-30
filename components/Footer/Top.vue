<template>
  <div class="py-12">
    <TheContainer class="grid gap-8 md:grid-cols-12">
      <NuxtLink to="/" class="flex md:col-span-2 items-center">
        <NuxtImg
          src="assets/img/logo.png"
          class="h-16 me-3"
          alt="FlowBite Logo"
        />
        <span class="text-2xl font-semibold whitespace-nowrap text-gray-500 dark:text-white">
          تورکده
        </span>
      </NuxtLink>
      <div class="grid grid-cols-2 md:grid-cols-6 gap-8 md:col-span-8">
        <div v-for="item in 6">
          <h2
            class="mb-6 text-sm font-medium text-gray-900 uppercase dark:text-white"
          >
            منابع
          </h2>
          <ul
            class="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-y-2"
          >
            <li v-for="single in 6">
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
