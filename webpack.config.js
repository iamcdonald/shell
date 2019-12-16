const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [path.join(__dirname, 'src/index')],
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  optimization: {
    minimize: true //Update this to true or false
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      js: ['[name].[hash].js'],
      chunks: {
        head: {
          css: '[name].[hash].css'
        },
        main: {
          entry: '[name].[hash].js'
        }
      }
    })
  ]
};
