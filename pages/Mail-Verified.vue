<template>
    <div class="flex items-center justify-center min-h-screen p-5 bg-gray-600 min-w-screen">
        <div class="max-w-xl p-8 text-center text-gray-800 bg-white shadow-xl lg:max-w-3xl rounded-3xl lg:p-12">
            <h3 class="text-2xl">Thanks for signing up for <b>StartUpLand</b>!</h3>
            <div class="flex justify-center">
                <Icon class="text-5xl" name="mingcute:mail-send-line" />
            </div>
            <p>We're happy you're here. You're mail has been verified succesfully! Login please, to enjoy our service.</p>
            <div class="mt-4">
                <NuxtLink class="btn-primary"  to="/login">Login</NuxtLink>
            </div>
        </div>
    </div>
</template>