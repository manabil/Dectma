const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {EnvironmentPlugin} = require('webpack');
require('dotenv').config();

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(path.join(__dirname, '../'), 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new EnvironmentPlugin({
      API_KEY: process.env.X_RAPIDAPI_KEY,
      API_HOST: process.env.X_RAPIDAPI_HOST,
    }),
  ],
};
