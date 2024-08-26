import { useLocalStorage } from "@vueuse/core";

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useLocalStorage("accessToken", "");
  console.log("🚀 ~ defineNuxtRouteMiddleware ~ token:", token.value);

  if (!token.value) {
    return navigateTo("/auth/login");
  }
});
