const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: ['./js/entry.js']
  },
  module: {
    loaders: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ]
  },
  output: {
    filename: './js/output.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      {
        from: "src/css/",
        to: "css/"
      }, {
        from: "src/fonts/",
        to: "fonts/"
      }, {
        from: "src/img/",
        to: "img/"
      }
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.hbs'
    })
  ],
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')]
  }
};