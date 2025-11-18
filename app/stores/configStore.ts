import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useConfigStore = defineStore("config", () => {
  const token = useLocalStorage("token", "");
  const fetchToken = () => token.value;
  return { token, fetchToken };
});
