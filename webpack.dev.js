const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = merge(common, {
  mode: 'development',
  entry: {
    home: ['./client/src/index.home.jsx', hotMiddlewareScript],
    login: ['./client/src/index.login.jsx', hotMiddlewareScript],
    workspace: ['./client/src/index.workspace.jsx', hotMiddlewareScript],
    404: ['./client/src/index.404.jsx', hotMiddlewareScript]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
