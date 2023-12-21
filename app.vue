<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'Donations',
  meta: [
    { name: 'description', content: 'Donations to help the community.' }
  ],
  htmlAttrs: {
    lang: 'en',
  }
})
</script>
