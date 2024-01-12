import colors from 'vuetify/es5/util/colors'
import * as FontAwesome from './plugins/fontawesome'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - 메가박스 클론',
    title: '메가박스',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/reset.scss',
    '~/assets/tooltip.scss',
    '~/assets/layout.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/v-tooltip.js',
    { src: '~/plugins/vue-carousel', ssr: false },
    { src: '~/plugins/vue-swiper.js', ssr: false },
    { src: '~/plugins/vue-youtube.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    [
      '@nuxtjs/fontawesome', { component: 'fontAwesome', suffix: true }
    ]
  ],
  fontawesome: {
    icons: {
      solid: FontAwesome.solid,
      regular: FontAwesome.regular,
      brands: FontAwesome.brands
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-modernizr', {
      'feature-detects': ['css/scrollbars', 'css/overflow-scrolling'],
      option: ['setClasses']
    }]
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  target: "static",
  router: {
    base: "/nuxt_mega_clone/"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
