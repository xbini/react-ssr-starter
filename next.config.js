// next.config.js
const css = require('@zeit/next-css')
const sass = require('@zeit/next-sass')
const typescript = require('@zeit/next-typescript')
const images = require('next-images')
const fonts = require('next-fonts')
const withPlugins = require('next-compose-plugins')
const config = [
    [typescript, {}],
    [css, {}],
    [sass, {}],
    [images, {}],
    [fonts, { enableSvg: true }]
]
const nextConfig = {
    // exportPathMap(defaultPathMap, options) {
    //     return {
    //         '/': { page: '/src/pages/index.js' }
    //     }
    // },
    // useFileSystemPublicRoutes: false,
    pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
    webpack(config, options) {
        const { isServer } = options
        if (!isServer) {
            //    do something
        }
        return config
    }

}
module.exports = withPlugins(config, nextConfig)
