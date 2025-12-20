<script setup lang="ts">
import type { Locale, Messages } from "@nuxt/ui";
import { en, fa_ir } from "@nuxt/ui/locale";

// Add ref for pre-loading indicator.
const isLoading = ref(true);

const { locale: i18nLocale } = useI18n();

const locale = computed<Locale<Messages>>(() => {
  return i18nLocale.value === "fa" ? fa_ir : en;
});

// Simulate pre-loading or connect to real app loading logic
onMounted(() => {
  // Replace the timeout with real loading detection if available
  setTimeout(() => {
    isLoading.value = false;
  }, 800);
});
</script>
<template>
  <UApp class="bg-gray-100 dark:bg-gray-900" :locale="locale" :dir="locale.dir">
    <NuxtRouteAnnouncer />
    <transition name="fade">
      <div
        v-if="isLoading"
        class="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
      >
        <div class="flex flex-col items-center gap-2">
          <span class="loader"></span>
        </div>
      </div>
    </transition>
    <div v-show="!isLoading">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>
<style>
.loader {
  transform: rotateZ(45deg);
  perspective: 1000px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  color: #fff;
}
.loader:before,
.loader:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  border-radius: 50%;
  transform: rotateX(70deg);
  animation: 1s spin linear infinite;
}
.loader:after {
  color: var(--ui-primary);
  transform: rotateY(70deg);
  animation-delay: 0.4s;
}

@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotateZ(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotateZ(360deg);
  }
}

@keyframes rotateccw {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@keyframes spin {
  0%,
  100% {
    box-shadow: 0.2em 0px 0 0px currentcolor;
  }
  12% {
    box-shadow: 0.2em 0.2em 0 0 currentcolor;
  }
  25% {
    box-shadow: 0 0.2em 0 0px currentcolor;
  }
  37% {
    box-shadow: -0.2em 0.2em 0 0 currentcolor;
  }
  50% {
    box-shadow: -0.2em 0 0 0 currentcolor;
  }
  62% {
    box-shadow: -0.2em -0.2em 0 0 currentcolor;
  }
  75% {
    box-shadow: 0px -0.2em 0 0 currentcolor;
  }
  87% {
    box-shadow: 0.2em -0.2em 0 0 currentcolor;
  }
}
</style>
