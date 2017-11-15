const WebpackConfig = require('webpack-config').Config;

module.exports = new WebpackConfig().extend('./config/webpack-base.config.js').merge({
    entry: {
        app: [
            "./src/app.module.ts",
            "./src/sass/main.scss"
        ]
    },
    debug: true,
    devServer: {
        contentBase: "build",
        open: true,
        watch: true
    }
});