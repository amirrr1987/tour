<template>
  <div>
    <!-- {{ tokenData }} -->
    <!-- <button @click="getData">refresh</button> -->
  </div>
</template>

<script setup lang="ts">
// import { useLocalStorage } from "@vueuse/core";
import { useRoute } from "vue-router";
import nprogress from "nprogress";
import { useConfigStore } from "~/stores/configStore";
const route = useRoute();
const token = route.query.token as string;

definePageMeta({
  layout: "auth",
});

const router = useRouter();
onMounted(async () => {
  nprogress.start();
  const { data: tokenData } = await useFetch(
    `/api/v1/auth/verify-email/${token}`
  );
  const configStore = useConfigStore();
  // Fix type issue by asserting shape or fallback
  const accessToken = (tokenData.value as { accessToken?: string } | undefined)?.accessToken;
  if (accessToken) {
    configStore.token = accessToken;
  }

  nprogress.done();
  router.push("/");
});
</script>
