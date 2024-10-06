import { defineStore } from "pinia";
import type { Category } from "~/types/CategoryModel";

export const useCategoryStore = defineStore("category", () => {
  const category = ref<Category>({} as Category);
  const categoryList = ref<Category[]>([]);
  return { category, categoryList };
});
