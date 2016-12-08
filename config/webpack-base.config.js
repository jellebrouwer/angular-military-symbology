const path = require('path');
const package = require('../package.json');
const webpack = require('webpack');
const WebpackConfig = require('webpack-config').Config;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = new WebpackConfig().merge({
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: package.name + '.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css', 'sass?sourceMap'])
            },
            {
                test: /\.(html)$/,
                loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, '../src')) + '!html'
            }
        ]
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    plugins: [
        new ExtractTextPlugin("[name].css", {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            title: 'Angular Military Symbology',
            template: 'src/index.ejs'
        })
    ]
});