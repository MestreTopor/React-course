'use strict';

// let path = require('path');
require('path');

module.exports = {
  mode: 'development',
  entry: './React test folder/js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/React test folder/dist/js'
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
                debug: true,
                corejs: 3,
                useBuiltIns: "usage"
            }]]
          }
        }
      }
    ]
  }
};

