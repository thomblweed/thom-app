const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].[contenthash:8].js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    port: 1234,
    liveReload: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      inject: true
    })
  ],
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            comparisons: false
          },
          mangle: {
            safari10: true
          },
          output: {
            comments: false,
            ascii_only: true
          },
          warnings: false
        }
      }),
      new OptimizeCssAssetsPlugin()
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxInitialRequests: 20,
      maxAsyncRequests: 20,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name(module, chunks, cacheGroupKey) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `${cacheGroupKey}.${packageName.replace('@', '')}`;
          }
        },
        common: {
          minChunks: 2,
          priority: -10
        }
      }
    },
    runtimeChunk: 'single'
  }
};
