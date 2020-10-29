const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const defaultConfig = (entry) => ({
  // on production app crashes with 'startWorkWithPendingInteractions'
  mode: 'development',
  entry,
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

  return {
    ...defaultConfig(entry),
    ...(production ? productionConfig(library) : developmentConfig)
  }
};
