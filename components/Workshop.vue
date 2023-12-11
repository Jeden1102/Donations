<template>
    <div class="bg-secondary-3 text-white relative py-8" id="crafted-universe">
        <NuxtImg loading="lazy" format="webp" class="hidden md:block absolute left-0 bottom-0 h-52 lg:h-72 xl:h-96" src="/icons/workshop-grid.png" alt="Ilus image"  />
        <div class="container-slim p-4 flex flex-col gap-8 md:flex-row z-10 relative md:p-8 lg:gap-20">
            <div class="flex flex-col gap-8 text-light lg:pb-20">
                <p>
                    Unleash your creativity through pottery - shape clay into extraordinary works of art. Our nurturing
                    studio
                    welcomes both beginners and seasoned potters, offering various techniques from wheel throwing to hand
                    sculpting.
                </p>
                <p>
                    Indulge in the captivating realm of scented candles. Let delicate aromas transport you to serene realms,
                    infusing warmth and tranquility into your surroundings.
                </p>
            </div>
            <div class="flex flex-col gap-3">
                <NuxtImg loading="lazy" format="webp" class="mx-auto md:ml-auto md:mr-4" src="/icons/ilus.svg" alt="Ilus image" width="122" height="122" />
                <h2
                    class="text-3xl z-10 relative text-primary-3 font-secondary md:text-4xl lg:text-5xl xl:text-8xl container-slim text-center">
                    Crafted
                    Universe
                </h2>
                <p class="text-lg md:text-xl font-bold text-primary-3">
                    Experience the Art of Pottery, Scented Candles, and Workshops with our experts.
                </p>
                <button class="bg-secondary-1 p-4 rounded-md shadow-md text-white font-bold w-fit transition-colors">
                    Upcoming Workshops
                    <Icon name="material-symbols:arrow-right-alt" />
                </button>
            </div>
        </div>
    </div>
</template>