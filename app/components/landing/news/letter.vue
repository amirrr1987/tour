<script setup lang="ts">
  const { t } = useI18n()
  const email = ref('')
  const isSubscribing = ref(false)
  const toast = useToast()

  const handleSubscribe = async () => {
    if (!email.value) {
      toast.add({
        title: t('components.landing.newsletter.emailRequired'),
        description: t('components.landing.newsletter.emailRequiredDescription'),
        color: 'warning'
      })
      return
    }

    isSubscribing.value = true
    await new Promise(resolve => setTimeout(resolve, 1000))
    isSubscribing.value = false

    toast.add({
      title: t('components.landing.newsletter.subscribed'),
      description: t('components.landing.newsletter.subscribedDescription'),
      color: 'success'
    })

    email.value = ''
  }
</script>
<template>
  <UContainer class="">
    <UCard class="bg-primary/5 mb-16">
      <div class="text-center py-8">
        <h2 class="text-3xl font-bold mb-2">{{ $t('components.landing.newsletter.title') }}</h2>
        <p class="text-muted mb-6 max-w-2xl mx-auto">
          {{ $t('components.landing.newsletter.description') }}
        </p>
        <form @submit.prevent="handleSubscribe" class="max-w-md mx-auto flex gap-2">
          <UInput v-model="email" type="email" :placeholder="$t('components.landing.newsletter.emailPlaceholder')" class="flex-1" />
          <UButton type="submit" :loading="isSubscribing" icon="i-lucide-mail"> {{ $t('components.landing.newsletter.subscribe') }} </UButton>
        </form>
      </div>
    </UCard>
  </UContainer>
</template>
