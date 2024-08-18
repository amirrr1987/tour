<script setup lang="ts">
const inputUi = {
  base: "md:w-96",
};

const buttonGroupUi = {
  rounded: "rounded-xl",
  shadow: "shadow-xl",
};

const city = ref("");

const router = useRouter();
const findByData = () => {
  router.push(`/tour/?city=${city.value}`);
};
const cities = [
  "خوی",
  "Arlene Mccoy",
  "Devon Webb",
  "Tom Cook",
  "Tanya Fox",
  "Hellen Schmidt",
  "Caroline Schultz",
  "Mason Heaney",
  "Claudie Smitham",
  "Emil Schaefer",
];
</script>

<template>
  <header class="py-12 flex">
    <AContainer class="flex justify-center items-center">
      <UButtonGroup size="xl" orientation="horizontal" :ui="buttonGroupUi">
        <UInputMenu
          :ui="inputUi"
          v-model="city"
          :options="cities"
          @keyup.enter="findByData"
        />

        <!-- <UButton icon="tabler:click" color="green" /> -->
        <!-- <UButton icon="tabler:x" color="green" /> -->
        <UButton
          icon="tabler:search"
          color="green"
          label="جستجو"
          @click="findByData"
        />
      </UButtonGroup>
    </AContainer>
  </header>

  <section
    class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply"
  >
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <h1
        class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
      >
        We invest in the world’s potential
      </h1>
      <p
        class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"
      >
        Here at Flowbite we focus on markets where technology, innovation, and
        capital can unlock long-term value and drive economic growth.
      </p>
      <div
        class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"
      >
        <a
          href="#"
          class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Get started
          <svg
            class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <a
          href="#"
          class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
        >
          Learn more
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
header {
  background-image: url("/public/3d-render-view-beach-summer-holidays-concept_56345-794.jpg");
  height: 30rem;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
