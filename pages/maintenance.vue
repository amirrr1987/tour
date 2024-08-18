<template>
  <main
    class="h-screen flex items-center justify-center bg-[url('/images/bg/cta.jpg')] before:content-[''] before:inset-0 before:absolute before:bg-black before:opacity-50"
  >
    <div class="absolute inset-0 bg-black/50" />
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"
    />
    <section class="absolute flex flex-col items-center justify-center">
      <img src="/images/images-logo-light.png" class="mx-auto" alt="" />
      <h1 class="text-white mb-6 mt-8 md:text-5xl text-3xl font-bold">
        به زودی برمی‌گردیم...
      </h1>
      <p class="text-white/50 text-lg max-w-xl mx-auto">
        با Travosy شروع به کار کنید، جایی که همه چیزهایی را که برای ایجاد آگاهی،
        جلب ترافیک، و ارتباط نیاز دارید، فراهم می‌کند.
      </p>
      <div>
        <div>333</div>
        <div>دقیقه</div>
      </div>
      <UForm :state="{}" class="flex max-w-xl mx-auto">
        <UFormGroup class="flex-1" name="email">
          <UButtonGroup :ui="buttonGroupUiConfig">
            <UInput
              type="email"
              placeholder="ایمیل خود را وارد کنید..."
              :ui="inputUiConfig"
            />
            <UButton to="/" color="rose" variant="solid" :ui="buttonUiConfig">
              همین حالا مشترک شوید
            </UButton>
          </UButtonGroup>
        </UFormGroup>
      </UForm>
    </section>
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "blank",
});

const inputUiConfig = {
  base: "h-12 flex-1",
};

const buttonUiConfig = {
  base: "h-12",
};

const buttonGroupUiConfig = {
  rounded: "rounded-full",
};
</script>
<style>
/* input[type="email"] {
  padding-block: 0;
} */
</style>
