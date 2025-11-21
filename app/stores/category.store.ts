import type { ICategory } from "~/interfaces/category.model"

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<ICategory[]>([
    {
      id: '1',
      name: 'Adventure',
      description: 'Adventure tours',
      image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: '2',
      name: 'Cultural',
      description: 'Cultural tours',
      image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: '3',
      name: 'Relaxation',
      description: 'Relaxation tours',
      image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: '4',
      name: 'Urban',
      description: 'Urban tours',
      image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: '5',
      name: 'History',
      description: 'History tours',
      image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: '6',
      name: 'Nature',
      description: 'Nature tours',
      image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: '7',
      name: 'Beach',
      description: 'Beach tours',
      image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: '8',
      name: 'City',
      description: 'City tours',
      image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: '9',
      name: 'Mountain',
      description: 'Mountain tours',
      image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: '10',
      name: 'River',
      description: 'River tours',
      image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    }
  ])

  return {
    categories,
  }
})