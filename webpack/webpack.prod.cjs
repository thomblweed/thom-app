const common = require('./webpack.common.cjs');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// TODO: uncomment once compression with CloudFront sorted
// const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },
  // plugins: [
  //   new CompressionPlugin({
  //     filename: '[path][base].br',
  //     algorithm: 'brotliCompress',
  //     test: /\.(js|css|svg)$/
  //     // deleteOriginalAssets: true
  //   })
  // ]
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
      linkType: 'text/css'
    })
  ]
});
