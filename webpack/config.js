'use strict';

var DEBUG = (process.env.NODE_ENV !== 'production');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  debug: DEBUG,
  devtool: DEBUG ? 'eval' : false,
  cache: DEBUG,

  entry: DEBUG ? [
    'babel-polyfill',
    path.join(__dirname, '..', 'src', 'js', 'app.js'),
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
  ] : [
    'babel-polyfill',
    path.join(__dirname, '..', 'src', 'js', 'app.js'),
  ],

  output: {
    path: path.join(__dirname, '..', 'build'),
    publicPath: '/',
    filename: DEBUG ? 'js/bundle.js' : 'js/bundle.min.js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(jpe?g|gif|png)$/i,
        loader: 'url-loader?limit=10000&name=img/[name].[ext]'
      },
      {
        test: /\.(otf|eot|svg|ttf|woff(2)?)(\?[a-z0-9=&#.]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.ogg$/,
        loader: 'file-loader?name=audio/[name].[ext]'
      },
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ].concat(DEBUG ? [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.ejs',
        environment: 'development'
      }),
    ] : [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        comments: false,
      }),
      new HtmlWebpackPlugin({
        template: 'index.ejs',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        },
        environment: 'production'
      }),
      new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/, /en-gb.js$/),
  ])
};
