<template>
  <header class="bg-primary-1 p-2 flex justify-between items-center md:p-8 md:py-2 fixed w-full z-20 top-0 left-0  shadow-sm">
    <h1 class="text-primary-4 uppercase text-3xl font-secondary">cera</h1>
    <div class="flex gap-4">
      <img src="/icons/arrow.svg" alt="Arrow icon" width="103" height="103">
      <button @click="isMobileMenuVisible = !isMobileMenuVisible" title="Toggle menu"
        class="w-9 h-9 bg-white rounded-full mt-3 md:mt-5">
        <Icon class="text-3xl" name="system-uicons:menu-hamburger" />
      </button>
      <div
        class="-translate-y-8 pointer-events-none transition-all absolute right-8 top-16 bg-white w-fit py-4 px-6 shadow-lg rounded-md rounded-tr-none flex flex-col gap-2 z-20 md:top-20 opacity-0"
        :class="{ 'opacity-100 translate-y-0 pointer-events-auto ': isMobileMenuVisible }">
        <a @click="setActiveMenuItem(link)" class="menu-link relative  w-fit text-lg pl-2"
          :class="{ 'is-active': link === activeMenuItem }" v-for="link in links" :key="link" :href="formatLink(link)">{{
            link }}</a>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
const isMobileMenuVisible = ref(false);
const activeMenuItem = ref('');
const links = [
  "Home",
  "Crafted universe",
  "Our kits",
  "Features",
  "Workshops",
  "Newsletter"
]
const formatLink = (link: string) => {
  return '#' + link.toLowerCase().replaceAll(" ", "-");
}
const setActiveMenuItem = (link: string) => {
  activeMenuItem.value = link;
}
</script>
<style lang="scss" scoped>
.menu-link {
  &.is-active {
    @apply font-bold;

    &::before {
      content: '';
      width: 4px;
      height: 80%;
      position: absolute;
      transform: translateY(-50%);
      @apply bg-primary-2 left-0 top-1/2 absolute;
    }
  }

  &:not(.is-active) {
    &::after {
      content: '';
      width: 0;
      height: 2px;
      transition: width .2s;
      @apply bg-primary-2 left-0 bottom-0 absolute;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }

}
</style>