<template>
  <div class="border-b py-1 bg-gray-800 text-white">
    <AContainer class="flex justify-between text-xs">
      <div>021-91005711</div>
      <div>021-91005711</div>
    </AContainer>
  </div>
  <nav
    class="sticky top-0 relative z-50 py-4 bg-white shadow-lg"
    @mouseleave="toggle(false)"
  >
    <AContainer class="flex items-center gap-x-4">
      <NuxtLink to="/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8"
          title="Flowbite Logo"
          alt="Flowbite Logo"
        />
      </NuxtLink>
      <ul class="flex-1 flex flex-col md:flex-row font-medium gap-x-8">
        <li @mouseenter="toggle(false)">
          <UButton to="/" variant="link" :padded="false"> صفحه اصلی </UButton>
        </li>
        <li @mouseenter="toggle(true)">
          <UButton to="/" variant="link" :padded="false"> تور‌ها </UButton>
        </li>

        <li @mouseenter="toggle(false)">
          <UButton to="sss" variant="link" :padded="false"> درباره ما </UButton>
        </li>
        <li @mouseenter="toggle(false)">
          <UButton to="/contact-us" variant="link" :padded="false">
            تماس با ما
          </UButton>
        </li>
      </ul>
      <ul class="flex flex-col md:flex-row font-medium gap-x-4">
        <li>
          <UButton to="/auth/login" variant="link">ورود</UButton>
        </li>
        <li>
          <UButton to="/auth/register" variant="soft">ثبت نام</UButton>
        </li>
      </ul>
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
                    @click="toggle(false)"
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
// import gsap from "gsap";
onMounted(() => {
  // gsap.to(".sticky", { y: 0 });
});
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
