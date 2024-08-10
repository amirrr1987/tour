<template>
  {{categoies}}
  <section class="py-12">
    <div
      class="flex flex-col gap-y-8 md:flex-row md:justify-between md:mx-auto md:max-w-screen-md md:px-6"
    >
      <div class="text-center" v-for="item in 4">
        <img
          class="mx-auto mb-4"
          src="https://www.shab.ir/_next/static/media/Shield.e606ec5c.svg?w=32&q=75"
          alt=""
        />
        <!-- <span
          class="bg-red-500 text-white rounded-lg w-12 h-12 inline-flex justify-center items-center mb-4"
        >
          <Icon name="tabler:x" class="text-3xl" />
        </span> -->
        <div>بیمه رایگان اقامت</div>
      </div>
    </div>
  </section>
  <section class="py-12">
    <AContainer>
      <div class="grid grid-cols-[max-content,1fr] gap-x-4 mb-4">
        <h4>ایران‌گردی با یوتوپین</h4>
        <UDivider type="dotted" size="xl" :ui="uDivider" />
      </div>
      <Swapper />
    </AContainer>
  </section>
  <Banner />
  <section class="py-12">
    <AContainer>
      <div class="grid grid-cols-[max-content,1fr] gap-x-4 mb-4">
        <h4>ایران‌گردی با یوتوپین</h4>
        <UDivider type="dotted" size="xl" :ui="uDivider" />
      </div>
      <Swapper />
    </AContainer>
  </section>
  <Banner />

  <section class="py-12">
    <AContainer>
      <div class="grid grid-cols-[max-content,1fr] gap-x-4 mb-4">
        <h4>ایران‌گردی با یوتوپین</h4>
        <UDivider type="dotted" size="xl" :ui="uDivider" />
      </div>
      <Swapper />
    </AContainer>
  </section>
</template>
<script setup lang="ts">
const token = useLocalStorage('tokenData', '2');
console.log("tokenData")
console.log(token)
console.log("tokenData")
console.log(token.value)
const {data: categoies}  = await useFetch(`/api/v1/category/gettAll/${token.value.accessToken}`, )
console.log(categoies)
const uDivider = {
  wrapper: {
    base: "flex items-center align-center text-center",
    horizontal: "w-full flex-row",
    vertical: "flex-col",
  },
  container: {
    base: "font-medium text-gray-700 dark:text-gray-200 flex",
    horizontal: "mx-3 whitespace-nowrap",
    vertical: "my-2",
  },
  border: {
    base: "flex border-gray-200 dark:border-gray-800",
    horizontal: "w-full",
    vertical: "h-full",
    size: {
      horizontal: {
        "2xs": "border-t",
        xs: "border-t-[2px]",
        sm: "border-t-[3px]",
        md: "border-t-[4px]",
        lg: "border-t-[5px]",
        xl: "border-t-[6px]",
      },
      vertical: {
        "2xs": "border-s",
        xs: "border-s-[2px]",
        sm: "border-s-[3px]",
        md: "border-s-[4px]",
        lg: "border-s-[5px]",
        xl: "border-s-[6px]",
      },
    },
    type: {
      solid: "border-solid",
      dotted: "border-dotted",
      dashed: "border-dashed",
    },
  },
  icon: {
    base: "flex-shrink-0 w-5 h-5",
  },
  avatar: {
    base: "flex-shrink-0",
    size: "2xs",
  },
  label: "text-sm",
  default: {
    size: "2xs",
  },
};
</script>
