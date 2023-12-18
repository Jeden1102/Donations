<template>
  <footer class="flex flex-col mt-24 bg-[#353448] py-8">
    <div class="container flex flex-col gap-4">
      <div class="flex flex-col gap-2 ">
        <p class="text-gray-200 text-2xl">Subscribe to get notified about update</p>
        <p class="text-gray-300">By subscribing with your mail, you will accept our privacy policy</p>
        <div class="flex flex-col sm:flex-row gap-2 my-2">
          <input class="bg-gray-200 px-4 rounded-md h-14" type="text" placeholder="Enter your email">
          <button class="btn-primary w-fit">
            Subscribe
          </button>
        </div>
      </div>
      <div class="flex items-center  gap-4 flex-wrap">
        <NuxtImg src="/icons/logo-white.svg" width="193" height="37" alt="Page logo" />
        <p class="text-gray-400">All rights reserved &copy; {{ currentYear }}</p>
        <div class="flex gap-8">
          <NuxtLink class="text-gray-200" to="#">Home</NuxtLink>
          <NuxtLink class="text-gray-200" to="#">Services</NuxtLink>
          <NuxtLink class="text-gray-200" to="#">About</NuxtLink>
          <NuxtLink class="text-gray-200" to="#">Blog</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
