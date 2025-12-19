<template>
  <UContainer>
    <UCard class="bg-primary/5">
      <div class="text-center py-8">
        <h2 class="text-3xl font-bold mb-4">{{ $t('aboutUs.cta.title') }}</h2>
        <p class="text-lg text-muted mb-6 max-w-2xl mx-auto">
          {{ $t('aboutUs.cta.description') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton to="/tours" size="lg" icon="i-lucide-map"> {{ $t('aboutUs.cta.exploreTours') }} </UButton>
          <UButton to="/contact-us" variant="outline" size="lg" icon="i-lucide-mail">
            {{ $t('aboutUs.cta.contactUs') }}
          </UButton>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>
