<template>
  <div class="bg-primary-1 p-4 flex flex-col gap-4">
    <HeroCard v-for="card in cards" :card="card" />
  </div>
</template>
<script lang="ts" setup>
const cards = [
  {
    title: "Candles",
    variant: "primary-3",
    items: [
      "Fragrance selection",
      "Wax melting and preparation",
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
    title: "Decorative ceramics",
    variant: "secondary-2",
    items: [
      "Glazing or Underglazing",
      "Painting and Detailing",
      "Kiln firing",
      "Multiple Firings",
    ],
  },
];
</script>
<style lang="scss" scoped>
.card {
}
</style>