<template>
    <NuxtLayout name="404">
        <Header />
        <div class="min-h-[500px] mt-40">
            <h2
                class="text-3xl text-primary-4 font-secondary md:text-4xl lg:text-5xl xl:text-8xl container-slim text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">
                Oh...It seems you are lost?
            </h2>
            <h3 class="text-2xl text-secondary-1 font-secondary md:text-3xl lg:text-4xl text-center my-4">
                {{ error.message }}
            </h3>
            <a href="/"
                class="bg-secondary-1 p-4 rounded-md shadow-md text-white font-bold w-fit transition-colors block mx-auto">
                Take me home
                <Icon name="material-symbols:arrow-right-alt" />
            </a>
        </div>

        <Footer />
    </NuxtLayout>
</template>
<script setup>
import { computed, ref } from 'vue'
const error = useError();
const test = ref(error.message);
</script>