// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },

  modules: ["@nuxt/image"],
  compatibilityDate: "2024-09-28",
});