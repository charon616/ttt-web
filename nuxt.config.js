
export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "TodaiToTexas2020",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Todai to Texas 2020の特設サイトです。"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    // "~/assets/scss/main.scss"
    'swiper/dist/css/swiper.css',
    'animate.css/animate.min.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~plugins/vue-awesome-swiper',
      ssr: false
    },
    {
      src: "~/plugins/vue2-touch-events",
      ssr: false
    },
    {
      src: "~/plugins/bg-color",
      ssr: false
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/style-resources", 
    '@nuxtjs/device',
    "nuxt-fontawesome"
  ],
  /*
   ** Fontawesome
   */
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"]
      },
      {
        set: "@fortawesome/free-brands-svg-icons",
        icons: ["fab"]
      }
    ]
  },
  /*
   ** Stylus settings
   */
  styleResources: {
    stylus: ["~assets/stylus/_variables.styl", "~assets/stylus/main.styl"]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
