const common = require('./webpack.common.cjs');
const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    port: 1234,
    open: true,
    hot: true,
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/,
        // read from right to left - the order of these loaders is important
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [new BundleAnalyzerPlugin()],
  optimization: {
    concatenateModules: true
  }
});
