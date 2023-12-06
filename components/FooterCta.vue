<template>
    <div class="bg-secondary-1 pt-16">
        <div
            class="flex flex-col gap-8 bg-primary-4 relative py-12 justify-center items-center custom-rounded lg:py-24 px-4">
            <h2
                class="text-3xl z-10 relative text-secondary-2 font-secondary md:text-4xl lg:text-5xl xl:text-8xl text-center max-w-[1200px]">
                Craft workshop team bulding
            </h2>
            <p class="text-center text-secondary-2 px-12 max-w-[800px]">Ignite teamwork and creativity with CERA's craft
                workshops.
                Collaborate, create, and
                bond as you craft
                personalized rugs and ceramics. Take home mementos of shared moments and lasting teamwork. Unleash
                creativity
                together at CERA.</p>
            <button
                class="bg-white p-4 rounded-md shadow-md text-primary-3 font-bold w-fit transition-colors  hover:bg-primary-3 hover:text-white">
                Upcoming Workshops
                <Icon name="material-symbols:arrow-right-alt" />
            </button>
            <div class="absolute w-full justify-between hidden lg:flex">
                <img width="250" height="250" src="/icons/plant-shape-3.svg" alt="Plant shape image.">
                <img width="250" height="250" src="/icons/plant-shape-4.svg" alt="Plant shape image.">
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "./assets/style/mixin.scss" as *;

.custom-rounded {
    @include breakpoint(medium) {
        border-radius: 30% 30% 0 0;
    }

    @include breakpoint(desktop) {
        border-radius: 40% 40% 0 0;
    }
}</style>