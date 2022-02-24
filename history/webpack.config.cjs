const path = require('path');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV ?? 'development', // value should be either 'development' or 'production'
  entry: {
    // entry point of the application, what are the files that will start he project
    main: path.resolve(__dirname, './src/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    // [name] looks at the entry point and determines the name of the output file i.e. main
    filename: '[name].[contenthash].js',
    assetModuleFilename: '[name][ext]' // asset files will be named e.g. photo.jpg
  },
  // source map
  devtool: 'inline-source-map',
  // dev server options/settings
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), // location for the files to be served from
    port: 1234, // port to run the server on
    open: true, // open the browser automatically
    hot: true, // hot module reloading, watches for changes in the src folder
    watchContentBase: true // same as hot but also watches the contentBase folder for changes
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
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
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  // plugins
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      title: 'thom app'
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
