const common = require('./webpack.common.cjs');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/,
        use: ['css-loader']
      }
    ]
  }
});
