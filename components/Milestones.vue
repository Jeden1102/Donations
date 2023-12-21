<template>
    <div class="container">
        <div class="relative my-32 md:my-24">
            <NuxtImg class="shadow-md rounded-md" src="/images/children-2.png" width="1300" height="550" alt="Childrens"
                loading="lazy" />
            <div v-if="donationData"
                class="bg-primary flex flex-col justify-center gap-3 md:gap-4 px-2  md:px-10  py-2 md:py-6 rounded-md shadow-md items-center text-white absolute w-3/4 left-1/2 top-1/2 right-32 h-fit -translate-y-1/2 -translate-x-1/2 md:h-3/4 md:left-auto md:w-fit md:translate-x-0">
                <p class="text-white text-center">Our {{ donationData.milestoneIndex + 1 }} milestone</p>
                <h6 class="font-bold  text-center text-2xl md:text-4xl text-white">${{
                    milestones[donationData.milestoneIndex] / 100 }}</h6>
                <p class="text-white text-center ">We collected ${{ donationData.sum }} donations</p>
                <div class="relative w-full">
                    <span class="range-bg w-full h-1 bg-gray-300 block rounded-md"></span>
                    <span :style="`width:${milestoneProgress}%`"
                        class="fill-bg h-1 bg-white block rounded-md absolute top-0 left-0 border-r border-gray-500 transition-all"></span>
                </div>
                <p class="text-white opacity-75 text-sm text-center">Last transaction ({{ donationData.last.amount / 100
                }}$)
                    {{ donationData.formattedTimeAgo }} by
                    {{
                        donationData.last.user_name ? donationData.last.user_name : donationData.last.user_email }}</p>
                <a href="https://buy.stripe.com/test_dR6dSgfG443o7rq3cc"
                    class="btn-primary bg-[#756ED7] w-full mt-2 text-center">Donate Now</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { createClient } from '@supabase/supabase-js'

const runtimeConfig = useRuntimeConfig();
const supabase = createClient(runtimeConfig.public.supabase.url, runtimeConfig.public.supabase.key)

const milestones = [
    1000, //10
    10000, //100
    100000, //1k
    1000000, //10k
    10000000, //100k
    100000000, //1kk
]

const donationData = ref();

const formatTimeAgo = (timeDifference: number) => {
    const minutesAgo = Math.floor(timeDifference / (1000 * 60));
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (minutesAgo < 3) {
        return `just now`;
    }
    else if (minutesAgo < 60) {
        return `${minutesAgo} min ago`;
    } else if (hoursAgo < 24) {
        return `${hoursAgo} hour ago`;
    } else {
        return `${daysAgo} day ago`;
    }
};

const getDonationsData = async () => {
    const { data, error } = await supabase
        .from('donations')
        .select('*');
    if (!data) {
        return;
    }
    const _sum = data.reduce((total, obj) => total + obj.amount, 0)
    const milestoneIndex = milestones.findIndex(milestone => (_sum) < milestone)
    // Oblicz czas od ostatniej donacji
    const lastDonationDate = new Date(data.at(-1).created_at);
    const currentDate = new Date();
    const timeDifference = +currentDate - +lastDonationDate;

    // Formatuj czas w czytelny sposób
    const formattedTimeAgo = formatTimeAgo(timeDifference);

    donationData.value = {
        sum: _sum / 100,
        last: data.at(-1),
        milestoneIndex,
        formattedTimeAgo
    }
}

const milestoneProgress = computed(() => {
    if (donationData.value) {
        return (donationData.value.sum / milestones[donationData.value.milestoneIndex]) * 10000;
    }
})

onMounted(() => {
    getDonationsData()
})

supabase
  .channel('donations')
  .on('postgres_changes', { event: '*', schema: 'public', table: 'donations' }, getDonationsData)
  .subscribe()
</script>
