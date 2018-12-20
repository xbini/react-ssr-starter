const path = require('path')
const root = path.resolve(__dirname, '../')
const baseConfig = {
    bail: true,
    cache: true,
    context: root,
    module: {
        rules: [
            {
                test: /.html$/,
                use: 'html-loader'
            }
        ]
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, '../src/')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css', '.json', '.html']
    },
    stats: {
        children: false
    }
}

module.exports = baseConfig
