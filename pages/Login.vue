<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <h2 class="my-6 text-center text-3xl font-extrabold u-text-white">
      Sign in to your account
    </h2>
      <button
        class="mt-3"
        icon="i-mdi-github"
        block
        label="Github"
        variant="black"
        @click="auth.signInWithOAuth({ provider: 'google', options: { redirectTo } })"
      >Sign in</button>
      {{ redirectTo }}
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
const { auth } = useSupabaseClient()

const redirectTo = `http://localhost:3000/confirm`

watchEffect(() => {
  if (user.value) {
    navigateTo('/tasks')
  }
})
</script>

<style scoped>

</style>