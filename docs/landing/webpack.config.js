const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'micro-connect documentation',
      template: path.resolve(process.cwd(), './public/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        // this will copy /assets to /dist/assets
        {from: "assets", to: "assets"},
        // this will copy card input assets
        {from: "node_modules/@lukasz-starosta/angular-card-input/dist/assets", to: "assets"}
      ],
    }),
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(process.cwd(), './dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(process.cwd(), './dist'),
    hot: true
  },
};

