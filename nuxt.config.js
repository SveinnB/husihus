export default {
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    htmlAttrs: {
      lang: 'is'
    },
    title: 'Árbær - Hús í hús',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'facebook-domain-verification', content: '50xp5rf5rdnwj706ufayesd2h5f3v7' },
      { hid: 'description', name: 'description', content: 'Árbær ehf og Hús í hús ehf. Alhliða byggingaverktakar' },
      { hid: 'keywords', name: 'keywords', content: 'smiður, smiðir, verktakar, byggingaverktakar, viðhald, smíði, dewalt, milwaukee, árbær, hús í hús, hús, blokk, húsfélag' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ]
  },
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/common.css',
  ],
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
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/gtm',
    '@nuxtjs/prismic',
    '@nuxtjs/sitemap'
  ],
  gtm: {
    enabled: true,
    id: 'GTM-NLLKHM4',
  },
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
    treeShake: true,
    theme: {
      themes: {
        light: {
          primary: '#f5822b',
        }
      }
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://husihus.is',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    routes: [
      '/',
      '/um-okkur',
      '/verkefni',
      '/hobbihus',
      '/hafa-samband',
    ].map(route => ({
      url: route,
      changefreq: 'monthly',
      priority: 1,
      lastmodISO: new Date().toISOString()
    }))
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // to transform link with <nuxt-link> for the htmlSerializer
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    },
  },
  generate: {
    fallback: '404.html' // Netlify reads a 404.html, Nuxt will load as an SPA
  },
}
