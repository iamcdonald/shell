const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [path.join(__dirname, 'src/index')],
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: '[name].[hash].css', allChunks: true }),
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
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ]
};
