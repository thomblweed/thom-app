const common = require('./webpack.common.cjs');
const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/,
        use: ['css-loader']
      }
    ]
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: /\.(js|css|svg)$/
      // deleteOriginalAssets: true
    })
  ]
});
