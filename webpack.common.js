const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseOptions = {
  entry: {
    dist: path.resolve(__dirname, './main.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    assetModuleFilename: '[name][ext]',
    sourceMapFilename: '[name].[hash:8].map',
    chunkFilename: '[name].[hash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|\.file.js$)/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'html-loader',
            options: {
              esModule: false,
              minimize: false,
              sources: {
                list: [
                  {
                    tag: 'img',
                    attribute: 'src',
                    type: 'src',
                  },
                  {
                    tag: 'script',
                    attribute: 'src',
                    type: 'src',
                  },
                  {
                    tag: 'video',
                    attribute: 'poster',
                    type: 'src',
                  },
                  {
                    tag: 'div',
                    attribute: 'style',
                    type: 'src',
                  },
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },

      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, 'public/favicon.ico'),
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1,maximum-scale=1,' +
            'user-scalable=0,viewport-fit=cover',
        },
        {
          name: 'format-detection',
          content: 'telephone=no,email=no',
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes',
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        },
        {
          name: 'apple-touch-fullscreen',
          content: 'yes',
        },
        {
          name: 'browsermode',
          content: 'application',
        },
        {
          name: 'apple-mobile-web-app-title',
          content: '',
        },
        {
          name: 'Keywords',
          content: '',
        },
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
      ],
      template: `./src/view/index/index.html`,
      title: `title`,
      filename: `index.html`,
      chunks: 'all',
      hash: false,
      minify: false,
      inject: 'body',
      scriptLoading: 'blocking',
    }),
  ],
};
module.exports = baseOptions;
