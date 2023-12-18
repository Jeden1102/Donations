<template>
    <div class="flex items-center justify-center min-h-screen p-5 bg-gray-600 min-w-screen">
        <div class="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
            <h3 class="text-2xl">Thanks for signing up for <b>StartUpLand</b>!</h3>
            <div class="flex justify-center">
                <Icon class="text-5xl" name="mingcute:mail-send-line" />
            </div>
            <p>We're happy you're here. Let's get your email address verified</p>
            <p>Checkout your e-mail, and click the activation link to use our service to the fullest!</p>
            <div class="mt-4">
                <button class="btn-primary">Go to Homepage</button>
                <p class="mt-4 text-sm">
                    If you'are having issues to find the message, make sure to check SPAM folder.
                </p>
            </div>
            <p>Verification e-mail did't come?</p>
            <button class="text-primary underline" @click="resend">Resend the code</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const { auth } = useSupabaseClient()
const route = useRoute()
const resend = async () => {
    auth.resend({
        type: 'signup',
        email: route.query.email,
    })
}
</script>
