const path = require("path")
const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CriticalPlugin = require('critical-plugin');
// const CompressionPlugin = require("compression-webpack-plugin");

const getCoreConfig = require('./webpack.core.config')

const CPU_COUNT = require("os").cpus().length - 1;

const plugins = [
  new CleanWebpackPlugin(),
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      useShortDoctype: true,
      keepClosingSlash: true,
      minifyJS: true
    },
    template: path.join(__dirname, "../src/index.html")
  }),
  new CriticalPlugin()
  // new CompressionPlugin() need setup nginx for that
]

if (process.env.ANALYZE) {
  const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = env => merge(getCoreConfig(env), {
  mode: "production",
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        parallel: CPU_COUNT,
        terserOptions: {
          ecma: 5
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    noEmitOnErrors: true,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor"
        }
      }
    }
  },
  plugins,
  stats: {
    builtAt: true,
    hash: false,
    modules: false,
    children: false,
    assets: true
  }
});

