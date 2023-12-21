<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
type Theme = 'light' | 'dark';

const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme
}
useHead({
  title: 'Candle shop',
  meta: [
    { name: 'description', content: 'Best candles shop in the area.' }
  ],
  htmlAttrs: {
    lang: 'en',
  }
})
</script>
