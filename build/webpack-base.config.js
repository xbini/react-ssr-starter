const path = require('path')

const root = path.resolve(__dirname, '../')
const baseConfig = {
    bail: true,
    cache: true,
    context: root,
    module: {
        rules: []
    },
    // node: {
    //     fs: 'empty',
    //     net: 'empty',
    //     tls: 'empty'
    // },
    resolve: {
        // alias: {
        //     src: path.resolve(__dirname, '../src/')
        // },
        extensions: ['js', 'jsx', '.ts', '.tsx', '.scss', '.css', '.html']
    },
    optimization: {
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks: {
            chunks(chunk) {
                // exclude `polyfill`
                return chunk.name && chunk.name.includes('polyfill') === false
            }
        }
    },
    stats: {
        children: false
    }
}

module.exports = baseConfig
