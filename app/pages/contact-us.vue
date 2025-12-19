<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isLoading = ref(false)
const toast = useToast()

const { t } = useI18n()
const schema = {
  name: {
    required: true,
    message: t('contactUs.form.nameRequired')
  },
  email: {
    required: true,
    type: 'email',
    message: t('contactUs.form.emailRequired')
  },
  phone: {
    required: false
  },
  subject: {
    required: true,
    message: t('contactUs.form.subjectRequired')
  },
  message: {
    required: true,
    message: t('contactUs.form.messageRequired')
  }
}

const contactInfo = computed(() => [
  {
    icon: 'i-lucide-map-pin',
    title: t('contactUs.info.address'),
    content: '123 Tour Street, Travel City, TC 12345',
    link: '#'
  },
  {
    icon: 'i-lucide-phone',
    title: t('contactUs.info.phone'),
    content: '+989198881400',
    link: 'tel:+989198881400'
  },
  {
    icon: 'i-lucide-mail',
    title: t('contactUs.info.email'),
    content: 'info@tourcode.ir',
    link: 'mailto:info@tourcode.ir'
  },
  {
    icon: 'i-lucide-clock',
    title: t('contactUs.info.businessHours'),
    content: 'Sat - Wed: 9:00 AM - 6:00 PM',
    link: '#'
  }
])

const handleSubmit = async () => {
  isLoading.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  isLoading.value = false
  toast.add({
    title: t('contactUs.toast.messageSent'),
    description: t('contactUs.toast.messageSentDescription'),
    color: 'success'
  })

  // Reset form
  form.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
}
</script>

<template>
  <UPage class="py-8 md:py-12">
    <UContainer>
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ $t('contactUs.hero.title') }}</h1>
        <p class="text-lg text-muted max-w-2xl mx-auto">
          {{ $t('contactUs.hero.description') }}
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid md:grid-cols-12 gap-8">
        <!-- Contact Form -->
        <div class="md:col-span-8">
          <UCard>
            <template #header>
              <h2 class="text-2xl font-semibold">{{ $t('contactUs.form.title') }}</h2>
            </template>

            <UForm :schema="schema" :state="form" @submit="handleSubmit" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <UFormField :label="$t('contactUs.form.fullName')" name="name" required>
                  <UInput v-model="form.name" :placeholder="$t('contactUs.form.namePlaceholder')" icon="i-lucide-user" class="w-full" />
                </UFormField>

                <UFormField :label="$t('contactUs.form.email')" name="email" required>
                  <UInput v-model="form.email" type="email" :placeholder="$t('contactUs.form.emailPlaceholder')" icon="i-lucide-mail" class="w-full" />
                </UFormField>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <UFormField :label="$t('contactUs.form.phone')" name="phone">
                  <UInput v-model="form.phone" type="tel" :placeholder="$t('contactUs.form.phonePlaceholder')" icon="i-lucide-phone" class="w-full" />
                </UFormField>

                <UFormField :label="$t('contactUs.form.subject')" name="subject" required>
                  <UInput v-model="form.subject" :placeholder="$t('contactUs.form.subjectPlaceholder')" icon="i-lucide-tag" class="w-full" />
                </UFormField>
              </div>

              <UFormField :label="$t('contactUs.form.message')" name="message" required>
                <UTextarea v-model="form.message"
                  :placeholder="$t('contactUs.form.messagePlaceholder')"
                  :rows="6" class="w-full" />
              </UFormField>

              <UButton type="submit" size="lg" block :loading="isLoading" icon="i-lucide-send">
                {{ $t('contactUs.form.sendMessage') }}
              </UButton>
            </UForm>
          </UCard>
        </div>

        <!-- Contact Information -->
        <div class="md:col-span-4">
          <div class="space-y-6">
            <UCard v-for="(info, index) in contactInfo" :key="index">
              <div class="flex items-start gap-4">
                <div class="shrink-0">
                  <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <UIcon :name="info.icon" class="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="font-semibold mb-1">{{ info.title }}</h3>
                  <p class="text-sm text-muted">
                    <a v-if="info.link && info.link !== '#'" :href="info.link"
                      class="hover:text-primary transition-colors">
                      {{ info.content }}
                    </a>
                    <span v-else>{{ info.content }}</span>
                  </p>
                </div>
              </div>
            </UCard>

            <!-- Social Media -->
            <UCard>
              <template #header>
                <h3 class="font-semibold">{{ $t('contactUs.info.followUs') }}</h3>
              </template>
              <div class="flex gap-3 justify-center">
                <UButton color="neutral" variant="outline" icon="i-simple-icons-facebook" aria-label="Facebook"
                  to="#" />
                <UButton color="neutral" variant="outline" icon="i-simple-icons-instagram" aria-label="Instagram"
                  to="#" />
                <UButton color="neutral" variant="outline" icon="i-simple-icons-twitter" aria-label="Twitter" to="#" />
                <UButton color="neutral" variant="outline" icon="i-simple-icons-youtube" aria-label="YouTube" to="#" />
              </div>
            </UCard>
          </div>
        </div>
      </div>

      <!-- Map Section (Placeholder) -->
      <div class="mt-12">
        <UCard>
          <template #header>
            <h2 class="text-2xl font-semibold">{{ $t('contactUs.map.title') }}</h2>
          </template>
          <div class="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
            <div class="text-center">
              <UIcon name="i-lucide-map" class="w-16 h-16 text-muted mb-4 mx-auto" />
              <p class="text-muted">{{ $t('contactUs.map.placeholder') }}</p>
            </div>
          </div>
        </UCard>
      </div>
    </UContainer>
  </UPage>
</template>