const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    home: ['./client/src/index.home.jsx'],
    login: ['./client/src/index.login.jsx'],
    workspace: ['./client/src/index.workspace.jsx'],
    404: ['./client/src/index.404.jsx']
  },
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip'
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});
