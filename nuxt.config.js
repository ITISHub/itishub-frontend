export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  env: {
    baseUrl: process.env.BASE_URL,
    // TODO: get ids from API
    courseId: {
      mathAn: 1,
      discreteMath: 2,
      alGem: 3,
    },
    courseAccess: "api/v1/courses/",
    reviewAccess: "api/v1/review/",
    creatorsAccess: "api/v1/creators/",
    homecardsAccess: "api/v1/homecards/",
  },
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  router: {
    base: "/itishub-frontend/",
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    // title: process.env.npm_package_name || '',
    title: "ITIS-hub",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/itishub-frontend/favicon.ico",
      },
    ],
  },
  loading: {
    color: "#33aade",
  },
  /*
   ** Global CSS
   */
  css: ["~/assets/main.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/vuetify",
    "@nuxtjs/color-mode",
    "@nuxtjs/pwa",
    "@nuxtjs/dotenv",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  pwa: {
    icon: {
      fileName: "logo.png",
    },
    manifest: {
      theme_color: "#282c35",
      name: "ITIS-hub",
    },
    workbox: {
      enabled: true,
    },
  },
};
