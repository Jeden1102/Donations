<template>
  <div
    class="p-4 flex flex-col gap-4 items-center shadow-md"
    :class="`bg-${card.variant}`"
  >
    <p class="text-secondary-1 text-xl font-bold">{{ card.title }}</p>
    <ul class="flex flex-wrap justify-center gap-x-4">
      <li class="flex items-center gap-2" v-for="item in card.items">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps({
  card: Object,
});
</script>
<style scoped lang="scss">
ul {
  li {
    &::before {
      content: "";
      width: 5px;
      height: 5px;
      display: block;
      border-radius: 50%;
      @apply bg-secondary-1;
    }
  }
}
</style>