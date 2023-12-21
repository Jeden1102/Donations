<template>
    <div class="container" v-if="user">
        <div class="my-4">
            <h1 class="text-2xl md:text-4xl">Hello, {{ user.user_metadata.name }}</h1>
            <p class="my-2" v-if="donations">We'are happy you are with us. Here's the list of donation your provided for the
                children.</p>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg" v-if="donations">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Amount
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="donation in donations" :key="donation.id"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ formatDate(donation.created_at) }}
                        </th>
                        <td class="px-6 py-4">
                            {{ donation.amount / 100 }}
                        </td>
                        <td class="px-6 py-4">
                            <span
                                class="block bg-green-200 w-fit py-1 px-2 rounded-md border border-green-500 dark:bg-gray-300 dark:text-gray-700 dark:border-0">{{
                                    donation.status }}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            You have not placed any donations yet. Let's change in!
            <button class="btn-primary block mt-4">Donate now</button>
        </div>
    </div>
</template>

<script setup lang="ts">

import { createClient } from '@supabase/supabase-js'

const runtimeConfig = useRuntimeConfig();

const supabase = createClient(runtimeConfig.public.supabase.url, runtimeConfig.public.supabase.key)

const user = useSupabaseUser()

const donations = ref();

const formatDate = (date: string) => {
    console.log(new Date(date))
    return new Date(date).toLocaleString();
}

const getUserDonations = async () => {
    if (!user.value) {
        return;
    }
    const { data, error } = await supabase
        .from('donations')
        .select()
        .eq('user_id', user.value.id);

    if (!data) {
        return;
    }
    donations.value = data;
}
onMounted(() => {
    getUserDonations()
})
</script>

<style scoped></style>