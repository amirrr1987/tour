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

const schema = {
  name: {
    required: true,
    message: 'Name is required'
  },
  email: {
    required: true,
    type: 'email',
    message: 'Please enter a valid email address'
  },
  phone: {
    required: false
  },
  subject: {
    required: true,
    message: 'Subject is required'
  },
  message: {
    required: true,
    message: 'Message is required'
  }
}

const contactInfo = [
  {
    icon: 'i-lucide-map-pin',
    title: 'Address',
    content: '123 Tour Street, Travel City, TC 12345',
    link: '#'
  },
  {
    icon: 'i-lucide-phone',
    title: 'Phone',
    content: '+989198881400',
    link: 'tel:+989198881400'
  },
  {
    icon: 'i-lucide-mail',
    title: 'Email',
    content: 'info@tourcode.ir',
    link: 'mailto:info@tourcode.ir'
  },
  {
    icon: 'i-lucide-clock',
    title: 'Business Hours',
    content: 'Sat - Wed: 9:00 AM - 6:00 PM',
    link: '#'
  }
]

const handleSubmit = async () => {
  isLoading.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  isLoading.value = false
  toast.add({
    title: 'Message Sent!',
    description: 'Thank you for contacting us. We will get back to you soon.',
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
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p class="text-lg text-muted max-w-2xl mx-auto">
          Have questions about our tours? We'd love to hear from you. Send us a message and we'll respond as soon as
          possible.
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid md:grid-cols-12 gap-8">
        <!-- Contact Form -->
        <div class="md:col-span-8">
          <UCard>
            <template #header>
              <h2 class="text-2xl font-semibold">Send us a Message</h2>
            </template>

            <UForm :schema="schema" :state="form" @submit="handleSubmit" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <UFormField label="Full Name" name="name" required>
                  <UInput v-model="form.name" placeholder="John Doe" icon="i-lucide-user" class="w-full" />
                </UFormField>

                <UFormField label="Email Address" name="email" required>
                  <UInput v-model="form.email" type="email" placeholder="john@example.com" icon="i-lucide-mail" class="w-full" />
                </UFormField>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <UFormField label="Phone Number" name="phone">
                  <UInput v-model="form.phone" type="tel" placeholder="+1 (555) 123-4567" icon="i-lucide-phone" class="w-full" />
                </UFormField>

                <UFormField label="Subject" name="subject" required>
                  <UInput v-model="form.subject" placeholder="Tour inquiry" icon="i-lucide-tag" class="w-full" />
                </UFormField>
              </div>

              <UFormField label="Message" name="message" required>
                <UTextarea v-model="form.message"
                  placeholder="Tell us about your tour preferences, questions, or any special requirements..."
                  :rows="6" class="w-full" />
              </UFormField>

              <UButton type="submit" size="lg" block :loading="isLoading" icon="i-lucide-send">
                Send Message
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
                <h3 class="font-semibold">Follow Us</h3>
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
            <h2 class="text-2xl font-semibold">Find Us</h2>
          </template>
          <div class="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
            <div class="text-center">
              <UIcon name="i-lucide-map" class="w-16 h-16 text-muted mb-4 mx-auto" />
              <p class="text-muted">Map integration can be added here</p>
            </div>
          </div>
        </UCard>
      </div>
    </UContainer>
  </UPage>
</template>