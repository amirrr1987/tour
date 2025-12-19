<template>
  <UContainer class="">
    <UCard class="bg-linear-to-r from-primary/10 to-primary/5">
      <div class="text-center py-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('components.landing.cta.title') }}</h2>
        <p class="text-lg text-muted mb-8 max-w-2xl mx-auto">
          {{ $t('components.landing.cta.description') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton to="/tours" size="lg" icon="i-lucide-map"> {{ $t('components.landing.cta.exploreTours') }} </UButton>
          <UButton to="/contact-us" variant="outline" size="lg" icon="i-lucide-mail">
            {{ $t('components.landing.cta.contactUs') }}
          </UButton>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>
