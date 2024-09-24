<template>
  <div class="py-4">
    <TheContainer class="flex flex-col md:flex-row md:justify-between gap-y-4">
      <div class="flex gap-x-2 justify-center md:order-2">
        <UButton
          to="/"
          icon="bi:github"
          size="sm"
          color="gray"
          square
          variant="link"
        />
        <UButton
          to="/"
          icon="bi:instagram"
          size="sm"
          color="gray"
          square
          variant="link"
        />
        <UButton
          to="/"
          icon="bi:telegram"
          size="sm"
          color="gray"
          square
          variant="link"
        />
        <UButton
          to="/"
          icon="bi:whatsapp"
          size="sm"
          color="gray"
          square
          variant="link"
        />
      </div>
      <div class="text-center md:order-1">
        طراحی شده توسط
        <UButton to="https://amirmaghami.ir/" variant="link"
          >امیر مقامی</UButton
        >
      </div>
    </TheContainer>
  </div>
</template>
