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
      description:
        'Your safety is our top priority. All our tours are carefully planned and executed with the highest safety standards.'
    },
    {
      icon: 'i-lucide-heart',
      title: 'Passionate Guides',
      description:
        'Our experienced and passionate tour guides are dedicated to making your journey unforgettable.'
    },
    {
      icon: 'i-lucide-sparkles',
      title: 'Unique Experiences',
      description:
        'We curate unique and authentic experiences that go beyond the typical tourist attractions.'
    },
    {
      icon: 'i-lucide-dollar-sign',
      title: 'Best Value',
      description:
        'We offer competitive prices without compromising on quality, ensuring you get the best value for your money.'
    },
    {
      icon: 'i-lucide-headphones',
      title: '24/7 Support',
      description:
        'Our customer support team is available around the clock to assist you with any questions or concerns.'
    },
    {
      icon: 'i-lucide-leaf',
      title: 'Eco-Friendly',
      description:
        'We are committed to sustainable tourism and environmental conservation in all our operations.'
    }
  ]

  const values = [
    {
      icon: 'i-lucide-target',
      title: 'Excellence',
      description:
        'We strive for excellence in every aspect of our service, from planning to execution.'
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
      description:
        'We continuously innovate to provide better experiences and stay ahead of the curve.'
    }
  ]
</script>

<template>
  <UPage class="py-8 md:py-12">
    <AboutHero />
    <AboutStatistics :stats="stats" />
    <AboutOurStory />
    <AboutMission />
    <AboutWhy :features="features" />
    <AboutOurValues :values="values" />
    <AboutCallToAction />
  </UPage>
</template>
