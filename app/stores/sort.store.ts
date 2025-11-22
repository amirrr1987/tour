import type { ISort } from '~/models/sort.model'

export const useSortStore = defineStore('sort', () => {
  const sorts = ref<ISort[]>([
    {
      id: '1',
      label: 'Most Popular',
      value: 'popular'
    },
    {
      id: '2',
      label: 'Price: Low to High',
      value: 'price-asc'
    },
    {
      id: '3',
      label: 'Price: High to Low',
      value: 'price-desc'
    },
    {
      id: '4',
      label: 'Highest Rated',
      value: 'rating-desc'
    },
    {
      id: '5',
      label: 'Duration',
      value: 'duration-asc'
    },
    {
      id: '6',
      label: 'Duration: Long to Short',
      value: 'duration-desc'
    }
  ])

  return {
    sorts
  }
})
