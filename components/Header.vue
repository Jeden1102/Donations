<template>
  <header class="container mx-auto fixed bg-gray-100 dark:bg-gray-800 z-50">
    <div class="py-4 flex justify-between z-10">
      <NuxtLink class="flex items-center" to="/">
        <span v-if="$colorMode.value == 'dark'">
          <NuxtImg format="webp" loading="lazy" v-if="$colorMode.value == 'dark'" src="/icons/logo-white.svg" width="193"
            height="37" alt="Page logo" />
        </span>
        <NuxtImg format="webp" loading="lazy" v-else src="/icons/logo.svg" width="193" height="37" alt="Page logo" />
      </NuxtLink>
      <button title="Burger button" class="block toggle-menu md:hidden" :class="{ 'active': isMobileMenuVisible }"
        @click="isMobileMenuVisible = !isMobileMenuVisible">
        <span class="line"></span>
      </button>
      <div
        class="absolute bg-gray-100 md:bg-transparent top-14 left-0  flex flex-col right-0 shadow-md p-4 gap-4 transition-transform md:opacity-100 md:translate-y-0 md:static md:flex-row md:shadow-none md:items-center md:justify-between w-full md:pointer-events-auto dark:bg-gray-800"
        :class="{ 'opacity-0 -translate-y-4 pointer-events-none': !isMobileMenuVisible }">
        <nav class="flex flex-col gap-1 items-end md:flex-row md:gap-6 dark:text-gray-100">
          <NuxtLink @click="hideMenus" to="/#home">Home</NuxtLink>
          <NuxtLink @click="hideMenus" to="/#services">Services</NuxtLink>
          <NuxtLink @click="hideMenus" to="/#about">About</NuxtLink>
          <NuxtLink @click="hideMenus" to="/#blog">Blog</NuxtLink>
        </nav>
        <div class="border-t border-gray-300 pt-6 flex gap-4 items-center md:border-0 md:pt-0">
          <NuxtLink v-if="!user" class="flex items-center gap-2" to="/login" @click="hideMenus">
            <Icon name="material-symbols:lock-open-outline" />
            <span>Login</span>
          </NuxtLink>
          <div v-else class="relative w-full md:w-fit">
            <button title="User toggle button" @click="hideMenus"
              class="flex items-center gap-2">
              <Icon name="material-symbols:person-2-outline" />
              <span>User</span>
            </button>
            <div
              class="absolute transition-all left-0 top-8 bg-white dark:bg-gray-700 dark:border-0 py-4 px-8 flex flex-col gap-4 rounded-md  shadow-md border "
              :class="{ 'opacity-0 -translate-y-4 pointer-events-none': !isUserMenuVisible }">
              <NuxtLink to="user" @click="isUserMenuVisible = false">
                <Icon name="streamline:blood-bag-donation" />
                <span class="ml-2">Profile</span>
              </NuxtLink>
              <button title="Logout button" @click="logOut" class="font-bold flex items-center gap-2" to="/login">
                <Icon name="ic:baseline-logout" />
                <span>Logout</span>
              </button>
            </div>
          </div>
          <NuxtLink to="https://buy.stripe.com/test_dR6dSgfG443o7rq3cc" class="btn-primary w-full text-center md:w-fit">
            Donate now</NuxtLink>
          <ModeSwitcher />
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const { auth } = useSupabaseClient()
const user = useSupabaseUser()

const isMobileMenuVisible = ref(false);
const isUserMenuVisible = ref(false);

const hideMenus = () => {
  isMobileMenuVisible.value = false;
  isUserMenuVisible.value = false;
}

const logOut = async () => {
  auth.signOut()
  navigateTo('/')
  isUserMenuVisible.value = false;
}
</script>
<style lang="scss" scoped>
.toggle-menu {
  .line {
    display: block;
    width: 30px;
    height: 2px;
    position: relative;
    @apply bg-black dark:bg-gray-100;

    &::after,
    &::before {
      width: 100%;
      height: 100%;
      position: absolute;
      right: 0;
      background-color: inherit;
      content: '';
      transition: all .4s;

    }

    &::before {
      width: 130%;
      top: -7px;
    }

    &::after {
      bottom: -7px;
      width: 80%;
    }
  }

  &.active {
    .line {
      transform: rotate(-45deg);

      &::after {
        transform: rotate(90deg) translateX(200%);
        opacity: 0;
      }

      &::before {
        transform: rotate(90deg) translateX(6px);
        width: 100%;
      }
    }
  }

  &:not(.active) {

    &:hover {
      .line {
        &::before {
          width: 120%;
        }

        &::after {
          width: 95%;
        }
      }
    }
  }
}
</style>