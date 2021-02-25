const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./client/'],
  devtool :'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test : /\.html$/,
        loader : 'html-loader'
      }
    ]
  },
  plugins : [
    new HtmlWebPackPlugin({
      template : './public/index.html',
      filename : './index.html'
    })
  ]
}