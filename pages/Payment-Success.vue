<template>
  <div>
    <div class="container" v-if="donationData">
      <div class="relative my-12 md:my-24">
        <NuxtImg class="shadow-md rounded-md" src="/images/children-3.jpg" width="1300" height="550" alt="Childrens"
          loading="lazy" />
        <div
          class="bg-primary w-full flex flex-col justify-center gap-3  px-2  md:px-10  py-2 md:py-6 rounded-md shadow-md items-center text-white md:absolute md:gap-4  left-unset md:top-1/2 right-32 h-fit md:-translate-y-1/2  md:h-3/4 md:left-auto md:w-fit md:translate-x-0">
          <p class="text-white text-center tracking-widest text-xl md:text-2xl">THANK YOU,
            {{ donationData.custom_fields?.[0].text.value }}</p>
          <p class="text-white text-center max-w-[300px] text-lg md:text-xl">Your generous donation will help change
            childrens live.
          </p>
          <p class=" text-center max-w-[300px] text-gray-200">It's thanks to people like You we can provide the help and
            spread love.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Donation } from '../types/donation.types';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js'

const runtimeConfig = useRuntimeConfig();

const supabase = createClient(runtimeConfig.public.supabase.url, runtimeConfig.public.supabase.key)

const user = useSupabaseUser()
const route = useRoute()
const session_id = route.query.id;

const donationData = ref<Donation | null>(null);
const validatePayment = async () => {
  try {
    const response = await axios.get(`/api/session?id=${session_id}`)
    if (!response.data) {
      navigateTo('/');
    }
    donationData.value = response.data as Donation;
    isDonationInDb();
  } catch (err) {
    navigateTo('/');
  }
}

const isDonationInDb = async () => {
  const { data, error } = await supabase
    .from('donations')
    .select()
    .eq('session_id', session_id);

  if (!data) {
    return;
  }

  if (data.length === 0) {
    insertDonationToDb();
  }
}

const insertDonationToDb = async () => {
  if (!donationData.value) {
    return;
  }
  const insertObject = {
    amount: donationData.value.amount_total,
    user_email: donationData.value.customer_details.email,
    user_name: donationData.value.custom_fields?.[0].text.value ?? '',
    session_id: session_id,
    user_id: null as null | string,
    status: donationData.value.status,
  }
  if (user) {
    insertObject.user_id = user.value?.id as string;
  }
  const { error } = await supabase
    .from('donations')
    .insert(insertObject)

  console.log(error);
}


onMounted(async () => {
  if (!session_id) {
    navigateTo('/');
  }
  await validatePayment();
})


</script>