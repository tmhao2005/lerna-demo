const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // target: 'node',
  entry: {
    index: path.resolve('./src/index.ts')
  },
  output: {
    library: 'share',
    libraryTarget: 'umd',
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  experiments: {
    outputModule: true,
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
      },
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          {
            loader: 'css-loader',
            options: {}
          }
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
  plugins: [
    new MiniCssExtractPlugin()
  ],
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
