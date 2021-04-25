const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDev ? 'development' : 'production',
  devtool: 'eval-cheap-module-source-map',
  entry: [path.join(__dirname, 'src/index')],
  target: isDev ? "web" : "browserslist",
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  optimization: {
    minimize: true, //Update this to true or false
    chunkIds: "named",
    splitChunks: {
      cacheGroups: {
				commons: {
					chunks: "initial",
					minChunks: 2,
				},
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
			}
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      js: ['[name].[contenthash].js'],
      chunks: {
        head: {
          css: '[name].[contenthash].css'
        },
        main: {
          entry: '[name].[contenthash].js'
        }
      }
    })
  ]
};
