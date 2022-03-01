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
    // publicPath: 'auto'
    publicPath: 'http://localhost:2000/'
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
    }),
    new ModuleFederationPlugin({
      name: 'main',
      filename: 'remoteEntry.js',
      remotes: {
        login: 'login@http://localhost:2001/remoteEntry.js'
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
