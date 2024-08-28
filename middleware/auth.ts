import { useLocalStorage } from "@vueuse/core";
export default defineNuxtRouteMiddleware((to, from) => {
  const configStore = useConfigStore();

  if (!configStore.token) {
    return navigateTo("/auth/login");
  }
});
