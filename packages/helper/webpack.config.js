const path = require('path')

module.exports = {
  target: 'web',
  entry: {
    index: path.resolve('./src/index.ts')
  },
  output: {
    library: 'tmhao-helper',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.json',
          compiler: 'ttypescript'
        },
        exclude: [
          /node_modules/
        ]
      }
    ]
  },
  resolve: {
    // without this, webpack can't resolve module imported in index.ts file (interesting)
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, './src/')
    }
  },
  stats: {
    colors: true
  },
  mode: 'development',
  devtool: false,
  externals: {
    react: "react",    
    "react-intl": "react-intl"
  }
};
