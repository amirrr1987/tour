<script setup lang="ts">
  const featuredTours = [
    {
      id: 1,
      name: 'Mountain Adventure',
      description:
        'Explore breathtaking mountain landscapes and experience the thrill of adventure.',
      price: '$299',
      duration: '5 Days',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 2,
      name: 'Cultural Heritage Tour',
      description: 'Discover ancient cultures and historical landmarks with expert guides.',
      price: '$399',
      duration: '7 Days',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 3,
      name: 'Beach Paradise',
      description: 'Relax on pristine beaches and enjoy crystal-clear waters.',
      price: '$249',
      duration: '4 Days',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    },
    {
      id: 4,
      name: 'City Explorer',
      description: 'Experience vibrant city life, local cuisine, and nightlife.',
      price: '$199',
      duration: '3 Days',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
    }
  ]

  const destinations = [
    {
      name: 'Paris, France',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      tours: '25 Tours'
    },
    {
      name: 'Tokyo, Japan',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      tours: '18 Tours'
    },
    {
      name: 'New York, USA',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      tours: '22 Tours'
    },
    {
      name: 'Bali, Indonesia',
      image:
        'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
      tours: '15 Tours'
    }
  ]

  const stats = [
    {
      number: '10,000+',
      label: 'Happy Travelers',
      icon: 'i-lucide-users'
    },
    {
      number: '500+',
      label: 'Tours Completed',
      icon: 'i-lucide-map'
    },
    {
      number: '50+',
      label: 'Destinations',
      icon: 'i-lucide-globe'
    },
    {
      number: '15+',
      label: 'Years Experience',
      icon: 'i-lucide-award'
    }
  ]

  const features = [
    {
      icon: 'i-lucide-shield-check',
      title: 'Safe & Secure',
      description: 'Your safety is our top priority'
    },
    {
      icon: 'i-lucide-heart',
      title: 'Passionate Guides',
      description: 'Experienced and dedicated tour guides'
    },
    {
      icon: 'i-lucide-sparkles',
      title: 'Unique Experiences',
      description: 'Authentic experiences beyond the ordinary'
    },
    {
      icon: 'i-lucide-dollar-sign',
      title: 'Best Value',
      description: 'Competitive prices, exceptional quality'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      text: 'An absolutely amazing experience! The tour guides were knowledgeable and friendly, and the itinerary was perfect. Highly recommend!',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    {
      name: 'Michael Chen',
      location: 'London, UK',
      rating: 5,
      text: "Best travel experience I've ever had. Everything was well-organized, and we got to see places we never would have found on our own.",
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
    },
    {
      name: 'Emma Williams',
      location: 'Sydney, Australia',
      rating: 5,
      text: 'The attention to detail and customer service was outstanding. We felt safe and cared for throughout the entire journey.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
    }
  ]
</script>

<template>
  <UPage>
    <LandingHero />
  
      <LandingStatistics :stats="stats" />
      <LandingFeatured :featured-tours="featuredTours" />
      <LandingPopularDestinations :destinations="destinations" />
      <LandingWhy :features="features" />
      <LandingTestimonials :testimonials="testimonials" />
      <LandingNewsLetter />
      <LandingFinalCTA />

  </UPage>
</template>
