const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {merge} = require('webpack-merge');
const baseOptions = require('./webpack.common');
const optionDev = {
  mode: 'production',
  target: ['web', 'es5'],
  output: {
    publicPath: './',
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].bundle.js',
    chunkFilename: '[name].chunk.[chunkhash:7].js',
    clean: true,
    assetModuleFilename: 'images/[name][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[name].css',
    }),
  ],
};
module.exports = merge(baseOptions, optionDev);
