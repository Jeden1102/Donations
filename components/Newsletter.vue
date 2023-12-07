<template>
    <div class="bg-primary-1 p-4 rounded-md flex flex-col items-center md:items-start md:p-12 container-slim gap-4 relative lg:-translate-y-12"
        id="newsletter">
        <h2
            class="text-3xl text-center text-secondary-1 font-secondary md:text-4xl md:text-left lg:text-5xl xl:text-8xl z-10">
            Join our newsletter
        </h2>
        <p class="text-center text-secondary-1  max-w-[800px] md:text-left z-10">Ignite teamwork and creativity with CERA's
            craft
            We are always looking to expand the marketing and development team to accelerate our growth.</p>
        <div class="flex gap-2">
            <label class="sr-only" for="email">E-mail address</label>
            <input id="email" type="text" class="bg-white border-none pl-4">
            <button class="bg-primary-4 font-bold text-white p-4">Subscribe</button>
        </div>
        <img src="/icons/plant-shape-5.svg" class="hidden md:block absolute left-1/2 bottom-0 z-0" alt="">
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