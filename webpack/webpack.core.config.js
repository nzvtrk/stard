const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer')

const DIST_DIR = path.resolve(__dirname, '../dist/')
const SOURCE_DIR = path.resolve(__dirname, '../src/')
const ENTRY_POINT = path.resolve(SOURCE_DIR , 'index.js')


module.exports = env => {
  const isDev = env !== 'production'
  const getAssetName = (ext = '[ext]') => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

  return {
    entry: ENTRY_POINT,
    output: {
      filename: getAssetName('js'),
      path: DIST_DIR,
      // publicPath: "./",
      chunkFilename: getAssetName('chunk.js'),
    },

    resolve: {
      extensions: ['.jsx', '.js'],
      alias: {
        '@': SOURCE_DIR,
      }
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.(css|scss)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: isDev
              },
            },
            'css-loader',
            'sass-loader', // configure fiber
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer()
                ]
              }
            },
          ]
        },
        {
          test: /\.(woff|woff2)$/,
          use: [{
            loader: 'file-loader',
            options: {
              outputPath: 'assets/fonts',
              name: '[name].[ext]',
            },
          }]
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/images',
                name: '[name].[ext]'
              },
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 50
                },
                optipng: {
                  enabled: true,
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                },
                gifsicle: {
                  interlaced: false,
                },
                webp: {
                  quality: 75
                },
                disable: isDev
              },
            }
          ],
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({template: './src/index.html'}),
      new MiniCssExtractPlugin({
        filename: getAssetName('css'),
      }),
    ]
  }
}
