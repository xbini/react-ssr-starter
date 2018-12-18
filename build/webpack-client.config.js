const path = require('path')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TsImportPluginFactory = require('ts-import-plugin')
const baseConfig = require('./webpack-base.config')

const clientConfig = merge(baseConfig, {
    mode: 'development',
    target: 'web',
    devtool: 'cheap-module-eval-source-map',
    entry: {
        list: path.resolve(__dirname, '../src/pages/list.tsx')
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    output: {
        pathinfo: false,
        path: path.resolve(__dirname, '../dist/client'),
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
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
                                style: 'css'
                            })]
                        }),
                        transpileOnly: true
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: {} },
                    { loader: 'postcss-loader', options: {} }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: {} },
                    { loader: 'postcss-loader', options: {} },
                    { loader: 'sass-loader', options: {} }
                ]
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
                test: /\.woff|\.woff2|\.svg|\.eot|\.ttf/,
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

module.exports = clientConfig
