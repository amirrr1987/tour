export const useTourStore = defineStore('tour', () => {
  const tours = ref([])

  return {
    tours,
  }
})