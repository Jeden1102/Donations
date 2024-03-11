<template>
    <section class="container" id="blog">
        <div class="flex flex-col">
            <div class="my-8">
                <h2 class="text-center text-primary">Lates newsfeed</h2>
                <h3 class="text-center mt-4 mb-8 text-xl">Popular blog post we updated</h3>
            </div>
            <div class="flex flex-col md:flex-row gap-4">
                <div class="flex flex-col gap-2 flex-1" v-for="i in 3" :key="i">
                    <NuxtImg format="webp" loading="lazy" class="rounded-md w-full h-52" :src="`/images/blog-${i}.png`" alt="Blog image" width="419" height="209" />
                    <p class="font-bold">How to work with prototype design with adobe xd featuring tools</p>
                    <p class="mt-2 opacity-75">The 2019 Innovation by Design Awards honor the designers and businesses
                        solving the problems of today
                        and tomorrow. It is one of the most sought-after design</p>
                    <NuxtLink class="text-secondary font-bold" to="#">Learn more</NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss">
.img-overlay {
    @apply absolute left-0 top-0 w-full h-full;
    border-radius: 5px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.71) 99.95%);
}
</style>
