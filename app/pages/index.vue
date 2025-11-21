<script setup lang="ts">
const featuredTours = [
  {
    id: 1,
    name: 'Mountain Adventure',
    description: 'Explore breathtaking mountain landscapes and experience the thrill of adventure.',
    price: '$299',
    duration: '5 Days',
    image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
  },
  {
    id: 2,
    name: 'Cultural Heritage Tour',
    description: 'Discover ancient cultures and historical landmarks with expert guides.',
    price: '$399',
    duration: '7 Days',
    image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
  },
  {
    id: 3,
    name: 'Beach Paradise',
    description: 'Relax on pristine beaches and enjoy crystal-clear waters.',
    price: '$249',
    duration: '4 Days',
    image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
  },
  {
    id: 4,
    name: 'City Explorer',
    description: 'Experience vibrant city life, local cuisine, and nightlife.',
    price: '$199',
    duration: '3 Days',
    image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg'
  }
]

const destinations = [
  {
    name: 'Paris, France',
    image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
    tours: '25 Tours'
  },
  {
    name: 'Tokyo, Japan',
    image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
    tours: '18 Tours'
  },
  {
    name: 'New York, USA',
    image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
    tours: '22 Tours'
  },
  {
    name: 'Bali, Indonesia',
    image: 'https://irandestination.com/wp-content/uploads/2021/10/Best-iranian-tours-in-2021-Iran-Destination.jpg',
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
    text: 'Best travel experience I\'ve ever had. Everything was well-organized, and we got to see places we never would have found on our own.',
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

const searchQuery = ref('')
const searchDestination = ref(null)
const searchDate = ref(null)

const handleSearch = () => {
  // Build query object with only non-empty values
  const query: Record<string, string> = {}

  if (searchQuery.value) {
    query.search = searchQuery.value
  }
  if (searchDestination.value) {
    query.location = searchDestination.value
  }
  if (searchDate.value) {
    query.date = searchDate.value
  }

  // Navigate to tours page with search params
  navigateTo({
    path: '/tours',
    query: Object.keys(query).length > 0 ? query : undefined
  })
}

const email = ref('')
const isSubscribing = ref(false)
const toast = useToast()

const handleSubscribe = async () => {
  if (!email.value) {
    toast.add({
      title: 'Email Required',
      description: 'Please enter your email address',
      color: 'warning'
    })
    return
  }

  isSubscribing.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  isSubscribing.value = false

  toast.add({
    title: 'Subscribed!',
    description: 'Thank you for subscribing to our newsletter.',
    color: 'success'
  })

  email.value = ''
}
</script>

<template>
  <UPage>
    <!-- Hero Section -->
    <section class="relative py-20 md:py-32 bg-linear-to-br from-primary/10 via-background to-background">
      <UContainer>
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Discover Amazing
            <span class="text-primary">Travel Experiences</span>
          </h1>
          <p class="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Explore the world with our carefully curated tours. From adventure to relaxation, we have the perfect
            journey
            for you.
          </p>

          <!-- Search Bar -->
          <UCard class="max-w-3xl mx-auto">
            <form @submit.prevent="handleSearch" class="space-y-4">
              <div class="grid md:grid-cols-3 gap-4">
                <UFormField label="Search Tours">
                  <UInput v-model="searchQuery" placeholder="What are you looking for?" icon="i-lucide-search"
                    class="w-full" />
                </UFormField>
                <UFormField label="Destination">
                  <UInput v-model="searchDestination" placeholder="Where to?" icon="i-lucide-map-pin" class="w-full" />
                </UFormField>
                <UFormField label="Date">
                  <UInput v-model="searchDate" type="date" icon="i-lucide-calendar" class="w-full" />
                </UFormField>
              </div>
              <UButton type="submit" size="lg" block icon="i-lucide-search">
                Search Tours
              </UButton>
            </form>
          </UCard>
        </div>
      </UContainer>
    </section>

    <UContainer class="py-12 md:py-16">
      <!-- Statistics -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <UCard v-for="(stat, index) in stats" :key="index" class="text-center">
          <div class="flex flex-col items-center gap-3">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <UIcon :name="stat.icon" class="w-6 h-6 text-primary" />
            </div>
            <div>
              <div class="text-3xl font-bold mb-1">{{ stat.number }}</div>
              <div class="text-sm text-muted">{{ stat.label }}</div>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Featured Tours -->
      <div class="mb-16">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-2">Featured Tours</h2>
            <p class="text-muted">Handpicked experiences for unforgettable memories</p>
          </div>
          <UButton to="/tours" variant="outline" icon="i-lucide-arrow-right">
            View All
          </UButton>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UCard v-for="tour in featuredTours" :key="tour.id" class="overflow-hidden hover:shadow-lg transition-shadow">
            <div class="relative h-48 overflow-hidden">
              <img :src="tour.image" :alt="tour.name" class="w-full h-full object-cover" />
              <div class="absolute top-3 right-3">
                <UBadge color="primary">{{ tour.price }}</UBadge>
              </div>
            </div>
            <div class="p-4">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-semibold">{{ tour.name }}</h3>
                <UBadge variant="subtle" color="neutral">{{ tour.duration }}</UBadge>
              </div>
              <p class="text-sm text-muted mb-4 line-clamp-2">{{ tour.description }}</p>
              <UButton :to="`/tours/${tour.id}`" variant="outline" block size="sm">
                Learn More
              </UButton>
            </div>
          </UCard>
        </div>
      </div>

      <!-- Popular Destinations -->
      <div class="mb-16">
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold mb-2">Popular Destinations</h2>
          <p class="text-muted">Explore our most loved travel destinations</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UCard v-for="(destination, index) in destinations" :key="index"
            class="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
            <div class="relative h-64 overflow-hidden">
              <img :src="destination.image" :alt="destination.name"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div class="absolute bottom-4 left-4 right-4 text-white">
                <h3 class="text-xl font-bold mb-1">{{ destination.name }}</h3>
                <p class="text-sm opacity-90">{{ destination.tours }}</p>
              </div>
            </div>
          </UCard>
        </div>
      </div>

      <!-- Why Choose Us -->
      <div class="mb-16">
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold mb-2">Why Choose Us</h2>
          <p class="text-muted">We go above and beyond to ensure your travel experience is extraordinary</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UCard v-for="(feature, index) in features" :key="index" class="text-center">
            <div class="flex flex-col items-center gap-4">
              <div class="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <UIcon :name="feature.icon" class="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
                <p class="text-sm text-muted">{{ feature.description }}</p>
              </div>
            </div>
          </UCard>
        </div>
      </div>

      <!-- Testimonials -->
      <div class="mb-16">
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold mb-2">What Our Travelers Say</h2>
          <p class="text-muted">Real experiences from real travelers</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <UCard v-for="(testimonial, index) in testimonials" :key="index">
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-1 mb-2">
                <UIcon v-for="i in testimonial.rating" :key="i" name="i-lucide-star"
                  class="w-4 h-4 text-yellow-500 fill-yellow-500" />
              </div>
              <p class="text-muted italic">"{{ testimonial.text }}"</p>
              <div class="flex items-center gap-3 pt-4 border-t">
                <img :src="testimonial.avatar" :alt="testimonial.name" class="w-10 h-10 rounded-full" />
                <div>
                  <div class="font-semibold">{{ testimonial.name }}</div>
                  <div class="text-sm text-muted">{{ testimonial.location }}</div>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </div>

      <!-- Newsletter -->
      <UCard class="bg-primary/5 mb-16">
        <div class="text-center py-8">
          <h2 class="text-3xl font-bold mb-2">Stay Updated</h2>
          <p class="text-muted mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest tour deals, travel tips, and destination guides delivered to
            your inbox.
          </p>
          <form @submit.prevent="handleSubscribe" class="max-w-md mx-auto flex gap-2">
            <UInput v-model="email" type="email" placeholder="Enter your email" class="flex-1" />
            <UButton type="submit" :loading="isSubscribing" icon="i-lucide-mail">
              Subscribe
            </UButton>
          </form>
        </div>
      </UCard>

      <!-- Final CTA -->
      <UCard class="bg-linear-to-r from-primary/10 to-primary/5">
        <div class="text-center py-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p class="text-lg text-muted mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied travelers and discover the world with us. Browse our tours or get in touch to
            plan your perfect trip.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton to="/tours" size="lg" icon="i-lucide-map">
              Explore Tours
            </UButton>
            <UButton to="/contact-us" variant="outline" size="lg" icon="i-lucide-mail">
              Contact Us
            </UButton>
          </div>
        </div>
      </UCard>
    </UContainer>
  </UPage>
</template>