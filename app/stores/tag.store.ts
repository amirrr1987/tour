import type { ITag } from '~/models/tag.model'

export const useTagStore = defineStore('tag', () => {
  const tags = ref<ITag[]>([
    {
      id: '1',
      name: 'Adventure',
      slug: 'adventure'
    },
    {
      id: '2',
      name: 'Cultural',
      slug: 'cultural'
    },
    {
      id: '3',
      name: 'Relaxation',
      slug: 'relaxation'
    },
    {
      id: '4',
      name: 'Urban',
      slug: 'urban'
    },
    {
      id: '5',
      name: 'History',
      slug: 'history'
    },
    {
      id: '6',
      name: 'Nature',
      slug: 'nature'
    },
    {
      id: '7',
      name: 'Beach',
      slug: 'beach'
    },
    {
      id: '8',
      name: 'City',
      slug: 'city'
    },
    {
      id: '9',
      name: 'Mountain',
      slug: 'mountain'
    },
    {
      id: '10',
      name: 'River',
      slug: 'river'
    }
  ])

  return {
    tags
  }
})
