<script setup lang="ts">
  const email = ref('')
  const isSubscribing = ref(false)
  const toast = useToast()

  const handleSubscribe = async () => {
    if (!email.value) {
      toast.add({
        title: 'Email Required',
        description: 'Please enter your email address',
        color: 'warning'
      })
      return
    }

    isSubscribing.value = true
    await new Promise(resolve => setTimeout(resolve, 1000))
    isSubscribing.value = false

    toast.add({
      title: 'Subscribed!',
      description: 'Thank you for subscribing to our newsletter.',
      color: 'success'
    })

    email.value = ''
  }
</script>
<template>
  <UContainer class="">
    <UCard class="bg-primary/5 mb-16">
      <div class="text-center py-8">
        <h2 class="text-3xl font-bold mb-2">Stay Updated</h2>
        <p class="text-muted mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter and get the latest tour deals, travel tips, and destination
          guides delivered to your inbox.
        </p>
        <form @submit.prevent="handleSubscribe" class="max-w-md mx-auto flex gap-2">
          <UInput v-model="email" type="email" placeholder="Enter your email" class="flex-1" />
          <UButton type="submit" :loading="isSubscribing" icon="i-lucide-mail"> Subscribe </UButton>
        </form>
      </div>
    </UCard>
  </UContainer>
</template>
