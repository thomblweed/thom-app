const path = require('path');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

module.exports = {
  mode: process.env.NODE_ENV ?? 'development',
  entry: './src/index.tsx',
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
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015',
        css: true
      })
    ]
  }
};
