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

  modules: ["@nuxt/image", "@nuxtjs/sitemap", "@nuxtjs/robots"],
  compatibilityDate: "2024-09-28",

  site: {
    url: "https://www.rockhorizon.com/",
    name: "Rock Horizon",
  },

  robots: {
    allow: "*",
    disallow: ["/404"],
    sitemap: "https://rockhorizon.com/sitemap.xml",
    blockNonSeoBots: true,
  },
});
