import { createError } from 'h3'
import type { Database } from '../../types/database.types';
import {  serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<Database>(event)
  let { data: donations, error } = await client
  .from('donations')
  .select('*')
  if (error) {
    throw createError({ statusMessage: error.message })
  }

  return donations
})
