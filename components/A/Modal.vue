<script setup lang="ts">
interface Props {
  title: string;
}
const props = withDefaults(defineProps<Props>(), {
  title: "",
});
</script>

<template>
  <div
    class="absolute inset-0 bg-gray-500/50 flex justify-center items-center z-50"
  >
    <div class="bg-white w-200 aspect-1.7 rounded flex flex-col">
      <div class="flex justify-between p-4">
        {{ props.title }}
<button class="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm text-white dark:text-gray-900 bg-green-500 hover:bg-green-600 disabled:bg-green-500 dark:bg-green-400 dark:hover:bg-green-500 dark:disabled:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 dark:focus-visible:outline-green-400 inline-flex items-center">dfgdfgdg</button>
        <button
          type="button"
          class="text-blue-700 border-none border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
        >
          <Icon name="tabler:x" style="color: black" />
        </button>
      </div>
      <div class="flex-1">
        <slot />
      </div>
      <div class="flex justify-start gap-x-4 p-4">
        <button
          type="button"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Blue
        </button>

        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Default
        </button>

        <button
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Alternative
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
