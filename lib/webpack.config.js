const path = require('path');

module.exports = {
  mode: 'development',
  // TODO: allow other types (.js, .jsx, .ts)
  entry: './src/index.tsx',
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
    alias: {
      'react': path.resolve(process.cwd(), './node_modules/react'),
      'react-dom': path.resolve(process.cwd(), './node_modules/react-dom')
    }
  },
  // TODO: use this for prod
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
  output: {
    filename: 'index.js',
    path: path.resolve(process.cwd(), './dist'),
    library: 'typescript-react',
    libraryTarget: 'commonjs2'
  },
  devtool: 'inline-source-map',
  // TODO: add dev-server for development, exclude for production
};
