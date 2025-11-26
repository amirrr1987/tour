<template>
  <UContainer class="">
    <UCard class="bg-linear-to-r from-primary/10 to-primary/5">
      <div class="text-center py-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Adventure?</h2>
        <p class="text-lg text-muted mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied travelers and discover the world with us. Browse our tours or
          get in touch to plan your perfect trip.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton to="/tours" size="lg" icon="i-lucide-map"> Explore Tours </UButton>
          <UButton to="/contact-us" variant="outline" size="lg" icon="i-lucide-mail">
            Contact Us
          </UButton>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>
