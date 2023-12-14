<template>
    <div class="container">
        <div class="flex flex-col gap-6 md:flex-row md:items-center">
            <div>
                <NuxtImg src="/images/children.png"/>
            </div>
            <div class="flex flex-col gap-4 md:w-1/2">
                <p class="text-2xl md:text-3xl">We've funded $23,135 food projects for 5.3M people around the worldwide.</p>
                <p class="opacity-75">Get your tests delivered at let home collect sample from the victory of the managments
                    that supplies best
                    design system guidelines ever.</p>
                <ul class="grid sm:grid-cols-2">
                    <li class="flex items-center gap-2" v-for="(feature, key) in features">
                        {{ feature }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const features = ['Medical and vision', 'Life insurance', 'HSAs and FSAs', 'Commuter benefits']
</script>
<style lang="scss" scoped>
ul {
    li {
        &::before {
            content: url('/icons/checkmark.svg');
        }
    }
}
</style>
