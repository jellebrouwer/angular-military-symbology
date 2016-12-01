let path = require('path'),
    webpack = require('webpack'),
    libraryName = 'angular-military-symbology',
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/app.module.ts",
    output: {
        path: __dirname + '/build',
        filename: libraryName + ".js",
        library: libraryName,
        libraryTarget: "umd",
        umdNamedDefine: true
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
                loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './src')) + '!html'
            }
        ]
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    devServer: {
        contentBase: "build",
        open: true
    },
    plugins: [
        new CleanWebpackPlugin(['build'], {
            root: path.resolve(__dirname, './'),
            verbose: true
        }),
        new ExtractTextPlugin("[name].css", {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            title: 'Angular Military Symbology',
            template: 'src/index.ejs'
        })
    ]
};
