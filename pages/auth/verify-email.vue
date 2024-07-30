<template>
  <div>
    <!-- {{ tokenData }} -->
    <!-- <button @click="getData">refresh</button> -->
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import nprogress from "nprogress";
const route = useRoute();
const token = route.query.token as string;


onMounted(async () => {
  nprogress.start();

  console.log("🚀 ~ onMounted ~ nprogress.start():", nprogress.start())
  const { data: tokenData, refresh } = await useFetch(`/api/v1/auth/${token}`);
  const x = useLocalStorage("tokenData", tokenData.value)
  nprogress.done();
  useRouter().push('/')
  
})


// const getData = async () => {
//   try {
//     await refresh();
//   } catch (error) {
//     console.log("🚀 ~ getData ~ error:", error);
//   }
// };
</script>
