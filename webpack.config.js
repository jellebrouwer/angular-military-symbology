const WebpackConfig = require('webpack-config').Config;
let webpackConfig;

switch (process.env.npm_lifecycle_event) {
    case 'start':
        webpackConfig = './config/webpack-dev.config.js'
        break
    default:
        webpackConfig = './config/webpack-lib.config.js'
        break
};

module.exports = new WebpackConfig().extend(webpackConfig);