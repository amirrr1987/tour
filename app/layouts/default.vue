<template>
  <div class="h-screen flex flex-col">
    <div class="bg-blue-500">
      <h1>Header</h1>
    </div>
    <div class="bg-green-500 flex-1">
      <slot />
    </div>
    <div class="bg-yellow-500">
      <h1>Footer</h1>
    </div>
  </div>
</template>
