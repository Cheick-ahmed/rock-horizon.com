// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "fr-FR",
      },
      link: [
        {
          rel: "alternate icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
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
