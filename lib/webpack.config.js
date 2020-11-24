const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const defaultConfig = (mode, entry) => ({
  mode,
  entry,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
})

const productionConfig = (library) => ({
  output: {
    filename: 'index.js',
    path: path.resolve(process.cwd(), './dist'),
    library: `@lukasz-starosta/${library}`,
    libraryTarget: 'umd'
  }
})

const developmentConfig = {
  output: {
    filename: 'index.js',
    path: path.resolve(process.cwd(), './dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(process.cwd(), './dist'),
    hot: true
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'MicroConnect starter',
    template: path.resolve(process.cwd(), './public/index.html'),
  })],
};

module.exports = (env) => {
  const {production, entry, library} = env || {production: false, entry: './src/index.js', library: ''};
  const mode = production ? 'production' : 'development';

  return {
    ...defaultConfig(mode, entry),
    ...(production ? productionConfig(library) : developmentConfig)
  }
};
