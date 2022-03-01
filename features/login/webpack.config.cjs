const path = require('path');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

const mode = process.env.NODE_ENV || 'development';
const deps = require('./package.json').dependencies;

module.exports = {
  mode,
  entry: {
    index: path.resolve(__dirname, './src/index.tsx')
  },
  output: {
    // filename: '[name].[contenthash].js',
    // publicPath: 'auto'
    publicPath: 'http://localhost:2001/'
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
    }),
    new ModuleFederationPlugin({
      name: 'login',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './Login': './src/Login.tsx',
        './AuthProvider': './src/state/authProvider.tsx'
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom']
        },
        axios: {
          singleton: true,
          requiredVersion: deps.axios
        },
        'thom-components': {
          singleton: true,
          requiredVersion: deps['thom-components']
        }
      }
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
