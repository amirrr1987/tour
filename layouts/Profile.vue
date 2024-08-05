<template>
  <TheNavbar />
  <section class="">
    <AContainer class="grid grid-cols-12 gap-4">
      <UCard class="col-span-3">
        <UVerticalNavigation :links="links" />
        <!-- <template #default="{ link }">
            <span class="group-hover:text-primary relative">{{
              link
            }}</span>
          </template> -->
      </UCard>
      <UCard class="col-span-9 !border-0">
        <slot />
      </UCard>
    </AContainer>
  </section>
  <TheFooter />
</template>

<script setup lang="ts">
const route = useRoute();
const logger = () => {
  console.log(3333333333333);
};
const links = [
  [],
  [
    {
      label: "اطلاعات من",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
      to: "/profile",
    },
    {
      label: "کیف پول",
      icon: "i-heroicons-home",
      to: "/profile/wallet",
    },
    {
      label: "اشتراک من",
      icon: "i-heroicons-chart-bar",
      to: `/profile/subscription`,
    },
    {
      label: "سوابق",
      icon: "i-heroicons-chart-bar",
      to: `/profile/receipt`,
    },
  ],
  [
    {
      label: "خروج از حساب کاربری",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
      click: logger,
    },
  ],
];
</script>
