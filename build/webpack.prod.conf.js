const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const nodeExternals = require('webpack-node-externals')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ReactLoadablePlugin = require('react-loadable/webpack')
  .ReactLoadablePlugin

const baseConfig = require('./webpack.base.conf')

const commonConfig = merge(baseConfig, {
  devtool: false,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },

          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              sourceMap: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ],
        include: path.resolve(__dirname, '../src')
      },

      // 针对第三方库的样式
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/'
            }
          },

          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: false
            }
          }
        ],
        exclude: path.resolve(__dirname, '../src')
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/app.css',
      chunkFilename: 'css/[name].[hash:7].css'
    }),
    new ReactLoadablePlugin({ filename: './dist/react-loadable.json' }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      inject: true
    })
  ]
})

const clientConfig = merge(commonConfig, {
  entry: {
    app: path.resolve(__dirname, '../src/entry-client')
  },
  output: {
    chunkFilename: '[name].[hash].client.js'
  }
})

const serverConfig = merge(commonConfig, {
  target: 'node',
  entry: path.resolve(__dirname, '../src/entry-server'),
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'entry-server.js',
    chunkFilename: '[name].[hash].server.js',
    libraryExport: 'default',
    libraryTarget: 'commonjs2'
  }
})

module.exports = [clientConfig, serverConfig]
