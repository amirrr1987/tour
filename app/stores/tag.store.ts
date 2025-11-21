import type { ITag } from '~/interfaces/tag.model'

export const useTagStore = defineStore('tag', () => {
  const tags = ref<ITag[]>([
    {
      id: '1',
      name: 'Adventure'
    },
    {
      id: '2',
      name: 'Cultural'
    },
    {
      id: '3',
      name: 'Relaxation'
    },
    {
      id: '4',
      name: 'Urban'
    },
    {
      id: '5',
      name: 'History'
    },
    {
      id: '6',
      name: 'Nature'
    },
    {
      id: '7',
      name: 'Beach'
    },
    {
      id: '8',
      name: 'City'
    },
    {
      id: '9',
      name: 'Mountain'
    },
    {
      id: '10',
      name: 'River'
    }
  ])

  return {
    tags
  }
})
