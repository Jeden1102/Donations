<template>
  <header class="">
    <h1 class="text-primary text-5xl">header</h1>
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
