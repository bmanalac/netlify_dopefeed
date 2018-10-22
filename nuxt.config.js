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
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playfair+Display+SC:900|Cookie|Old+Standard+TT|Pacifico|Noto+Sans|Oswald|Quattrocento+Sans' },
            { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css' }
        ]
    },
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
    },
    modules: ['@nuxtjs/apollo'],
    apollo: {
        clientConfigs: {
            default: '~/apollo/client-configs/default.js'
        }
    },
    css: [
        '@/assets/css/main.css',
        '@/assets/css/tailwind.css',
        '@/assets/css/splitting.js.css'
    ],
}
