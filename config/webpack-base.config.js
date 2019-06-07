const path = require('path');
const package = require('../package.json');
const WebpackConfig = require('webpack-config').Config;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = new WebpackConfig().merge({
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: package.name + '.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /[^index]\.html$/,
        use: [
          { loader: 'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, '../src')) },
          { loader: 'html-loader' }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      title: 'Angular Military Symbology',
      template: 'src/index.html'
    }),
  ]
});