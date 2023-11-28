<template>
  <div class="bg-primary-1 relative md:pt-12 md:pb-40">
    <img class="hidden md:block absolute left-0 top-[-50%]" src="/icons/plant-shape-1.svg" />
    <img class="hidden md:block absolute right-0 top-0" src="/icons/plant-shape-2.svg" />
    <div class="container-slim flex flex-wrap justify-center gap-4">
      <HeroCard v-for="card in cards" :card="card" />
    </div>
  </div>
</template>
<script lang="ts" setup>
const cards = [
  {
    title: "Candles",
    variant: "primary-3",
    items: [
      "Fragrance selection",
      "Waxing",
      "Wick placement",
    ],
  },
  {
    title: "Ceramics",
    variant: "primary-2",
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
<style lang="scss" scoped>
.card {}
</style>