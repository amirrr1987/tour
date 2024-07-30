<template>
  <nav>
    <AContainer>
      <ul>
        <li>
          <NuxtLink to="/">home</NuxtLink>
        </li>
      </ul>
    </AContainer>
  </nav>

  <main>
    <section>
      <AContainer>
        <AModal />
        <div ref="box" class="box">Animate me!</div>
      </AContainer>
    </section>
  </main>

  <footer>
    <ADivider haveContainer />
    <div class="text-center text-sm">
      تمامی حقوق این وب‌سایت متعلق به شرکت وندا رایمند شریف است
    </div>
  </footer>
</template>
<script setup lang="ts">
import { gsap } from "gsap";
const box = ref(null);

onMounted(() => {
  gsap.to(box.value, { x: 100, duration: 1 });
});
</script>
<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
