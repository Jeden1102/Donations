// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    'vue3-carousel-nuxt',
    "@nuxt/image"
  ],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      DmSans: true,
    },
  },
  components: [{ path: "~/global" }, "~/components"],
});