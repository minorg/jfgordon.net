const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: ['./js/entry.js']
  },
  output: {
    filename: './js/output.js'
  },
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')]
  }
};