<script setup lang="ts">
  import type { IFilter } from '~/models/filter.model'

  const formData = ref<Pick<IFilter, 'search' | 'location' | 'startDate'>>({
    search: '',
    location: '',
    startDate: ''
  })

  const search = useRouteQuery<string>('search', '')
  const location = useRouteQuery<string>('location', '')
  const startDate = useRouteQuery<string>('start-date', '')

  const handleSearch = () => {
    if (formData.value.search) {
      search.value = formData.value.search
    }
    if (formData.value.location) {
      location.value = formData.value.location
    }
    if (formData.value.startDate) {
      startDate.value = formData.value.startDate
    }

    navigateTo({
      path: '/tours',
      query: {
        search: search.value,
        location: location.value,
        'start-date': startDate.value
      }
    })
  }
</script>
<template>
  <section
    class="relative py-20 md:py-32 bg-linear-to-br from-primary/10 via-background to-background"
  >
    <UContainer>
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          {{ $t('components.landing.hero.title') }}
          <span class="text-primary">{{ $t('components.landing.hero.titleHighlight') }}</span>
        </h1>
        <p class="text-xl text-muted mb-8 max-w-2xl mx-auto">
          {{ $t('components.landing.hero.description') }}
        </p>

        <!-- Search Bar -->
        <UCard class="max-w-3xl mx-auto">
          <form @submit.prevent="handleSearch" class="space-y-4">
            <div class="grid md:grid-cols-3 gap-4">
              <UFormField :label="$t('components.landing.hero.searchTours')">
                <UInput
                  v-model="formData.search"
                  :placeholder="$t('components.landing.hero.searchPlaceholder')"
                  icon="i-lucide-search"
                  class="w-full"
                />
              </UFormField>
              <UFormField :label="$t('components.landing.hero.destination')">
                <UInput
                  v-model="formData.location"
                  :placeholder="$t('components.landing.hero.destinationPlaceholder')"
                  icon="i-lucide-map-pin"
                  class="w-full"
                />
              </UFormField>
              <UFormField :label="$t('components.landing.hero.date')">
                <UInput
                  v-model="formData.startDate"
                  type="date"
                  icon="i-lucide-calendar"
                  class="w-full"
                />
              </UFormField>
            </div>
            <UButton type="submit" size="lg" block icon="i-lucide-search">
              {{ $t('components.landing.hero.searchButton') }}
            </UButton>
          </form>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
