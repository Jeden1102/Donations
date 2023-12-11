<template>
    <div class="flex flex-col gap-4 bg-secondary-1 py-4" id="features">
        <div class="container-slim p-4 md:p-8 lg:py-16">
            <div class="flex flex-col items-center justify-center lg:flex-row">
                <NuxtImg loading="lazy" format="webp" width="300" height="300" src="/images/candle-1.png" alt="Candle image."/>
                <NuxtImg loading="lazy" format="webp" width="300" height="200" class="scale-150 -translate-y-8" src="/icons/flowers.svg" alt="Flowers icon."/>
                <NuxtImg loading="lazy" format="webp" width="300" height="300" src="/images/candle-2.png" alt="Candle image."/>
            </div>
            <div class="flex flex-col gap-4 md:flex-row mt-12 md:gap-8">
                <div v-for="(feature, key) in features" class="flex flex-col gap-6 justify-center flex-1" :key="key">
                    <p class="text-2xl uppercase text-secondary-2 text-center font-bold">{{ feature.title }}</p>
                    <p class="text-center text-white">{{ feature.desc }}</p>
                </div>
            </div>
        </div>
        <h2
            class="text-4xl uppercase relative text-primary-2 font-secondary md:text-7xl lg:text-8xl xl:text-8xl container-slim w-full text-center border-t border-b py-5">
            .workshops.
        </h2>
    </div>
</template>

<script setup lang="ts">
const features = [
    {
        title: "many kind",
        desc: "We regularly organize various workshops and training related to crafts. Crafting masterpieces from clan and fragrance every month."
    },
    {
        title: "easy to join",
        desc: "Register for the workshop through our website or by contacting our team directly via 000-123-456 or cera.org@gmail.com",
    },
    {
        title: "connections",
        desc: "Our workshops allow you to connect with fellow artists and creative enthusiasts. Share ideas, inspiration, and experiences, and build lasting connections with like-minded individuals.",
    }
]
</script>