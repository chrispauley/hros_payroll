// webpack 3.8.1
//
const path = require('path');
const env = process.env.NODE_ENV || 'development'

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  stats: {
    entrypoints: false,
    version: true,
    maxModules: 1
    // publicPath: true
  },
  entry: {
    'index': './src/index.js',
    'payroll': './src/payroll.js',
    'jschemapage': './src/jschemapage',
    'validate': './src/validate',
    'payrollschema': './src/payrollschema',
    'about': './src/about.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: [path.join(__dirname, "public"), path.join(__dirname, "src")],
    port: 3333,
    open: true,
    openPage: 'index.html',
    stats: 'errors-only'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/, /bower_components/, './src/json'
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      publicPath: 'public'})
  ]
};
