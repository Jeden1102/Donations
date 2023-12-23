<template>
    <section class="container" id="services">
        <div class="my-8 md:my-20 bg-gray-100 pt-8 rounded-md shadow-lg dark:bg-gray-600">
            <h2 class="text-center text-primary dark:text-gray-300 font-bold">Service we work for</h2>
            <h3 class="text-center mt-4 mb-8 text-xl dark:text-gray-300">What care we do for your family</h3>
            <div class="p-4 rounded-md flex gap-4 flex-wrap md:p-8">
                <div class="w-72 mx-auto flex flex-col justify-center items-center gap-3 px-3 py-4 rounded-md  transition-all cursor-pointer hover:bg-gray-50 group dark:hover:bg-gray-500"
                    v-for="(service, key) in services" :key="key">
                    <NuxtImg alt="Serivce icon." :height="service.iconHeight" :width="service.iconWidth ?? '64'"  format="webp" loading="lazy"  class="transition-all group-hover:-translate-y-1" :src="`/icons/${service.icon}`" />
                    <p class="font-bold">{{ service.title }}</p>
                    <p class="text-center">{{ service.description }}</p>
                    <NuxtLink class="text-secondary font-bold" to="#">Learn more</NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const services = [
    {
        icon: 'heart-hand.svg',
        iconHeight:'60',
        title: 'Donate Blood',
        description: 'Get your info tests delivered at home collect a sample from the your task.',
    },
    {
        icon: 'baloon.svg',
        iconHeight:'64',
        iconWidth:'56',
        title: 'Pledge for cause',
        description: 'Get your info tests delivered at home collect a sample from the your task.',
    },
    {
        icon: 'heart-plant.svg',
        iconHeight:'74',
        title: 'Life for a life',
        description: 'Get your info tests delivered at home collect a sample from the your task.',
    },
    {
        icon: 'heads.svg',
        iconHeight:'64',
        title: 'Volunteer with us',
        description: 'Get your info tests delivered at home collect a sample from the your task.',
    },
    {
        icon: 'hands-2.svg',
        iconHeight:'44',
        title: 'Partner with us',
        description: 'Get your info tests delivered at home collect a sample from the your task.',
    },
    {
        icon: 'hands-heart.svg',
        iconHeight:'60',
        title: 'Help us for educational',
        description: 'Get your info tests delivered at home collect a sample from the your task.',
    },
]
</script>