<template>
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
        </h1>
        <form class="space-y-4 md:space-y-6 flex flex-col" action="#" @submit.prevent="logIn">
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input v-model="formData.email" type="email" name="email" id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com">
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input v-model="formData.password" type="password" name="password" id="password" placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <button title="Sign in button" type="submit" class="btn-primary">Sign
                in</button>
            <button type="button" @click="fillData">Fill with test user data.</button>
            <span class="text-red-400">{{ errorMessage }}</span>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <NuxtLink to="/register" class="text-primary underline">Sign up</NuxtLink>
            </p>
        </form>
    </div>
</template>
  
<script setup lang="ts">
const user = useSupabaseUser()
const { auth } = useSupabaseClient()

const formData = ref({
    email: '',
    password: '',
})

const errorMessage = ref('')

const fillData = () => {
    formData.value.email = 'test@test.pl';
    formData.value.password = 'test';
}

const logIn = async () => {
    const { data, error } = await auth.signInWithPassword({
        email: formData.value.email,
        password: formData.value.password,
    })
    if (error) {
        errorMessage.value = error.message;
    }
}

watchEffect(() => {
    if (user.value) {
        navigateTo('/user')
    }
})
</script>