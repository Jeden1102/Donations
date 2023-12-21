<template>
    <section class="py-12 sm:py-16">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                <div v-for="stat in stats" class="mx-auto flex max-w-xs flex-col gap-y-4">
                    <p class="text-3xl md:text-4xl">{{ stat.number }}</p>
                    <p class="opacity-70">{{ stat.title }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const stats = [
    {
        title: 'Transactions every 24 hours',
        number: '44 million',
    },
    {
        title: 'Money already donated',
        number: '$119 trillion',
    },
    {
        title: 'New helpers annually',
        number: '46,000',
    }
]
</script>
