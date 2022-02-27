const path = require('path');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  entry: {
    main: path.resolve(__dirname, './src/index.tsx')
  },
  output: {
    publicPath: 'auto'
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    port: 2000,
    hot: true
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
        test: /\.(woff|woff2)$/i,
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
    // new ModuleFederationPlugin({
    //   name: 'login',
    //   filename: 'remoteEntry.js',
    //   remotes: {
    //     index: 'index'
    //   },
    //   exposes: {
    //     Login: './src/features/login/login.tsx'
    //   },
    //   shared: ['react', 'react-dom']
    // })
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
