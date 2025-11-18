<template>
  <nav class="py-4 border-b border-b-gray-200 dark:border-b-gray-800">
    <u-container class="flex justify-between items-center">
      <ul class="flex items-center gap-4">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about-us">About Us</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/tours">Tours</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact-us">Contact Us</nuxt-link>
        </li>
      </ul>
      <div>
        <UColorModeButton />
      </div>
    </u-container>
  </nav>
</template>
