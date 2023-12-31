// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    'vue3-carousel-nuxt',
    "@nuxt/image",
    '@nuxtjs/supabase',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: ''
  },
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
  supabase: {
    redirect: false
  },
  runtimeConfig: {
    public: {
      SUPABASE_URL: '',
      SUPABASE_KEY: '',
      NUXT_STRIPE_SK: process.env.NUXT_STRIPE_SK,
    }
  }
});