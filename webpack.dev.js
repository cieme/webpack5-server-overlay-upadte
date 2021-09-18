const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');
const baseOptions = require('./webpack.common');
// const webpack = require("webpack");
const optionDev = {
  // devtool: "eval-cheap-source-map",
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    // magicHtml: true,
    historyApiFallback: true,
    hot: true,
    static: [
      {
        directory: path.join(__dirname, 'public'),
        publicPath: '/',
      },
      {
        directory: path.join(__dirname, 'src/assets/images'),
        publicPath: '/',
      },
    ],
    compress: true,
    port: 'auto',
    client: {
      logging: 'info',
      progress: false,
      overlay: {
        errors: true,
        warnings: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
};
module.exports = merge(baseOptions, optionDev);
