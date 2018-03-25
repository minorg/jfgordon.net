const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: ['./entry.js']
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
    filename: 'js/output.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      {
        from: "src/css/",
        to: "css/"
      }, {
        from: "src/img/",
        to: "img/"
      }
    ]), new HtmlWebpackPlugin({
      filename: 'about.html',
      inject: false,
      template: 'src/about.hbs'
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      inject: false,
      template: 'src/contact.hbs'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: false,
      template: 'src/index.hbs'
    }),
    new HtmlWebpackPlugin({
      filename: 'childrenswear.html',
      inject: false,
      template: 'src/childrenswear.hbs'
    }),
    new HtmlWebpackPlugin({
      filename: 'exhibitions.html',
      inject: false,
      template: 'src/exhibitions.hbs'
    }),
    new HtmlWebpackPlugin({
      filename: 'presentations.html',
      inject: false,
      template: 'src/presentations.hbs'
    }),
    new HtmlWebpackPlugin({
      filename: 'publications.html',
      inject: false,
      template: 'src/publications.hbs'
    })
  ],
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')]
  }
};