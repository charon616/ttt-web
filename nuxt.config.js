
export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "TodaiToTexas2020",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "This is the website for the six teams from the Todai To Texas 2020, which was cancelled due to COVID-19. 新型コロナウイルスの影響により出展中止となったTodai To Texas 2020の6チームのための特設サイトです。"
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'TodaiToTexas2020' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: '' },
      { hid: 'og:title', property: 'og:title', content: 'TodaiToTexas2020' },
      { hid: 'og:description', property: 'og:description', content: 'This is the website for the six teams from the Todai To Texas 2020, which was cancelled due to COVID-19. 新型コロナウイルスの影響により出展中止となったTodai To Texas 2020の6チームのための特設サイトです。' },
      { hid: 'og:image', property: 'og:image', content: '/ogp.jpg' },
      { hid: 'fb:app_id', content: '706574413483305' }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/icon.ico" }
    ],
    script: [
      {
        src: 'https://use.typekit.net/dhy3jso.js'
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ["swiper/dist/css/swiper.css", "animate.css/animate.min.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: "~plugins/vue-awesome-swiper",
      ssr: false
    },
    {
      src: "~/plugins/bg-color",
      ssr: false
    },
    {
      src: "~/plugins/vue-youtube",
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
    "@nuxtjs/device",
    "nuxt-fontawesome",
    "nuxt-webfontloader"
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
