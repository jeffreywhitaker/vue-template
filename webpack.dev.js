const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const WebpackNotifierPlugin = require('webpack-notifier-2')

module.exports = {
  mode: 'development',
  watchOptions: {
    ignored: /node_modules/,
  },
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin(),
    new WebpackNotifierPlugin({ alwaysNotify: true }),
  ],
  module: {
    rules: [
      // handle JS modules (files)
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      // handle vue files
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            whitespace: 'condense',
          },
        },
      },
      // handle css files
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // handle less files
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      // handle png modules (files)
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
            },
          },
        ],
      },
    ],
  },
}
