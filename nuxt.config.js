const pkg = require('./package')


module.exports = {
  mode: '',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Tech, developer, infosec, and linux news aggregator | cyberbitnews',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://static.cyberbitnews.com/favicon.ico' },
      { rel: 'stylesheet', href: 'https://static.cyberbitnews.com/css/fontello.css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Bitter|Roboto'}  
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'orange' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
