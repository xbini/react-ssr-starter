// next.config.js
const path = require('path')
const css = require('@zeit/next-css')
const sass = require('@zeit/next-sass')
const typescript = require('@zeit/next-typescript')
const images = require('next-images')
const fonts = require('next-fonts')
const withPlugins = require('next-compose-plugins')
const tsImportPluginFactory = require('ts-import-plugin')

const nextPlugins = [
    // [typescript, {}],
    [css, {}],
    [sass, {}],
    [images, {}],
    [fonts, { enableSvg: true }]
]

const tsLoader = {
    test: /\.tsx$/,
    use: [
        {
            loader: 'next-babel-loader',
            options: {}
        },
        {
            loader: 'ts-loader',
            options: {
                transpileOnly: true,
                getCustomTransformers: () => ({
                    before: [tsImportPluginFactory({ libraryName: 'antd-mobile', style: 'css' })]
                })
            }
        }
    ]
}

const nextConfig = {
    // exportPathMap(defaultPathMap, options) {
    //     return {
    //         '/': { page: '/src/pages/index.js' }
    //     }
    // },
    // useFileSystemPublicRoutes: false,
    pageExtensions: ['ts', 'tsx'],
    webpack(config, options) {
        config.module.rules.push(tsLoader)
        const { isServer } = options
        if (isServer) {
            console.log(config.entry)
            //    do something
        }
        return config
    }

}
module.exports = withPlugins(nextPlugins, nextConfig)
