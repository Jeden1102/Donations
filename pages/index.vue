<template>
  <div class="overflow-x-hidden">
    <Header />
    <Hero />
    <HeroCards />
    <Workshop />
    <Collections />
    <SliderSeparator :items="itemsSeparator" />
    <Features />
    <WorkshopSlider :items="workshopSlides" />
    <FooterCta/>
    <Newsletter/>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
const itemsSeparator = [
  "inspiring community",
  "outstanding candles",
  "magic moments",
  "best candles in the world",
]
const workshopSlides = [
  {
    title: 'ceramic workshop',
    img: 'candle-shaped-1.png',
  },
  {
    title: 'scented candles workshop',
    img: 'candle-shaped-2.png',
  },
  {
    title: 'painting workshop',
    img: 'candle-shaped-1.png',
  },
  {
    title: 'magic candles workshop',
    img: 'candle-shaped-2.png',
  },
]
</script>

<style  lang="scss">
@use "./assets/style/variables.scss" as *;
@use "./assets/style/style.scss" as *;
@use "./assets/style/mixin.scss" as *;
</style>