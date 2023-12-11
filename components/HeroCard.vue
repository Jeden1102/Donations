<template>
  <div
    class="p-4 flex flex-col gap-4 items-center justify-center shadow-md card relative w-72 h-72 p-8 md:w-96"
  >
    <p class="text-secondary-1 text-xl font-bold uppercase text-center">{{ card.title }}</p>
    <ul class="flex flex-wrap justify-center gap-x-4">
      <li class="flex items-center gap-2 text-center w-fit" v-for="item in card.items">
        {{ item }}
      </li>
    </ul>
    <NuxtImg loading="lazy" format="webp" src="/icons/hand.svg" alt="Hand icon" width="103" height="103"/>
  </div>
</template>
<script setup>
const props = defineProps({
  card: Object,
});
</script>
<style scoped lang="scss">
.card{
  &::before{
    position: absolute;
    width:90%;
    height:90%;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
    content:'';
    border:1px solid white;
    pointer-events: none;
  }
}
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