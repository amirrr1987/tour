<script setup lang="ts"></script>

<template>
  <section
    class="relative table w-full items-center py-36 bg-[url('/images/bg/cta.jpg')] bg-top bg-no-repeat bg-cover"
  >
    <div
      class="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"
    ></div>
    <div class="container relative">
      <div class="grid grid-cols-1 pb-8 text-center mt-10">
        <h3
          class="text-4xl leading-normal tracking-wider font-semibold text-white"
        >
          Travosy Travel Agency
        </h3>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->

    <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
      <ul class="tracking-[0.5px] mb-0 inline-block">
        <li
          class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"
        >
          <NuxtLink to="/">تورکده</NuxtLink>
        </li>
        <li
          class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"
        >
          <i class="mdi mdi-chevron-right"></i>
          <Icon name="tabler:slash" />
        </li>
        <li
          class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
          aria-current="page"
        >
          {{ props.path }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from "vue";
interface Props {
  path: string;
}
// Define the props with default values
const props = withDefaults(
  defineProps<Props>(), // Define the type of the props
  { path: "" } // Set the default value for path
);
</script>
