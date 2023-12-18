<template>
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign up to your account
        </h1>
        <form class="space-y-4 md:space-y-6 flex flex-col" @submit.prevent="signIn">
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input v-model="formData.email" type="email" name="email" id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com">
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input v-model="formData.password"  type="password" name="password" id="password" placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                    name/nickname</label>
                <input type="text" name="name" id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Johnny">
            </div>
            <button type="submit" class="btn-primary">Sign
                up</button>
            <span class="text-red-400">{{ errorMessage }}</span>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <NuxtLink to="/login" class="text-primary underline">Sign in</NuxtLink>
            </p>
        </form>
    </div>
</template>
  
<script setup lang="ts">
const user = useSupabaseUser()
const { auth } = useSupabaseClient()

const formData = {
    email: '',
    password: '',
    options: {
        emailRedirectTo: 'http://localhost:3000/user'
    }
}

const errorMessage = ref('')

const signIn = async () => {
    const { data, error } = await auth.signUp({
        email: formData.email,
        password: formData.password,
    })
    if (error) {
        errorMessage.value = error.message;
        return;
    }
    if (data) {
        navigateTo(`/mail-confirmation?email=${formData.email}`)
    }
}

watchEffect(() => {
    if (user.value) {
        navigateTo('/user')
    }
})
</script>
  
<style scoped></style>