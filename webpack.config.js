const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'MyAuthLibrary',
        libraryTarget: 'umd'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                resolve: {
                    fullySpecified: false,
                    fallback: {
                        "crypto": false
                        }
                }
            }
        ]
    },
    devServer: {
        // devServer: {
        static: {
            directory: path.join(__dirname, "./")
        },
        // },
        // overlay: true,
        hot: true,
        port: 8000,
        open: true
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: ['*.html']
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
