<template>
  <footer>
    <div class="py-6">
      <AContainer class="grid grid-cols-5 gap-4">
        <div>
          <h4 class="px-2 ">title</h4>
          <UDivider />
          <UVerticalNavigation :links="links" />
        </div>
        <div>
          <h4 class="px-2 ">title</h4>
          <UDivider />
          <UVerticalNavigation :links="links" />
        </div>
        <div>
          <h4 class="px-2 ">title</h4>
          <UDivider />
          <UVerticalNavigation :links="links" />
        </div>

        <img class="col-span-2 mr-auto" src="https://placehold.co/300x120" alt="">
      </AContainer>
    </div>
    <UDivider />
    <div class="py-6">
      <AContainer class="flex justify-between text-sm">
        <span>Copyright © 2022. All rights reserved.</span>
        <div class="flex gap-4">
          <UButton
            to="/"
            target="_blank"
            icon="hugeicons:instagram"
            :padded="false"
            variant="link"
            size="xl"
            color="gray"
          />
          <UButton
            to="/"
            target="_blank"
            icon="hugeicons:telegram"
            :padded="false"
            variant="link"
            size="xl"
            color="gray"
          />
          <UButton
            to="/"
            target="_blank"
            :padded="false"
            icon="hugeicons:whatsapp"
            variant="link"
            size="xl"
            color="gray"
          />
          <UButton
            to="/"
            target="_blank"
            :padded="false"
            icon="hugeicons:youtube"
            variant="link"
            size="xl"
            color="gray"
          />
          <UButton
            to="/"
            target="_blank"
            :padded="false"
            icon="hugeicons:skype"
            variant="link"
            size="xl"
            color="gray"
          />
        </div>
      </AContainer>
    </div>
  </footer>
</template>
<script setup lang="ts">
const route = useRoute();

const links = [
  {
    label: "Profile",
  },
  {
    label: "Installation",
    to: "/getting-started/installation",
  },
  {
    label: "Vertical Navigation",
    to: "/getting-started/installation",
  },
  {
    label: "Command Palette",
    to: "/components/command-palette",
  },
];
</script>
