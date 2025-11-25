import { VehicleEnum } from '~/enums'
import type { ITour } from '~/models/tour.model'

export const useTourStore = defineStore('tour', () => {
  const tours = ref<ITour[]>([
    {
      id: 1,
      name: 'Mountain Adventure',
      description:
        'Explore breathtaking mountain landscapes and experience the thrill of adventure.',
      price: 299,
      originalPrice: 399,
      startDate: new Date('2025-03-15'),
      endDate: new Date('2025-03-20'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Car,
      rating: 4.8,
      reviews: 124,
      location: 'Switzerland',
      category: '1', // Adventure
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: true,
      tags: ['1', '9'], // Adventure, Mountain
      keywords: ['mountain', 'adventure', 'hiking', 'switzerland', 'alps', 'outdoor']
    },
    {
      id: 2,
      name: 'Cultural Heritage Tour',
      description: 'Discover ancient cultures and historical landmarks with expert guides.',
      price: 399,
      originalPrice: 0,
      startDate: new Date('2025-04-01'),
      endDate: new Date('2025-04-08'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Bus,
      rating: 4.9,
      reviews: 89,
      location: 'Egypt',
      category: '2', // Cultural
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['2', '5'], // Cultural, History
      keywords: ['egypt', 'pyramids', 'culture', 'history', 'ancient', 'heritage']
    },
    {
      id: 3,
      name: 'Beach Paradise',
      description: 'Relax on pristine beaches and enjoy crystal-clear waters.',
      price: 249,
      originalPrice: 0,
      startDate: new Date('2025-05-10'),
      endDate: new Date('2025-05-14'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Flight,
      rating: 4.7,
      reviews: 156,
      location: 'Maldives',
      category: '3', // Relaxation
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['3', '7'], // Relaxation, Beach
      keywords: ['beach', 'maldives', 'relaxation', 'tropical', 'island', 'paradise']
    },
    {
      id: 4,
      name: 'City Explorer',
      description: 'Experience vibrant city life, local cuisine, and nightlife.',
      price: 199,
      originalPrice: 0,
      startDate: new Date('2025-03-20'),
      endDate: new Date('2025-03-23'),
      numberOfTravelers: 1,
      vehicle: VehicleEnum.Train,
      rating: 4.6,
      reviews: 203,
      location: 'Tokyo',
      category: '4', // Urban
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['4', '8'], // Urban, City
      keywords: ['tokyo', 'city', 'urban', 'japan', 'culture', 'nightlife']
    },
    {
      id: 5,
      name: 'Wildlife Safari',
      description: 'Witness amazing wildlife in their natural habitat with expert guides.',
      price: 549,
      originalPrice: 0,
      startDate: new Date('2025-06-01'),
      endDate: new Date('2025-06-09'),
      numberOfTravelers: 4,
      vehicle: VehicleEnum.Bus,
      rating: 5.0,
      reviews: 67,
      location: 'Kenya',
      category: '1', // Adventure
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: true,
      tags: ['1', '6'], // Adventure, Nature
      keywords: ['safari', 'kenya', 'wildlife', 'animals', 'nature', 'adventure']
    },
    {
      id: 6,
      name: 'Desert Expedition',
      description: 'Journey through stunning desert landscapes and experience Bedouin culture.',
      price: 349,
      originalPrice: 0,
      startDate: new Date('2025-04-15'),
      endDate: new Date('2025-04-21'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Car,
      rating: 4.5,
      reviews: 92,
      location: 'Morocco',
      category: '1', // Adventure
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['1', '2'], // Adventure, Cultural
      keywords: ['desert', 'morocco', 'adventure', 'culture', 'bedouin', 'sahara']
    },
    {
      id: 7,
      name: 'Tropical Island Hopping',
      description: 'Visit multiple tropical islands and enjoy diverse marine activities.',
      price: 449,
      originalPrice: 0,
      startDate: new Date('2025-05-20'),
      endDate: new Date('2025-05-27'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Flight,
      rating: 4.8,
      reviews: 134,
      location: 'Philippines',
      category: '3', // Relaxation
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['3', '7'], // Relaxation, Beach
      keywords: ['island', 'philippines', 'tropical', 'beach', 'diving', 'relaxation']
    },
    {
      id: 8,
      name: 'European Grand Tour',
      description: 'Explore multiple European cities and their rich history.',
      price: 1299,
      originalPrice: 0,
      startDate: new Date('2025-06-15'),
      endDate: new Date('2025-06-29'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Train,
      rating: 4.9,
      reviews: 78,
      location: 'Europe',
      category: '2', // Cultural
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['2', '5', '8'], // Cultural, History, City
      keywords: ['europe', 'culture', 'history', 'cities', 'grand tour', 'heritage']
    },
    {
      id: 9,
      name: 'Northern Lights Adventure',
      description:
        'Chase the aurora borealis in the Arctic Circle with professional photographers.',
      price: 899,
      originalPrice: 1099,
      startDate: new Date('2025-09-01'),
      endDate: new Date('2025-09-07'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Flight,
      rating: 4.9,
      reviews: 145,
      location: 'Iceland',
      category: '1', // Adventure
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: true,
      tags: ['1', '6'], // Adventure, Nature
      keywords: ['northern lights', 'iceland', 'aurora', 'arctic', 'adventure', 'photography']
    },
    {
      id: 10,
      name: 'Ancient Rome Discovery',
      description: 'Walk through history in the Eternal City with expert archaeologists.',
      price: 379,
      originalPrice: 0,
      startDate: new Date('2025-04-10'),
      endDate: new Date('2025-04-15'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Bus,
      rating: 4.7,
      reviews: 198,
      location: 'Italy',
      category: '2', // Cultural
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['2', '5'], // Cultural, History
      keywords: ['rome', 'italy', 'history', 'ancient', 'culture', 'archaeology']
    },
    {
      id: 11,
      name: 'Bali Wellness Retreat',
      description: 'Rejuvenate your mind and body with yoga, spa treatments, and organic cuisine.',
      price: 599,
      originalPrice: 0,
      startDate: new Date('2025-05-05'),
      endDate: new Date('2025-05-12'),
      numberOfTravelers: 1,
      vehicle: VehicleEnum.Flight,
      rating: 4.8,
      reviews: 112,
      location: 'Bali',
      category: '3', // Relaxation
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['3', '7'], // Relaxation, Beach
      keywords: ['bali', 'wellness', 'yoga', 'spa', 'relaxation', 'retreat']
    },
    {
      id: 12,
      name: 'New York City Experience',
      description: 'Discover the Big Apple with Broadway shows, museums, and iconic landmarks.',
      price: 449,
      originalPrice: 0,
      startDate: new Date('2025-03-25'),
      endDate: new Date('2025-03-29'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Flight,
      rating: 4.6,
      reviews: 267,
      location: 'New York',
      category: '4', // Urban
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['4', '8'], // Urban, City
      keywords: ['new york', 'city', 'broadway', 'urban', 'usa', 'landmarks']
    },
    {
      id: 13,
      name: 'Amazon Rainforest Expedition',
      description: "Explore the world's largest rainforest with experienced naturalist guides.",
      price: 799,
      originalPrice: 0,
      startDate: new Date('2025-07-01'),
      endDate: new Date('2025-07-11'),
      numberOfTravelers: 4,
      vehicle: VehicleEnum.Flight,
      rating: 4.9,
      reviews: 89,
      location: 'Brazil',
      category: '1', // Adventure
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['1', '6'], // Adventure, Nature
      keywords: ['amazon', 'rainforest', 'brazil', 'nature', 'wildlife', 'adventure']
    },
    {
      id: 14,
      name: 'Taj Mahal & Golden Triangle',
      description: "Visit India's most iconic monuments and experience rich cultural heritage.",
      price: 549,
      originalPrice: 0,
      startDate: new Date('2025-04-20'),
      endDate: new Date('2025-04-26'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Bus,
      rating: 4.7,
      reviews: 156,
      location: 'India',
      category: '2', // Cultural
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['2', '5'], // Cultural, History
      keywords: ['taj mahal', 'india', 'culture', 'monuments', 'heritage', 'golden triangle']
    },
    {
      id: 15,
      name: 'Seychelles Beach Escape',
      description: 'Luxury beachfront resorts with white sand beaches and turquoise waters.',
      price: 1299,
      originalPrice: 1599,
      startDate: new Date('2025-06-10'),
      endDate: new Date('2025-06-18'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Flight,
      rating: 4.9,
      reviews: 98,
      location: 'Seychelles',
      category: '3', // Relaxation
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: true,
      tags: ['3', '7'], // Relaxation, Beach
      keywords: ['seychelles', 'beach', 'luxury', 'resort', 'tropical', 'relaxation']
    },
    {
      id: 16,
      name: 'Dubai Modern Marvels',
      description: 'Experience futuristic architecture, luxury shopping, and desert adventures.',
      price: 699,
      originalPrice: 0,
      startDate: new Date('2025-03-30'),
      endDate: new Date('2025-04-04'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Flight,
      rating: 4.8,
      reviews: 178,
      location: 'Dubai',
      category: '4', // Urban
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['4', '8'], // Urban, City
      keywords: ['dubai', 'modern', 'luxury', 'shopping', 'architecture', 'urban']
    },
    {
      id: 17,
      name: 'Patagonia Trekking',
      description: "Hike through stunning glaciers and mountains in South America's wilderness.",
      price: 1199,
      originalPrice: 0,
      startDate: new Date('2025-10-01'),
      endDate: new Date('2025-10-13'),
      numberOfTravelers: 4,
      vehicle: VehicleEnum.Flight,
      rating: 5.0,
      reviews: 67,
      location: 'Chile',
      category: '1', // Adventure
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['1', '9'], // Adventure, Mountain
      keywords: ['patagonia', 'trekking', 'chile', 'mountains', 'glaciers', 'adventure']
    },
    {
      id: 18,
      name: 'Kyoto Traditional Japan',
      description: 'Immerse yourself in traditional Japanese culture, temples, and gardens.',
      price: 649,
      originalPrice: 0,
      startDate: new Date('2025-04-05'),
      endDate: new Date('2025-04-11'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Train,
      rating: 4.9,
      reviews: 134,
      location: 'Japan',
      category: '2', // Cultural
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['2', '5'], // Cultural, History
      keywords: ['kyoto', 'japan', 'traditional', 'temples', 'culture', 'gardens']
    },
    {
      id: 19,
      name: 'Maldives Overwater Villa',
      description: 'Stay in luxurious overwater bungalows with direct access to coral reefs.',
      price: 1499,
      originalPrice: 0,
      startDate: new Date('2025-05-15'),
      endDate: new Date('2025-05-22'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Flight,
      rating: 4.9,
      reviews: 87,
      location: 'Maldives',
      category: '3', // Relaxation
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['3', '7'], // Relaxation, Beach
      keywords: ['maldives', 'overwater', 'villa', 'luxury', 'diving', 'beach']
    },
    {
      id: 20,
      name: 'London Royal Tour',
      description: 'Explore royal palaces, historic landmarks, and world-class museums.',
      price: 499,
      originalPrice: 0,
      startDate: new Date('2025-04-12'),
      endDate: new Date('2025-04-17'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Flight,
      rating: 4.7,
      reviews: 223,
      location: 'London',
      category: '4', // Urban
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['4', '5', '8'], // Urban, History, City
      keywords: ['london', 'royal', 'palaces', 'history', 'museums', 'urban']
    },
    {
      id: 21,
      name: 'Nepal Everest Base Camp',
      description:
        "Trek to the base of the world's highest mountain with experienced Sherpa guides.",
      price: 999,
      originalPrice: 0,
      startDate: new Date('2025-09-15'),
      endDate: new Date('2025-09-29'),
      numberOfTravelers: 4,
      vehicle: VehicleEnum.Flight,
      rating: 4.8,
      reviews: 112,
      location: 'Nepal',
      category: '1', // Adventure
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['1', '9'], // Adventure, Mountain
      keywords: ['everest', 'nepal', 'trekking', 'mountains', 'base camp', 'adventure']
    },
    {
      id: 22,
      name: 'Greece Ancient Wonders',
      description: 'Visit the Acropolis, Delphi, and ancient ruins with expert historians.',
      price: 579,
      originalPrice: 0,
      startDate: new Date('2025-05-01'),
      endDate: new Date('2025-05-08'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Bus,
      rating: 4.8,
      reviews: 167,
      location: 'Greece',
      category: '2', // Cultural
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['2', '5'], // Cultural, History
      keywords: ['greece', 'acropolis', 'ancient', 'history', 'culture', 'ruins']
    },
    {
      id: 23,
      name: 'Thailand Beach Paradise',
      description: 'Relax on pristine beaches, enjoy Thai massages, and explore tropical islands.',
      price: 399,
      originalPrice: 499,
      startDate: new Date('2025-05-25'),
      endDate: new Date('2025-05-31'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Flight,
      rating: 4.7,
      reviews: 189,
      location: 'Thailand',
      category: '3', // Relaxation
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['3', '7'], // Relaxation, Beach
      keywords: ['thailand', 'beach', 'tropical', 'massage', 'islands', 'relaxation']
    },
    {
      id: 24,
      name: 'Singapore City Tour',
      description: 'Experience the perfect blend of cultures, cuisine, and modern architecture.',
      price: 349,
      originalPrice: 0,
      startDate: new Date('2025-03-18'),
      endDate: new Date('2025-03-22'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Flight,
      rating: 4.6,
      reviews: 201,
      location: 'Singapore',
      category: '4', // Urban
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['4', '8'], // Urban, City
      keywords: ['singapore', 'city', 'culture', 'cuisine', 'modern', 'urban']
    },
    {
      id: 25,
      name: 'New Zealand Adventure',
      description: 'Bungee jumping, skydiving, and exploring Middle-earth landscapes.',
      price: 1099,
      originalPrice: 0,
      startDate: new Date('2025-08-01'),
      endDate: new Date('2025-08-11'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Car,
      rating: 4.9,
      reviews: 145,
      location: 'New Zealand',
      category: '1', // Adventure
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: true,
      tags: ['1', '6'], // Adventure, Nature
      keywords: ['new zealand', 'adventure', 'bungee', 'skydiving', 'nature', 'extreme']
    },
    {
      id: 26,
      name: 'Peru Machu Picchu',
      description: 'Hike the Inca Trail to the ancient citadel with professional guides.',
      price: 849,
      originalPrice: 0,
      startDate: new Date('2025-06-20'),
      endDate: new Date('2025-06-28'),
      numberOfTravelers: 4,
      vehicle: VehicleEnum.Flight,
      rating: 4.9,
      reviews: 134,
      location: 'Peru',
      category: '2', // Cultural
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['1', '2', '5'], // Adventure, Cultural, History
      keywords: ['machu picchu', 'peru', 'inca trail', 'ancient', 'hiking', 'culture']
    },
    {
      id: 27,
      name: 'Caribbean Cruise',
      description: 'Sail through turquoise waters visiting multiple Caribbean islands.',
      price: 1299,
      originalPrice: 0,
      startDate: new Date('2025-07-15'),
      endDate: new Date('2025-07-22'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Flight,
      rating: 4.8,
      reviews: 178,
      location: 'Caribbean',
      category: '3', // Relaxation
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['3', '7'], // Relaxation, Beach
      keywords: ['caribbean', 'cruise', 'islands', 'beach', 'sailing', 'relaxation']
    },
    {
      id: 28,
      name: 'Paris City of Lights',
      description: 'Explore the Eiffel Tower, Louvre, and charming Parisian neighborhoods.',
      price: 599,
      originalPrice: 0,
      startDate: new Date('2025-04-25'),
      endDate: new Date('2025-04-30'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Flight,
      rating: 4.8,
      reviews: 256,
      location: 'France',
      category: '4', // Urban
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['4', '5', '8'], // Urban, History, City
      keywords: ['paris', 'eiffel tower', 'louvre', 'france', 'culture', 'urban']
    },
    {
      id: 29,
      name: 'Costa Rica Wildlife',
      description: 'Spot sloths, monkeys, and exotic birds in lush rainforests and cloud forests.',
      price: 749,
      originalPrice: 0,
      startDate: new Date('2025-07-20'),
      endDate: new Date('2025-07-29'),
      numberOfTravelers: 4,
      vehicle: VehicleEnum.Bus,
      rating: 4.8,
      reviews: 123,
      location: 'Costa Rica',
      category: '1', // Adventure
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['1', '6'], // Adventure, Nature
      keywords: ['costa rica', 'wildlife', 'rainforest', 'nature', 'animals', 'adventure']
    },
    {
      id: 30,
      name: 'Turkey Historical Journey',
      description: 'Discover Istanbul, Cappadocia, and ancient ruins spanning civilizations.',
      price: 679,
      originalPrice: 0,
      startDate: new Date('2025-05-08'),
      endDate: new Date('2025-05-16'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Bus,
      rating: 4.7,
      reviews: 145,
      location: 'Turkey',
      category: '2', // Cultural
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['2', '5'], // Cultural, History
      keywords: ['turkey', 'istanbul', 'cappadocia', 'history', 'culture', 'ancient']
    },
    {
      id: 31,
      name: 'Fiji Island Resort',
      description: 'Luxury all-inclusive resort with private beaches and world-class diving.',
      price: 1399,
      originalPrice: 1699,
      startDate: new Date('2025-06-05'),
      endDate: new Date('2025-06-12'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Flight,
      rating: 4.9,
      reviews: 94,
      location: 'Fiji',
      category: '3', // Relaxation
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['3', '7'], // Relaxation, Beach
      keywords: ['fiji', 'resort', 'luxury', 'diving', 'beach', 'island']
    },
    {
      id: 32,
      name: 'Hong Kong Urban Adventure',
      description: 'Experience the vibrant city with dim sum, markets, and stunning skyline views.',
      price: 429,
      originalPrice: 0,
      startDate: new Date('2025-03-22'),
      endDate: new Date('2025-03-26'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Flight,
      rating: 4.6,
      reviews: 187,
      location: 'Hong Kong',
      category: '4', // Urban
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['4', '8'], // Urban, City
      keywords: ['hong kong', 'city', 'dim sum', 'markets', 'urban', 'skyline']
    },
    {
      id: 33,
      name: 'Norway Fjords Cruise',
      description: 'Sail through dramatic fjords and witness stunning Nordic landscapes.',
      price: 1199,
      originalPrice: 0,
      startDate: new Date('2025-08-15'),
      endDate: new Date('2025-08-23'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Flight,
      rating: 4.9,
      reviews: 112,
      location: 'Norway',
      category: '1', // Adventure
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['1', '6'], // Adventure, Nature
      keywords: ['norway', 'fjords', 'cruise', 'nordic', 'nature', 'scenery']
    },
    {
      id: 34,
      name: 'Cambodia Angkor Wat',
      description: 'Explore the magnificent temple complex and learn about Khmer civilization.',
      price: 449,
      originalPrice: 0,
      startDate: new Date('2025-04-18'),
      endDate: new Date('2025-04-23'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Flight,
      rating: 4.8,
      reviews: 156,
      location: 'Cambodia',
      category: '2', // Cultural
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['2', '5'], // Cultural, History
      keywords: ['angkor wat', 'cambodia', 'temples', 'khmer', 'history', 'culture']
    },
    {
      id: 35,
      name: 'Mauritius Beach Holiday',
      description: 'Relax on white sand beaches with crystal-clear waters and luxury resorts.',
      price: 899,
      originalPrice: 0,
      startDate: new Date('2025-06-12'),
      endDate: new Date('2025-06-18'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Flight,
      rating: 4.7,
      reviews: 134,
      location: 'Mauritius',
      category: '3', // Relaxation
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['3', '7'], // Relaxation, Beach
      keywords: ['mauritius', 'beach', 'resort', 'tropical', 'relaxation', 'luxury']
    },
    {
      id: 36,
      name: 'Barcelona City Break',
      description: "Explore Gaudi's masterpieces, tapas bars, and vibrant Mediterranean culture.",
      price: 479,
      originalPrice: 0,
      startDate: new Date('2025-05-12'),
      endDate: new Date('2025-05-16'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Flight,
      rating: 4.7,
      reviews: 198,
      location: 'Spain',
      category: '4', // Urban
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['4', '8'], // Urban, City
      keywords: ['barcelona', 'gaudi', 'spain', 'tapas', 'culture', 'urban']
    },
    {
      id: 37,
      name: 'Tanzania Safari',
      description: 'Witness the Great Migration and Big Five in Serengeti and Ngorongoro.',
      price: 1299,
      originalPrice: 0,
      startDate: new Date('2025-08-20'),
      endDate: new Date('2025-08-30'),
      numberOfTravelers: 4,
      vehicle: VehicleEnum.Bus,
      rating: 5.0,
      reviews: 89,
      location: 'Tanzania',
      category: '1', // Adventure
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: true,
      tags: ['1', '6'], // Adventure, Nature
      keywords: ['tanzania', 'safari', 'serengeti', 'wildlife', 'migration', 'adventure']
    },
    {
      id: 38,
      name: 'China Great Wall',
      description: "Walk along the Great Wall and explore Beijing's Forbidden City.",
      price: 799,
      originalPrice: 0,
      startDate: new Date('2025-05-18'),
      endDate: new Date('2025-05-25'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Bus,
      rating: 4.8,
      reviews: 167,
      location: 'China',
      category: '2', // Cultural
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['2', '5'], // Cultural, History
      keywords: ['china', 'great wall', 'beijing', 'forbidden city', 'history', 'culture']
    },
    {
      id: 39,
      name: 'Bora Bora Overwater',
      description: 'Ultimate luxury in overwater bungalows with stunning lagoon views.',
      price: 1999,
      originalPrice: 2499,
      startDate: new Date('2025-07-01'),
      endDate: new Date('2025-07-07'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Flight,
      rating: 5.0,
      reviews: 76,
      location: 'French Polynesia',
      category: '3', // Relaxation
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: true,
      tags: ['3', '7'], // Relaxation, Beach
      keywords: ['bora bora', 'overwater', 'luxury', 'lagoon', 'paradise', 'relaxation']
    },
    {
      id: 40,
      name: 'Sydney Harbor Tour',
      description: 'Experience the Opera House, Harbor Bridge, and stunning coastal views.',
      price: 549,
      originalPrice: 0,
      startDate: new Date('2025-06-25'),
      endDate: new Date('2025-06-30'),
      numberOfTravelers: 2,
      vehicle: VehicleEnum.Flight,
      rating: 4.7,
      reviews: 189,
      location: 'Australia',
      category: '4', // Urban
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: false,
      tags: ['4', '8'], // Urban, City
      keywords: ['sydney', 'opera house', 'australia', 'harbor', 'coastal', 'urban']
    }
  ])

  return {
    tours
  }
})
