'use strict';

const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const common = {
  context: resolve(__dirname),
  name: 'client',
  entry: {
    client: './src/index.js',
  },
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? false : false,
  target: 'web',
  output: {
    filename: 'scripts/[name].bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],    
  },
  module: {
    rules: [      
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(jsx?)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
            ]
          }
        },
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: resolve(__dirname, 'index.ejs'),
      filename: 'index.html',
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
        },
      },
    },
  },
  devServer: {
    historyApiFallback: {
      index: '/'
    }
  },
};

module.exports = common;
