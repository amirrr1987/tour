import type { ISort } from '~/models/sort.model'

export const useSortStore = defineStore('sort', () => {
  const sorts = ref<ISort[]>([
    {
      id: '1',
      label: 'Most Popular',
      slug: 'popular'
    },
    {
      id: '2',
      label: 'Price: Low to High',
      slug: 'price-asc'
    },
    {
      id: '3',
      label: 'Price: High to Low',
      slug: 'price-desc'
    },
    {
      id: '4',
      label: 'Highest Rated',
      slug: 'rating-desc'
    },
    {
      id: '5',
      label: 'Duration',
      slug: 'duration-asc'
    },
    {
      id: '6',
      label: 'Duration: Long to Short',
      slug: 'duration-desc'
    }
  ])

  return {
    sorts
  }
})
