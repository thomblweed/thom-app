const path = require('path');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    // entry point of the application, what are the files that will start he project
    index: path.resolve(__dirname, '../src/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    // [name] looks at the entry point and determines the name of the output file i.e. main
    filename: '[name].[contenthash].js',
    assetModuleFilename: '[name][ext]', // asset files will be named e.g. photo.jpg
    clean: true, // clean the output directory before building
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    port: 1234, // port to run the server on
    open: true, // open the browser automatically
    hot: true // hot module reloading, watches for changes in the src folder
  },
  // loaders
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
        test: /\.s(a|c)ss$/,
        // read from right to left, i.e. the order of these loaders is important
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        // built in to webpack V5, asset resource loader
        test: /\.(png|jpe?g|gif|woff)$/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
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
        target: 'es2015',
        css: true
      })
    ]
  }
};
