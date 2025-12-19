<script setup lang="ts">
  const { t } = useI18n()
  const stats = [
    {
      number: '10,000+',
      label: t('stats.happyTravelers'),
      icon: 'i-lucide-users'
    },
    {
      number: '500+',
      label: t('stats.toursCompleted'),
      icon: 'i-lucide-map'
    },
    {
      number: '50+',
      label: t('stats.destinations'),
      icon: 'i-lucide-globe'
    },
    {
      number: '15+',
      label: t('stats.yearsExperience'),
      icon: 'i-lucide-award'
    }
  ]

  const features = [
    {
      icon: 'i-lucide-shield-check',
      title: t('features.safeSecure'),
      description: t('features.safeSecureDesc')
    },
    {
      icon: 'i-lucide-heart',
      title: t('features.passionateGuides'),
      description: t('features.passionateGuidesDesc')
    },
    {
      icon: 'i-lucide-sparkles',
      title: t('features.uniqueExperiences'),
      description: t('features.uniqueExperiencesDesc')
    },
    {
      icon: 'i-lucide-dollar-sign',
      title: t('features.bestValue'),
      description: t('features.bestValueDesc')
    },
    {
      icon: 'i-lucide-headphones',
      title: t('features.support24'),
      description: t('features.support24Desc')
    },
    {
      icon: 'i-lucide-leaf',
      title: t('features.ecoFriendly'),
      description: t('features.ecoFriendlyDesc')
    }
  ]

  const values = [
    {
      icon: 'i-lucide-target',
      title: t('values.excellence'),
      description: t('values.excellenceDesc')
    },
    {
      icon: 'i-lucide-handshake',
      title: t('values.integrity'),
      description: t('values.integrityDesc')
    },
    {
      icon: 'i-lucide-smile',
      title: t('values.customerFirst'),
      description: t('values.customerFirstDesc')
    },
    {
      icon: 'i-lucide-lightbulb',
      title: t('values.innovation'),
      description: t('values.innovationDesc')
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
