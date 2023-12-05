<template>
  <div>
    <Header />
    <Hero />
    <HeroCards />
    <Workshop />
    <Collections/>
    <SliderSeparator :items="itemsSeparator"/>
  </div>
</template>

<script setup lang="ts">
const itemsSeparator = [
  "inspiring community",
  "outstanding candles",
  "magic moments",
  "best candles in the world",
]
</script>

<style  lang="scss">
@use "./assets/style/variables.scss" as *;
@use "./assets/style/style.scss" as *;

</style>