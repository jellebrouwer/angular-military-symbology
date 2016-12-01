let path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/app.module.ts",
        vendor: ['angular']
    },
    output: {
        path: __dirname + '/build',
        filename: "angular-military-symbology.js"
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
        }),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
};
