const path = require('path');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const mode = process.env.NODE_ENV || 'development';
console.log('mode', mode);

module.exports = {
  mode,
  entry: {
    login: path.resolve(__dirname, './src/index.tsx')
  },
  output: {
    // filename: '[name].[contenthash].js',
    publicPath: 'auto'
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    port: 2001,
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
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
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
    //     Login: './src/login.tsx'
    //   },
    //   shared: { react: { singleton: true }, 'react-dom': { singleton: true } }
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
