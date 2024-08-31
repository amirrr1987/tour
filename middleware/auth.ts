export default defineNuxtRouteMiddleware((to, from) => {
  const configStore = useConfigStore();
  if (configStore.token.length < 1) {
    return navigateTo("/auth/login");
  }
});
