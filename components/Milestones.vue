<template>
    <div class="container">
        <div class="relative my-32 md:my-24">
            <NuxtImg class="shadow-md rounded-md" src="/images/children-2.png" width="1300" height="550" alt="Childrens"
                loading="lazy" />
            <div
                class="bg-primary flex flex-col justify-center gap-3 md:gap-4 px-2  md:px-10  py-2 md:py-6 rounded-md shadow-md items-center text-white absolute w-3/4 left-1/2 top-1/2 right-32 h-fit -translate-y-1/2 -translate-x-1/2 md:h-3/4 md:left-auto md:w-fit md:translate-x-0">
                <p class="text-white text-center">Our first milestone</p>
                <h6 class="font-bold  text-center text-2xl md:text-4xl text-white">$13M</h6>
                <p class="text-white text-center ">We collected 8M donation</p>
                <div class="relative w-full">
                    <span class="range-bg w-full h-1 bg-gray-300 block rounded-md"></span>
                    <span
                        class="fill-bg w-3/4 h-1 bg-white block rounded-md absolute top-0 left-0 border-r border-gray-500"></span>
                </div>
                <p class="text-white opacity-75 text-sm text-center">Last transaction 5 min ago</p>
                <button class="btn-primary bg-[#756ED7] w-full mt-2 ">Donate Now</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const milestones = [
    10000,
    1000000,
    100000000,
    10000000000,
    1000000000000,
]
</script>
