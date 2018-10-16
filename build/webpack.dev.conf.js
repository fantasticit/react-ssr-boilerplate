const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  devtool: '#eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(__dirname, '../src/entry-client.js')
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
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
          'style-loader',
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
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})
