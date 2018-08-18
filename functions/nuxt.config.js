module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'dopefeed',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Food and foodie destination blog' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Caveat|Noto+Sans|Oswald|Quattrocento+Sans|Questrial' }
    ]
  },
  css: ['~/assets/css/tailwind.css'],
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  // buildDir: '../functions/nuxt',
  build: {
    publicPath: '/public/',
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
