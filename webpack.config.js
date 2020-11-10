const path = require( 'path' )
const HTMLWebpackPlugin = require( 'html-webpack-plugin' )
const webpack = require('webpack')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'js', 'index.js'),

    output: {
        path: path.resolve( __dirname, 'build'),
        filename: 'bundle.js'
    },

    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, './src'),
        hot: true,
        open: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env' ]
                    }
                }               
            },
            {
                test: /\.css$/i,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}