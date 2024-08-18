<script setup lang="ts"></script>

<template>
  <section class="relative bg-[url('/images/bg/6.jpg')] py-36 bg-cover">
    <div class="absolute inset-0 bg-slate-900/40"></div>
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-12 md:grid-cols-2 items-center gap-6">
        <div class="lg:col-span-7">
          <h5 class="text-3xl font-dancing text-white">Find Your Ideal Stay</h5>
          <h4
            class="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5"
          >
            Where Do You <br />
            Want To Go?
          </h4>
          <p class="text-white/70 text-xl max-w-xl">
            Planning for a trip? We will organize your trip with the best places
            and within best budget!
          </p>

          <div class="mt-6">
            <a
              href=""
              class="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md"
              >View Packages</a
            >
            <a
              href="#!"
              data-type="youtube"
              data-id="S_CGed6E610"
              class="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-red-500 bg-red-500 text-white ms-1 lightbox"
              ><i data-feather="video" class="h-4 w-4"></i></a
            ><span class="font-semibold ms-1 align-middle"></span>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div
            class="bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-800 p-6 z-10 relative lg:ms-10"
          >
            <h4 class="mb-5 text-2xl font-semibold">
              Search Your Destinations
            </h4>
            <UForm>
              <UFormGroup label="Search" class="mb-4">
                <UInput placeholder="Search" />
              </UFormGroup>
              <UFormGroup label="Select Your Date" class="mb-4">
                <UInput type="date" placeholder="Select Your Date" />
              </UFormGroup>
              <UFormGroup label="Select Your Date" class="mb-4">
                <UInput type="date" placeholder="Select Your Date" />
              </UFormGroup>
              <UButton block>Search</UButton>
            </UForm>
          </div>
        </div>
      </div>
    </div>
    <UButton
      variant="soft"
      icon="radix-icons:arrow-down"
      class="absolute inset-x-0 mx-auto w-max h-auto -bottom-4 z-50"
      :ui="{ rounded: 'rounded-full' }"
    />
    <div
      class="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900"
    >
      <svg
        class="w-full h-auto scale-[2.0] origin-top"
        viewBox="0 0 2880 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  </section>
</template>

<style scoped></style>
