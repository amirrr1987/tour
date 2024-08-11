<template>
  <div class="border-b py-1 bg-gray-800 text-white">
    <AContainer class="flex justify-between text-xs">
      <div>021-91005711</div>
      <div>021-91005711</div>
    </AContainer>
  </div>
  <nav
    class="z-50 sticky top-0 relative bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 p-4 shadow-lg"
    @mouseleave="toggle(false)"
  >
    <AContainer
      class="flex flex-wrap justify-between items-center mx-auto container px-4"
    >
      <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >tour</span
        >
      </NuxtLink>
      <button
        data-collapse-toggle="mega-menu-full"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mega-menu-full"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        id="mega-menu-full"
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      >
        <ul
          class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse"
        >
          <li>
            <NuxtLink
              @mouseenter="toggle(false)"
              to="/"
              class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
            >
              صفحه اصلی
            </NuxtLink>
          </li>
          <li @mouseenter="toggle(true)">
            <button
              data-collapse-toggle="mega-menu-full-dropdown"
              class="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            >
              تور‌ها
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
          </li>

          <li>
            <NuxtLink
              @mouseenter="toggle(false)"
              to="/contact"
              class="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
            >
              درباره ما
            </NuxtLink>
          </li>
        </ul>
      </div>
    </AContainer>

    <Transition>
      <div
        v-show="isShow"
        @mouseenter="toggle(true)"
        class="absolute shadow-lg inset-x-0 top-14 mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600"
      >
        <AContainer class="flex py-4 gap-4">
          <div
            class="col-span-3 grid grid-cols-5 gap-x-16 gap-y-4 flex-1 overflow-y-auto overflow-x-hidden h-96"
          >
            <div v-for="si in 20">
              <div class="flex gap-x-2 items-center">
                <!-- <img src="https://placehold.co/60x20" alt="" /> -->
                <Icon name="iconoir:sea-and-sun" />
                <h3 class="font-medium">عنوان دسته {{ si }}</h3>
              </div>
              <UDivider class="mt-2 mb-3" />
              <ul>
                <li
                  class="group mb-1 ease-in-out duration-500 hover:-translate-x-2 flex items-center gap-x-1 py-2"
                  v-for="item in 5"
                >
                  <NuxtLink
                    to="/"
                    class="text-sm hover:text-blue-500 text-gray-400"
                  >
                    دسته {{ item }}
                  </NuxtLink>
                  <Icon
                    name="tabler:arrow-left"
                    class="hidden text-sm group-hover:block group-hover:text-blue-500"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div class="col-span-2">
            <img
              class="w-full h-full"
              src="https://placehold.co/300x300"
              title="hjkj"
              alt="jhhj"
            />
          </div>
        </AContainer>
      </div>
    </Transition>
  </nav>
</template>
<script setup lang="ts">
const isShow = ref(false);
const toggle = (status: boolean) => {
  isShow.value = status;
};
</script>
<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
