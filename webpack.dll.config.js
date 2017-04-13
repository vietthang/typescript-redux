'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: [
      'react',
      // 'react-redux',
      // 'react-dom',
      // 'react-router',
      // 'react-router-redux',
      // 'redux-observable',
      // 'rxjs',
      // 'react-bootstrap'
    ]
  },

  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].dll.js',
    library: '[name]'
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "dist", "[name].dll.manifest.json"),
      name: "[name]"
    }),
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],

  resolve: {
    modules: ["node_modules"]
  },

  devtool: 'sourcemap'
};
