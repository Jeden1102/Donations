<template>
  <div class="bg-primary-1 relative md:pt-12 md:pb-40">
    <NuxtImg format="webp" class="hidden md:block absolute left-0 top-[-50%]" src="/icons/plant-shape-1.svg" alt="Plant icon."/>
    <NuxtImg format="webp" class="hidden md:block absolute right-0 top-0" src="/icons/plant-shape-2.svg" alt="Plant icon."/>
    <div class="container-slim flex flex-wrap justify-center gap-4 cards pb-8">
      <HeroCard v-for="card in cards" :card="card" />
    </div>
  </div>
</template>
<script lang="ts" setup>
const cards = [
  {
    title: "Candles",
    items: [
      "Fragrance selection",
      "Waxing",
      "Wick placement",
    ],
  },
  {
    title: "Ceramics",
    items: [
      "Ceramic turning",
      "Ceramic modeling",
      "Painting",
      "Porcelain paint",
    ],
  },
  {
    title: "Decorative",
    variant: "secondary-2",
    items: [
      "Glazing",
      "Painting and Detailing",
      "Kiln firing",
    ],
  },
];
</script>
<style lang="scss">
.card{
  &:nth-child(1){
    @apply bg-primary-3 lg:rotate-12;
  }
  &:nth-child(2){
    @apply bg-primary-2 lg:-rotate-12;
  } 
  &:nth-child(3){
    @apply bg-secondary-2 lg:rotate-12;
  }
}
</style>