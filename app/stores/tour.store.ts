export const useTourStore = defineStore('tour', () => {
  const tours = ref([
    {
      id: 1,
      name: 'Mountain Adventure',
      description:
        'Explore breathtaking mountain landscapes and experience the thrill of adventure.',
      price: 299,
      originalPrice: 399,
      duration: '5 Days',
      rating: 4.8,
      reviews: 124,
      location: 'Switzerland',
      category: 'Adventure',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: true
    },
    {
      id: 2,
      name: 'Cultural Heritage Tour',
      description: 'Discover ancient cultures and historical landmarks with expert guides.',
      price: 399,
      duration: '7 Days',
      rating: 4.9,
      reviews: 89,
      location: 'Egypt',
      category: 'Cultural',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 3,
      name: 'Beach Paradise',
      description: 'Relax on pristine beaches and enjoy crystal-clear waters.',
      price: 249,
      duration: '4 Days',
      rating: 4.7,
      reviews: 156,
      location: 'Maldives',
      category: 'Relaxation',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 4,
      name: 'City Explorer',
      description: 'Experience vibrant city life, local cuisine, and nightlife.',
      price: 199,
      duration: '3 Days',
      rating: 4.6,
      reviews: 203,
      location: 'Tokyo',
      category: 'Urban',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 5,
      name: 'Wildlife Safari',
      description: 'Witness amazing wildlife in their natural habitat with expert guides.',
      price: 549,
      duration: '8 Days',
      rating: 5.0,
      reviews: 67,
      location: 'Kenya',
      category: 'Adventure',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: true
    },
    {
      id: 6,
      name: 'Desert Expedition',
      description: 'Journey through stunning desert landscapes and experience Bedouin culture.',
      price: 349,
      duration: '6 Days',
      rating: 4.5,
      reviews: 92,
      location: 'Morocco',
      category: 'Adventure',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 7,
      name: 'Tropical Island Hopping',
      description: 'Visit multiple tropical islands and enjoy diverse marine activities.',
      price: 449,
      duration: '7 Days',
      rating: 4.8,
      reviews: 134,
      location: 'Philippines',
      category: 'Relaxation',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 8,
      name: 'European Grand Tour',
      description: 'Explore multiple European cities and their rich history.',
      price: 1299,
      duration: '14 Days',
      rating: 4.9,
      reviews: 78,
      location: 'Europe',
      category: 'Cultural',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 9,
      name: 'Northern Lights Adventure',
      description:
        'Chase the aurora borealis in the Arctic Circle with professional photographers.',
      price: 899,
      originalPrice: 1099,
      duration: '6 Days',
      rating: 4.9,
      reviews: 145,
      location: 'Iceland',
      category: 'Adventure',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: true
    },
    {
      id: 10,
      name: 'Ancient Rome Discovery',
      description: 'Walk through history in the Eternal City with expert archaeologists.',
      price: 379,
      duration: '5 Days',
      rating: 4.7,
      reviews: 198,
      location: 'Italy',
      category: 'Cultural',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 11,
      name: 'Bali Wellness Retreat',
      description: 'Rejuvenate your mind and body with yoga, spa treatments, and organic cuisine.',
      price: 599,
      duration: '7 Days',
      rating: 4.8,
      reviews: 112,
      location: 'Bali',
      category: 'Relaxation',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 12,
      name: 'New York City Experience',
      description: 'Discover the Big Apple with Broadway shows, museums, and iconic landmarks.',
      price: 449,
      duration: '4 Days',
      rating: 4.6,
      reviews: 267,
      location: 'New York',
      category: 'Urban',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 13,
      name: 'Amazon Rainforest Expedition',
      description: "Explore the world's largest rainforest with experienced naturalist guides.",
      price: 799,
      duration: '10 Days',
      rating: 4.9,
      reviews: 89,
      location: 'Brazil',
      category: 'Adventure',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 14,
      name: 'Taj Mahal & Golden Triangle',
      description: "Visit India's most iconic monuments and experience rich cultural heritage.",
      price: 549,
      duration: '6 Days',
      rating: 4.7,
      reviews: 156,
      location: 'India',
      category: 'Cultural',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 15,
      name: 'Seychelles Beach Escape',
      description: 'Luxury beachfront resorts with white sand beaches and turquoise waters.',
      price: 1299,
      originalPrice: 1599,
      duration: '8 Days',
      rating: 4.9,
      reviews: 98,
      location: 'Seychelles',
      category: 'Relaxation',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: true
    },
    {
      id: 16,
      name: 'Dubai Modern Marvels',
      description: 'Experience futuristic architecture, luxury shopping, and desert adventures.',
      price: 699,
      duration: '5 Days',
      rating: 4.8,
      reviews: 178,
      location: 'Dubai',
      category: 'Urban',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 17,
      name: 'Patagonia Trekking',
      description: "Hike through stunning glaciers and mountains in South America's wilderness.",
      price: 1199,
      duration: '12 Days',
      rating: 5.0,
      reviews: 67,
      location: 'Chile',
      category: 'Adventure',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 18,
      name: 'Kyoto Traditional Japan',
      description: 'Immerse yourself in traditional Japanese culture, temples, and gardens.',
      price: 649,
      duration: '6 Days',
      rating: 4.9,
      reviews: 134,
      location: 'Japan',
      category: 'Cultural',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 19,
      name: 'Maldives Overwater Villa',
      description: 'Stay in luxurious overwater bungalows with direct access to coral reefs.',
      price: 1499,
      duration: '7 Days',
      rating: 4.9,
      reviews: 87,
      location: 'Maldives',
      category: 'Relaxation',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 20,
      name: 'London Royal Tour',
      description: 'Explore royal palaces, historic landmarks, and world-class museums.',
      price: 499,
      duration: '5 Days',
      rating: 4.7,
      reviews: 223,
      location: 'London',
      category: 'Urban',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 21,
      name: 'Nepal Everest Base Camp',
      description:
        "Trek to the base of the world's highest mountain with experienced Sherpa guides.",
      price: 999,
      duration: '14 Days',
      rating: 4.8,
      reviews: 112,
      location: 'Nepal',
      category: 'Adventure',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 22,
      name: 'Greece Ancient Wonders',
      description: 'Visit the Acropolis, Delphi, and ancient ruins with expert historians.',
      price: 579,
      duration: '7 Days',
      rating: 4.8,
      reviews: 167,
      location: 'Greece',
      category: 'Cultural',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 23,
      name: 'Thailand Beach Paradise',
      description: 'Relax on pristine beaches, enjoy Thai massages, and explore tropical islands.',
      price: 399,
      originalPrice: 499,
      duration: '6 Days',
      rating: 4.7,
      reviews: 189,
      location: 'Thailand',
      category: 'Relaxation',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 24,
      name: 'Singapore City Tour',
      description: 'Experience the perfect blend of cultures, cuisine, and modern architecture.',
      price: 349,
      duration: '4 Days',
      rating: 4.6,
      reviews: 201,
      location: 'Singapore',
      category: 'Urban',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 25,
      name: 'New Zealand Adventure',
      description: 'Bungee jumping, skydiving, and exploring Middle-earth landscapes.',
      price: 1099,
      duration: '10 Days',
      rating: 4.9,
      reviews: 145,
      location: 'New Zealand',
      category: 'Adventure',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: true
    },
    {
      id: 26,
      name: 'Peru Machu Picchu',
      description: 'Hike the Inca Trail to the ancient citadel with professional guides.',
      price: 849,
      duration: '8 Days',
      rating: 4.9,
      reviews: 134,
      location: 'Peru',
      category: 'Cultural',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 27,
      name: 'Caribbean Cruise',
      description: 'Sail through turquoise waters visiting multiple Caribbean islands.',
      price: 1299,
      duration: '7 Days',
      rating: 4.8,
      reviews: 178,
      location: 'Caribbean',
      category: 'Relaxation',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 28,
      name: 'Paris City of Lights',
      description: 'Explore the Eiffel Tower, Louvre, and charming Parisian neighborhoods.',
      price: 599,
      duration: '5 Days',
      rating: 4.8,
      reviews: 256,
      location: 'France',
      category: 'Urban',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 29,
      name: 'Costa Rica Wildlife',
      description: 'Spot sloths, monkeys, and exotic birds in lush rainforests and cloud forests.',
      price: 749,
      duration: '9 Days',
      rating: 4.8,
      reviews: 123,
      location: 'Costa Rica',
      category: 'Adventure',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 30,
      name: 'Turkey Historical Journey',
      description: 'Discover Istanbul, Cappadocia, and ancient ruins spanning civilizations.',
      price: 679,
      duration: '8 Days',
      rating: 4.7,
      reviews: 145,
      location: 'Turkey',
      category: 'Cultural',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 31,
      name: 'Fiji Island Resort',
      description: 'Luxury all-inclusive resort with private beaches and world-class diving.',
      price: 1399,
      originalPrice: 1699,
      duration: '7 Days',
      rating: 4.9,
      reviews: 94,
      location: 'Fiji',
      category: 'Relaxation',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 32,
      name: 'Hong Kong Urban Adventure',
      description: 'Experience the vibrant city with dim sum, markets, and stunning skyline views.',
      price: 429,
      duration: '4 Days',
      rating: 4.6,
      reviews: 187,
      location: 'Hong Kong',
      category: 'Urban',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 33,
      name: 'Norway Fjords Cruise',
      description: 'Sail through dramatic fjords and witness stunning Nordic landscapes.',
      price: 1199,
      duration: '8 Days',
      rating: 4.9,
      reviews: 112,
      location: 'Norway',
      category: 'Adventure',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 34,
      name: 'Cambodia Angkor Wat',
      description: 'Explore the magnificent temple complex and learn about Khmer civilization.',
      price: 449,
      duration: '5 Days',
      rating: 4.8,
      reviews: 156,
      location: 'Cambodia',
      category: 'Cultural',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 35,
      name: 'Mauritius Beach Holiday',
      description: 'Relax on white sand beaches with crystal-clear waters and luxury resorts.',
      price: 899,
      duration: '6 Days',
      rating: 4.7,
      reviews: 134,
      location: 'Mauritius',
      category: 'Relaxation',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 36,
      name: 'Barcelona City Break',
      description: "Explore Gaudi's masterpieces, tapas bars, and vibrant Mediterranean culture.",
      price: 479,
      duration: '4 Days',
      rating: 4.7,
      reviews: 198,
      location: 'Spain',
      category: 'Urban',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 37,
      name: 'Tanzania Safari',
      description: 'Witness the Great Migration and Big Five in Serengeti and Ngorongoro.',
      price: 1299,
      duration: '10 Days',
      rating: 5.0,
      reviews: 89,
      location: 'Tanzania',
      category: 'Adventure',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: true
    },
    {
      id: 38,
      name: 'China Great Wall',
      description: "Walk along the Great Wall and explore Beijing's Forbidden City.",
      price: 799,
      duration: '7 Days',
      rating: 4.8,
      reviews: 167,
      location: 'China',
      category: 'Cultural',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 39,
      name: 'Bora Bora Overwater',
      description: 'Ultimate luxury in overwater bungalows with stunning lagoon views.',
      price: 1999,
      originalPrice: 2499,
      duration: '7 Days',
      rating: 5.0,
      reviews: 76,
      location: 'French Polynesia',
      category: 'Relaxation',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      featured: true
    },
    {
      id: 40,
      name: 'Sydney Harbor Tour',
      description: 'Experience the Opera House, Harbor Bridge, and stunning coastal views.',
      price: 549,
      duration: '5 Days',
      rating: 4.7,
      reviews: 189,
      location: 'Australia',
      category: 'Urban',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    }
  ])

  return {
    tours
  }
})
