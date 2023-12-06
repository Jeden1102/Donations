<template>
  <footer class="text-primary-4">
    <div class="container-slim flex flex-col gap-4 md:flex-row justify-between">
      <div class="flex flex-col gap-4 p-4 max-w-[600px]">
        <p class="font-bold uppercase text-3xl md:text-4xl font-secondary">cera</p>
        <p>Where art, expression, and growth intertwine. Explore pottery, scented candles, and workshops. Join us to
          unleash
          your creativity and experience the magic of CERA.</p>
        <p class="opacity-75">Coppyright © {{ currentYear }} - All rights reserved</p>
      </div>
      <div class="flex flex-col gap-4 p-4">
        <p class="text-2xl font-bold">Find us on</p>
        <div class="flex gap-2">
          <a href="#"
            class="w-9 h-9 rounded-full p-2 bg-primary-4 flex items-center transition-opacity justify-center opacity-90 hover:opacity-100">
            <Icon name="fa6-brands:facebook-f" class="text-white" />
          </a>
          <a href="#"
            class="w-9 h-9 rounded-full p-2 bg-primary-4 flex items-center transition-opacity justify-center opacity-90 hover:opacity-100">
            <Icon name="ri:twitter-x-fill" class="text-white" />
          </a>
          <a href="#"
            class="w-9 h-9 rounded-full p-2 bg-primary-4 flex items-center transition-opacity justify-center opacity-90 hover:opacity-100">
            <Icon name="ion:logo-instagram" class="text-white" />
          </a>
        </div>
        <div class="flex gap-2">
          <a href="#">
            More about us
          </a>
          <a href="#">
            Terms&Conditions
          </a>
        </div>
      </div>

    </div>
    <img class="w-full" src="/icons/footer-shape.svg" alt="">
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
