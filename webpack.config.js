const html_plugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/views/assets/app.dev.js',
    mode: 'development',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/
                ]
            },

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            }
        ],
    },
    plugins: [
        new html_plugin(
            {
                template: './src/views/index.html',
            }
        )
    ]
}