const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: '@lukasz-starosta/micro-connect',
    libraryTarget: 'umd'
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })],
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      root: 'ReactDOM'
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  }
};