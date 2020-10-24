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

const productionConfig = {
  output: {
    filename: 'index.js',
    path: path.resolve(process.cwd(), './dist'),
    library: '@lukasz-starosta/typescript-react',
    libraryTarget: 'umd'
  },
  // remove if not necessary after deploy, right now react is `npm link`ed
  // externals: {
  //   react: {
  //     commonjs: 'react',
  //     commonjs2: 'react',
  //     root: 'React'
  //   },
  //   'react-dom': {
  //     commonjs: 'react-dom',
  //     commonjs2: 'react-dom',
  //     root: 'ReactDOM'
  //   }
  // }
}
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
  const {production, entry} = env || {production: false, entry: './src/index.js'};

  return {
    ...defaultConfig(entry),
    ...(production ? productionConfig : developmentConfig)
  }
};
