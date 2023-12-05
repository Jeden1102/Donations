<template>
    <div class="w-full py-4 bg-secondary-1">
        <carousel :items-to-show="1" :breakpoints="breakpoints" :wrap-around="true" :autoplay="3000">
            <slide v-for="(item, key) in items" :key="key">
                <div class="relative">
                    <img :src="`/images/${item.img}`" alt="Workshop item image.">
                    <p class="text-2xl  text-secondary-2 uppercase font-bold absolute left-4 bottom-4">
                        {{ item.title }}
                    </p>
                    <img class="absolute top-1/2 -right-8 -translate-y-1/2" src="/icons/hand-blue.svg" alt="Hand icon." width="103" height="103">
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script setup lang="ts">
interface workshopItem {
    title: string;
    img: string;
}
const props = defineProps<{
    items: workshopItem[];
}>();
const breakpoints = {
    700: {
        itemsToShow: 2,
    },
    1024: {
        itemsToShow: 3,
    },
}
</script>
