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

definePageMeta({
  layout: "auth",
});
onMounted(async () => {
  nprogress.start();
  const { data: tokenData } = await useFetch(
    `/api/v1/auth/verify-email/${token}`
  );
  useLocalStorage("accessToken", tokenData.value?.accessToken);
  nprogress.done();
  useRouter().push("/");
});
</script>
