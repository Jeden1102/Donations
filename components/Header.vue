<template>
  <header class="">
    <h1 class="text-primary text-5xl">header</h1>
    <a class="bg-primary text-lg rounded-md px-4 py-2 text-white shadow-sm" href="https://buy.stripe.com/test_dR6dSgfG443o7rq3cc?__prefilled_amount=2000">
      Buy
    </a>
  </header>
</template>
<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

import { createClient } from '@supabase/supabase-js'
const supabase = createClient(runtimeConfig.public.supabase.url, runtimeConfig.public.supabase.key)
// Create a function to handle inserts
const handleInserts = (payload:any) => {
  console.log('Change received!', payload)
}

// Listen to inserts
supabase
  .channel('donations')
  .on('postgres_changes', { event: '*', schema: 'public', table: 'donations' }, handleInserts)
  .subscribe()
</script>
