var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var path = require('path');

const ENV = process.env.NODE_ENV;

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        eval: true,
        toplevel: true,
      },
      comments: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new CopyWebpackPlugin([
      {
        from: './favicons',
        to: './favicons',
        toType: 'dir'
      }
    ])
  ]
});
