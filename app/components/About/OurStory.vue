<template>
  <UContainer>
    <div class="mb-16">
      <UCard>
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-4">{{ $t('aboutUs.ourStory.title') }}</h2>
            <div class="space-y-4 text-muted">
              <p>
                {{ $t('aboutUs.ourStory.paragraph1') }}
              </p>
              <p>
                {{ $t('aboutUs.ourStory.paragraph2') }}
              </p>
              <p>
                {{ $t('aboutUs.ourStory.paragraph3') }}
              </p>
            </div>
          </div>
          <div class="w-full h-80 bg-muted rounded-lg flex items-center justify-center">
            <div class="text-center">
              <UIcon name="i-lucide-image" class="w-16 h-16 text-muted mb-4 mx-auto" />
              <p class="text-muted">{{ $t('aboutUs.ourStory.imagePlaceholder') }}</p>
            </div>
          </div>
        </div>
      </UCard>
    </div>
  </UContainer>
</template>
