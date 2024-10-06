<template>
  <main
    class="h-screen flex items-center justify-center bg-[url('/images/bg/6.jpg')] before:content-[''] before:inset-0 before:absolute before:bg-black before:opacity-50"
  >
    <section class="absolute">
      <UCard
        :ui="{
          base: 'w-screen h-screen   sm:h-auto sm:w-96',
          rounded: 'rounded-none md:rounded-lg',
        }"
      >
        <UButton to="/" variant="link" class="mx-auto block">
          <img class="mx-auto" src="/images/logo-icon.png" title="" alt="" />
        </UButton>

        <slot />
      </UCard>
    </section>
  </main>
</template>