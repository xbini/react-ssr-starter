// next.config.js
const css = require('@zeit/next-css')
const sass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins')

const config = [
    css({

    }),
    sass({
        // cssModules: false,
        // cssLoaderOptions: {
        //     importLoaders: 1
        //     // localIdentName: '[local]___[hash:base64:5]'
        // },
        // webpack(config, options) {
        //     return config
        // }
    })
]
module.exports = withPlugins([...config], {
    pageExtensions: ['jsx', 'js']
})
