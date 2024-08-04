<template>
  <div class="auth h-screen flex items-center justify-center">
    <div ref="formRef" class="bg-white p-4 rounded shadow  w-[30rem]">
      <img class="mx-auto" src="https://placehold.co/200x200/red/white" alt="" />
      <h4 class="mt-4 mb-8">صفحه ورود</h4>
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import { gsap } from "gsap";

const formRef = ref(null);

onMounted(() => {
  gsap.from(formRef.value, { y: "-100vh", duration: 1, opacity: 0 });
  gsap.to(formRef.value, { y: 0, duration: 1, opacity: 1 });
});
</script>
<style>
.auth {
  background-image: url("/public/wooden-bridge-koh-nangyuan-island-surat-thani-thailand.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
