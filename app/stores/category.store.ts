export const useCategoryStore = defineStore('category', () => {
  const categories = ref([])

  return {
    categories,
  }
})