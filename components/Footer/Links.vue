<script setup lang="ts">
const size = 'basis-1/4'
</script>
<template>
  <div>
    <h4>با تور‌کد بیشتر آشنا شوید</h4>
    <FooterComponentsDivider />

    <ul class="flex gap-4 flex-wrap">
      <li :class="size">
        <a href="#" class="text-sm font-normal text-gray-500">درباره ما</a>
      </li>
      <li :class="size">
        <a href="#" class="text-sm font-normal text-gray-500">تماس با ما</a>
      </li>
      <li :class="size">
        <a href="#" class="text-sm font-normal text-gray-500">سوالات متداول</a>
      </li>
      <li :class="size">
        <a href="#" class="text-sm font-normal text-gray-500">قوانین و شرایط</a>
      </li>
      <li :class="size">
        <a href="#" class="text-sm font-normal text-gray-500">حریم خصوصی</a>
      </li>
      <li :class="size">
        <a href="#" class="text-sm font-normal text-gray-500">شکایات</a>
      </li>
      <li :class="size">
        <a href="#" class="text-sm font-normal text-gray-500"
          >دانلود اپلیکیشن</a
        >
      </li>
      <li :class="size">
        <a href="#" class="text-sm font-normal text-gray-500">اشتراک یوتوپین</a>
      </li>
      <li :class="size">
        <a href="#" class="text-sm font-normal text-gray-500">بلاگ</a>
      </li>
    </ul>
  </div>
</template>
