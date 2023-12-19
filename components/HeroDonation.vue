<template>
    <div class="container">
        <div class="flex flex-col md:flex-row-reverse gap-4 justify-between mt-4 md:mt-8 lg:mt-20">
            <NuxtImg width="640" height="350" src="/icons/hero-image.svg" class="w-full max-w-[700px]" />
            <div class="bg-gray-100 px-4 py-8 shadow-lg border  md:max-w-[426px] lg:px-10 dark:bg-gray-700">
                <h1 class="text-2xl font-bold lg:text-3xl">Donate for the smile of orphans face</h1>
                <div class="flex gap-2 flex-col pl-5 my-4 md:my-8 md:flex-row md:gap-8">
                    <input class="donation-type" type="radio" name="donation-type" id="one-time">
                    <label class="radio-label" for="one-time">Donate one-time</label>
                    <input class="donation-type" type="radio" name="donation-type" id="every-month">
                    <label class="radio-label" for="every-month">Every month</label>
                </div>
                <div class="flex gap-2 flex-wrap">
                    <div v-for="value in donationValues" :key="value">
                        <input v-model="donationValue" @change="otherValue = ''" :value="value"
                            class="donation-value peer hidden" type="radio" name="donation-value" :id="`donation-${value}`">
                        <label
                            class="donation-label w-20 h-14 cursor-pointer rounded-md border flex items-center justify-center bg-gray-50 shadow-sm  peer-checked:bg-primary-light peer-checked:border-primary"
                            :for="`donation-${value}`">${{ value }}</label>
                    </div>
                </div>
                <div class="relative">
                    <input v-model="otherValue" type="text" placeholder="Other amount"
                        class="h-14 p-2 px-4 border mt-2 bg-gray-50 shadom-sm rounded-md w-full md:mt-4">
                    <span class="absolute top-6 right-4">$</span>
                </div>
                <a :href="donationLink" class="btn-primary w-full mt-4 py-4 block text-center">
                    Donate now
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const donationValues = [5, 20, 50, 100];
const nameVisible = ref(false);

const donationValue = ref(5);

const otherValue = ref('');

const donationLink = computed(() => {
    const prefilledValue: number = otherValue.value ? +otherValue.value : +donationValue.value;
    return `https://buy.stripe.com/test_dR6dSgfG443o7rq3cc?__prefilled_amount=${prefilledValue * 100}`;
})
</script>

<style lang="scss" scoped>
.radio-label {
    position: relative;
    cursor: pointer;

    &::before {
        content: '';
        width: 16px;
        height: 16px;
        border: 1px solid;
        display: block;
        position: absolute;
        left: -20px;
        top: 50%;
        transform: translateY(-50%);
        @apply rounded-full border-primary;
    }
}

.donation-type {
    display: none;

    &:checked {
        +label {
            &::before {
                border: 5px solid;
                @apply border-primary;
            }
        }
    }
}
</style>