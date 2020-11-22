const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'micro-connect documentation',
    template: path.resolve(process.cwd(), './public/index.html'),
  })],
  output: {
    filename: 'index.js',
    path: path.resolve(process.cwd(), './dist'),
  },
};
