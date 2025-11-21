import type { ILocation } from '~/interfaces/location.model'

export const useLocationStore = defineStore('location', () => {
  const locations = ref<ILocation[]>([
    {
      id: '1',
      name: 'Tehran',
      description: 'Tehran is the capital of Iran and the most populous city in the country.',
      image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: '2',
      name: 'Mashhad',
      description: 'Mashhad is the second most populous city in Iran and the capital of the province of Khorasan.',
      image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: '3',
      name: 'Shiraz',
      description: 'Shiraz is the third most populous city in Iran and the capital of the province of Fars.',
      image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: '4',
      name: 'Tabriz',
      description: 'Tabriz is the fourth most populous city in Iran and the capital of the province of East Azerbaijan.',
      image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: '5',
      name: 'Yazd',
      description: 'Yazd is the fifth most populous city in Iran and the capital of the province of Yazd.',
      image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: '6',
      name: 'Esfahan',
      description: 'Esfahan is the sixth most populous city in Iran and the capital of the province of Esfahan.',
      image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    }
  ])

  return {
    locations
  }
})
