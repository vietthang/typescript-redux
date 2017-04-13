'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      // 'react-hot-loader/webpack',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './src/app.tsx'
    ]
  },

  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      { test: /(\.tsx|\.ts)$/, use: ['react-hot-loader/webpack', 'awesome-typescript-loader'] },
      { test: /\.css$/, use: 'css-loader' }
    ]
  },

  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: path.resolve(__dirname, '.'),
    // match the output path

    publicPath: '/dist'
    // match the output `publicPath`
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DllReferencePlugin({
      manifest: require("./dist/vendor.dll.manifest.json")
    }),
  ],

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  devtool: 'sourcemap'

};
