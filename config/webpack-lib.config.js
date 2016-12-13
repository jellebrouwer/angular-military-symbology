const path = require('path');
const webpack = require('webpack');
const WebpackConfig = require('webpack-config').Config;
const package = require('../package.json');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = new WebpackConfig().extend('./config/webpack-base.config.js').merge({
    entry: {
        app: [
            "./src/components/milSymbols.module.ts",
            "./src/sass/main.scss"
        ]
    },
    output: {
        library: package.name,
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    externals: {
        "angular": "angular",
        "milsymbol": "milsymbol"
    },
    plugins: [
        new CleanWebpackPlugin(['build'], {
            root: path.resolve(__dirname, '../'),
            verbose: true
        })
    ]
});