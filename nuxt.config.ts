export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "fr",
      },
      titleTemplate: "Rock Horizon | %s",
      meta: [
        {
          name: "ahrefs-site-verification",
          content:
            "945598cbc7bdf306712dedd9c2afadea4ef5da6288cbf586e5b746f991d6042c",
        },
        {
          "http-equiv": "cache-control",
          content: "max-age=604800, must-revalidate",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
      script: [
        {
          src: "https://plausible.io/js/script.outbound-links.pageview-props.tagged-events.js",
          defer: true,
          "data-domain": "rockhorizon.com",
        },
        {
          children: `
            window.plausible = window.plausible || function() {
              (window.plausible.q = window.plausible.q || []).push(arguments)
            }
          `,
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

  modules: [
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "nuxt-schema-org",
    "@nuxtjs/robots",
    "@nuxtjs/plausible",
  ],

  compatibilityDate: "2024-09-28",

  site: {
    url: "https://www.rockhorizon.com/",
    name: "Rock Horizon",
    xsl: false,
  },

  robots: {
    allow: "*",
    disallow: ["/404"],
    sitemap: "https://rockhorizon.com/sitemap.xml",
    blockNonSeoBots: true,
  },

  schemaOrg: {
    identity: {
      type: "Organization",
      name: "Rock Horizon",
      url: "https://rockhorizon.com",
      logo: "https://rockhorizon.com/logo.png",
    },
  },

  runtimeConfig: {
    public: {
      PLAUSIBLE_DOMAIN: "",
    },
    app: {
      META_PIXEL_ID: "",
    },
  },

  plausible: {
    ignoredHostnames: ["localhost"],
  },
});
