<template>
  <main
    class="h-screen flex items-center justify-center bg-[url('/images/bg/6.jpg')] before:content-[''] before:inset-0 before:absolute before:bg-black before:opacity-50"
  >
    <section class="absolute">
      <slot />
    </section>
  </main>
</template>
