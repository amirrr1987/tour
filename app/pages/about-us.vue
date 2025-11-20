<script setup lang="ts">
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
    description: 'Your safety is our top priority. All our tours are carefully planned and executed with the highest safety standards.'
  },
  {
    icon: 'i-lucide-heart',
    title: 'Passionate Guides',
    description: 'Our experienced and passionate tour guides are dedicated to making your journey unforgettable.'
  },
  {
    icon: 'i-lucide-sparkles',
    title: 'Unique Experiences',
    description: 'We curate unique and authentic experiences that go beyond the typical tourist attractions.'
  },
  {
    icon: 'i-lucide-dollar-sign',
    title: 'Best Value',
    description: 'We offer competitive prices without compromising on quality, ensuring you get the best value for your money.'
  },
  {
    icon: 'i-lucide-headphones',
    title: '24/7 Support',
    description: 'Our customer support team is available around the clock to assist you with any questions or concerns.'
  },
  {
    icon: 'i-lucide-leaf',
    title: 'Eco-Friendly',
    description: 'We are committed to sustainable tourism and environmental conservation in all our operations.'
  }
]

const values = [
  {
    icon: 'i-lucide-target',
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our service, from planning to execution.'
  },
  {
    icon: 'i-lucide-handshake',
    title: 'Integrity',
    description: 'We conduct our business with honesty, transparency, and ethical practices.'
  },
  {
    icon: 'i-lucide-smile',
    title: 'Customer First',
    description: 'Your satisfaction and happiness are at the heart of everything we do.'
  },
  {
    icon: 'i-lucide-lightbulb',
    title: 'Innovation',
    description: 'We continuously innovate to provide better experiences and stay ahead of the curve.'
  }
]
</script>

<template>
  <UPage class="py-8 md:py-12">
    <UContainer>
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p class="text-lg text-muted max-w-3xl mx-auto">
          We are passionate about creating unforgettable travel experiences. With years of expertise and a deep love for
          exploration, we bring you the best tours and adventures around the world.
        </p>
      </div>

      <!-- Statistics Section -->
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

      <!-- Our Story Section -->
      <div class="mb-16">
        <UCard>
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 class="text-3xl font-bold mb-4">Our Story</h2>
              <div class="space-y-4 text-muted">
                <p>
                  Founded in 2009, our tour company began with a simple mission: to share the beauty and wonder of the
                  world with travelers seeking authentic experiences. What started as a small local operation has grown
                  into a trusted name in the travel industry.
                </p>
                <p>
                  Our journey has been shaped by thousands of travelers who have trusted us with their adventures. Each
                  tour we create is carefully crafted to provide not just a trip, but a transformative experience that
                  creates lasting memories.
                </p>
                <p>
                  Today, we continue to expand our offerings while maintaining our core values of quality, safety, and
                  customer satisfaction. We believe that travel has the power to change lives, and we're honored to be
                  part of your journey.
                </p>
              </div>
            </div>
            <div class="w-full h-80 bg-muted rounded-lg flex items-center justify-center">
              <div class="text-center">
                <UIcon name="i-lucide-image" class="w-16 h-16 text-muted mb-4 mx-auto" />
                <p class="text-muted">Image placeholder</p>
              </div>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Mission & Vision -->
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <UCard>
          <div class="flex items-start gap-4 mb-4">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <UIcon name="i-lucide-compass" class="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-3">Our Mission</h3>
              <p class="text-muted">
                To provide exceptional travel experiences that inspire, educate, and create lasting memories while
                promoting sustainable tourism and supporting local communities.
              </p>
            </div>
          </div>
        </UCard>

        <UCard>
          <div class="flex items-start gap-4 mb-4">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <UIcon name="i-lucide-eye" class="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 class="text-2xl font-bold mb-3">Our Vision</h3>
              <p class="text-muted">
                To become the world's most trusted and innovative tour company, known for creating transformative travel
                experiences that connect people with cultures, nature, and themselves.
              </p>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Why Choose Us -->
      <div class="mb-16">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p class="text-lg text-muted max-w-2xl mx-auto">
            We go above and beyond to ensure your travel experience is nothing short of extraordinary.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UCard v-for="(feature, index) in features" :key="index">
            <div class="flex flex-col gap-4">
              <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <UIcon :name="feature.icon" class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
                <p class="text-sm text-muted">{{ feature.description }}</p>
              </div>
            </div>
          </UCard>
        </div>
      </div>

      <!-- Our Values -->
      <div class="mb-16">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p class="text-lg text-muted max-w-2xl mx-auto">
            These core values guide everything we do and shape the experiences we create for our travelers.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UCard v-for="(value, index) in values" :key="index" class="text-center">
            <div class="flex flex-col items-center gap-4">
              <div class="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <UIcon :name="value.icon" class="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">{{ value.title }}</h3>
                <p class="text-sm text-muted">{{ value.description }}</p>
              </div>
            </div>
          </UCard>
        </div>
      </div>

      <!-- Call to Action -->
      <UCard class="bg-primary/5">
        <div class="text-center py-8">
          <h2 class="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p class="text-lg text-muted mb-6 max-w-2xl mx-auto">
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