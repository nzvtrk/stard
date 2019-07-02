const webpack = require('webpack')
const merge = require('webpack-merge')
const CircularDependencyPlugin = require("circular-dependency-plugin");

const getCoreConfig = require('./webpack.core.config')


module.exports = env => merge(getCoreConfig(env), {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/
    })
  ],
  devServer: {
    hot: true,
    port: 1337,
    contentBase: '../dist/',
    // open: true,
    historyApiFallback: true,
    stats: "errors-only"
  }
});
