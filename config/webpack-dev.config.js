const WebpackConfig = require('webpack-config').Config;

module.exports = new WebpackConfig().extend('./config/webpack-base.config.js').merge({
  entry: {
    // vendors: './src/vendors.ts',
    app: [
      "./src/app.module.ts",
      "./src/sass/main.scss"
    ]
  },
  devServer: {
    contentBase: './build'
  }
});