export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'metro-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    // proxy: true
  },

  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts'
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/styles.scss'
  ],

  googleFonts: {
    families: {
      Oxygen: true
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axios-ssr.js',
    { src: '@/plugins/vue-paginate.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config) {
      config.resolve.alias['node-fetch-native'] = require.resolve('node-fetch')
    }
  }
}
