import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useConfigStore = defineStore("config", () => {
  const token = useLocalStorage("token", "");
  return { token };
});
