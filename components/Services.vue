<template>
    <section class="container">
        <div class="my-8 md:my-20">
            <h2 class="text-center text-primary">Service we work for</h2>
            <h3 class="text-center mt-4 mb-8 text-xl">What care we do for your family</h3>
            <div class="shadow-lg p-4 rounded-md flex gap-4 flex-wrap md:p-8">
                <div class="w-72 mx-auto flex flex-col justify-center items-center gap-3 px-3 py-4 rounded-md  transition-all cursor-pointer hover:bg-gray-50 group"
                    v-for="(service, key) in services" :key="key">
                    <NuxtImg class="transition-all group-hover:-translate-y-1" :src="`/icons/${service.icon}`" />
                    <p class="font-bold">{{ service.title }}</p>
                    <p class="text-center">{{ service.description }}</p>
                    <NuxtLink class="text-secondary" to="#">Learn more</NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const services = [
    {
        icon: 'heart-hand.svg',
        title: 'Donate Blood',
        description: 'Get your info tests delivered at home collect a sample from the your task.',
    },
    {
        icon: 'baloon.svg',
        title: 'Pledge for cause',
        description: 'Get your info tests delivered at home collect a sample from the your task.',
    },
    {
        icon: 'heart-plant.svg',
        title: 'Life for a life',
        description: 'Get your info tests delivered at home collect a sample from the your task.',
    },
    {
        icon: 'heads.svg',
        title: 'Volunteer with us',
        description: 'Get your info tests delivered at home collect a sample from the your task.',
    },
    {
        icon: 'hands-2.svg',
        title: 'Partner with us',
        description: 'Get your info tests delivered at home collect a sample from the your task.',
    },
    {
        icon: 'hands-heart.svg',
        title: 'Help us for educational',
        description: 'Get your info tests delivered at home collect a sample from the your task.',
    },
]
</script>