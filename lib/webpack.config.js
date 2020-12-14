const path = require('path');
const increaseSpecificity = require('postcss-increase-specificity');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const defaultConfig = (mode, entry, className) => ({
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
        use: [
          'style-loader',
          'css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: [
              increaseSpecificity({
                stackableRoot: className ? `.${className}` : '',
                repeat: 1,
              }),
            ],
          },
        }],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
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
  const {production, entry, library, className} = env || {production: false, entry: './src/index.js', library: '', className: ''};
  const mode = production ? 'production' : 'development';

  const defaultConfiguration = defaultConfig(mode, entry, className);
  const additionalConfiguration = mode === 'production' ? productionConfig(library) : developmentConfig;

  return {
    ...defaultConfiguration,
    ...additionalConfiguration
  };
};
