const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SRC_DIR = path.resolve(__dirname, 'src');
const EX_DIR = path.resolve(__dirname, 'node_modules');
const webpack = require('webpack');

const config = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  devtool: 'source-map',
  entry: SRC_DIR + '/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] }
        }],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          { loader: 'url-loader',
            options: { limit: 8192 }
          }
        ]
      }
    ]
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': { NODE_ENV: JSON.stringify('production')}
    // }),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './public/index.html'})
  ]
};

module.exports = config;
