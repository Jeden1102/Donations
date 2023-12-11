<template>
    <div class="w-full h-24 p-4">
        <carousel :items-to-show="1" :breakpoints="breakpoints" :wrap-around="true" :autoplay="1000">
            <slide v-for="(item, key) in items" :key="key">
                <div class="flex items-center gap-4">
                    <p class="font-secondary text-2xl lg:text-3xl">
                        {{ item }}
                    </p>
                    <div v-if="key % 2 !== 0">
                        <NuxtImg loading="lazy" format="webp" src="/icons/star.svg" alt="Star icon" width="80" height="80"/>
                    </div>
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    items: string[];
}>();
const breakpoints = {
    700: {
        itemsToShow: 2,
    },
    // 1024 and up
    1024: {
        itemsToShow: 3,
    },
}
</script>
