// import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'is'
    },
    title: 'Árbær - Hús í hús',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Árbær ehf og Hús í hús ehf. Alhliða byggingaverktakar' },
      { hid: 'keywords', name: 'keywords', content: 'smiður, smiðir, verktakar, byggingaverktakar, viðhald, smíði, dewalt, milwaukee, árbær, hús í hús, hús, blokk, húsfélag' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/normalize.css',
    '@/assets/css/common.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/cool-lightbox', ssr: true },
    //{ src: "~/plugins/aos", ssr: false }
 ],
 
  /*
  ** Nuxt.js modules
  */
  modules: [
    // mofules for full static before `nuxt export` (coming in v2.12)
    '@/modules/static',
    '@/modules/crawler',
    // https://prismic-nuxt.js.org/
    '@nuxtjs/prismic'
  ],

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  prismic: {
    endpoint: 'https://husihusnuxt.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {

    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // to transform link with <nuxt-link> for the htmlSerializer
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    },
    //transpile: ['CoolLightBox']
  },

  generate: {
    fallback: '404.html' // Netlify reads a 404.html, Nuxt will load as an SPA
  }
}