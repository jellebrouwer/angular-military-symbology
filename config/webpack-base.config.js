const path = require('path');
const package = require('../package.json');
const webpack = require('webpack');
const WebpackConfig = require('webpack-config').Config;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
  disable: process.env.NODE_ENV === "development"
});

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
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
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
    // enforceExtension: true,
    extensions: ['.js', '.ts']
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      title: 'Angular Military Symbology',
      template: 'src/index.html'
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "vendors",
    //   chunks: ["app"],
    //   minChunks: Infinity
    // })
  ]
});