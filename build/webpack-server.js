const path = require('path')
const merge = require('webpack-merge')
const TsImportPluginFactory = require('ts-import-plugin')
const baseConfig = require('./webpack-base')

const serverConfig = merge(baseConfig, {
    mode: 'development',
    target: 'node',
    devtool: 'cheap-module-eval-source-map',
    entry: {
        index: path.resolve(__dirname, '../src/server/index.tsx')
    },
    output: {
        pathinfo: false,
        path: path.resolve(__dirname, '../dist/server'),
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, '../src'),
                use: {
                    loader: 'ts-loader',
                    options: {
                        getCustomTransformers: () => ({
                            before: [TsImportPluginFactory({
                                libraryName: 'antd-mobile',
                                style: false
                            })]
                        }),
                        transpileOnly: true
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: 'ignore-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 2048,
                        name: './images/[name].[ext]'
                    }
                }
            },
            {
                test: /\.(woff|woff2|svg|eot|ttf)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 2048,
                        name: './fonts/[name].[ext]'
                    }
                }
            }
        ]
    }
})

module.exports = serverConfig
