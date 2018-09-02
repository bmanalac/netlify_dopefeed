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
    script: [
      { src: 'https://unpkg.com/splitting/dist/splitting.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Caveat|Cookie|Great+Vibes|Noto+Sans|Oswald|Quattrocento+Sans|Questrial' },
      { rel: 'stylesheet', href: 'https://unpkg.com/splitting/dist/splitting.css' },
      { rel: 'stylesheet', href: 'https://unpkg.com/splitting/dist/splitting-cells.css' }
    ]
  },
  css: [
    'assets/css/main.css',
    '~/assets/css/tailwind.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  build: {
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
