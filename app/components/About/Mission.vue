<template>
  <UContainer>
    <div class="grid md:grid-cols-2 gap-8 mb-16">
      <UCard>
        <div class="flex items-start gap-4 mb-4">
          <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <UIcon name="i-lucide-compass" class="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-3">{{ $t('aboutUs.mission.title') }}</h3>
            <p class="text-muted">
              {{ $t('aboutUs.mission.description') }}
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
            <h3 class="text-2xl font-bold mb-3">{{ $t('aboutUs.vision.title') }}</h3>
            <p class="text-muted">
              {{ $t('aboutUs.vision.description') }}
            </p>
          </div>
        </div>
      </UCard>
    </div>
  </UContainer>
</template>
