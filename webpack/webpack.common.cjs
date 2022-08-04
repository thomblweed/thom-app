const path = require('path');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    // entry point of the application, what are the files that will start the project
    main: path.resolve(__dirname, '../src/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    // [name] looks at the entry point and determines the name of the output file i.e. main
    filename: '[name].[contenthash].bundle.js',
    // `chunkFilename` provides a template for naming code-split bundles (optional)
    chunkFilename: '[name].[contenthash].bundle.js',
    assetModuleFilename: '[name][ext]', // asset files will be named e.g. photo.jpg
    clean: true, // clean the output directory before building
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015'
        }
      },
      {
        // built in to webpack V5, asset resource loader
        test: /\.(png|jpe?g|gif|woff)$/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '../src')
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      title: 'thom app',
      inject: 'body',
      template: path.resolve(__dirname, './template/index.html')
    })
  ],
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015'
      })
    ],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendor',
          chunks: 'all'
        },
        forms: {
          test: /[\\/]node_modules[\\/](react-hook-form)[\\/]/,
          name: 'react-hook-form',
          chunks: 'all'
        }
      }
    }
  }
};
