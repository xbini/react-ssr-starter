// next.config.js
const css = require('@zeit/next-css')
const sass = require('@zeit/next-sass')
const images = require('next-images')
const withPlugins = require('next-compose-plugins')
const config = [
    [images, {}],
    [css, {}],
    [sass, {}]
]
const nextConfig = {
    pageExtensions: ['jsx', 'js'],
    webpack(config, options) {
        // config.module.rules.push({
        //     test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        //     use: {
        //         loader: 'url-loader',
        //         options: {
        //             limit: 100000,
        //             name: '[name].[ext]'
        //         }
        //     }
        // })
        return config
    }

}
module.exports = withPlugins(config, nextConfig)
