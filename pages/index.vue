<template>
  <div class="overflow-x-hidden min-h-screen">
    <HeroDonation />
    <Services />
    <Stats />
    <VideoSection />
    <Map />
    <Milestones />
    <BlogTeasers />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
if (route.query.code) {
  navigateTo('/mail-verified')
}
</script>

<style lang="scss">
@use "./assets/style/variables.scss" as *;
@use "./assets/style/style.scss" as *;
@use "./assets/style/mixin.scss" as *;
</style>