const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client',
    'webpack/hot/dev-server',
    path.join(__dirname, 'src/browser/main.js')
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist/'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'build/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    rules: [{
      test: /.jsx?$/,
      use: [{
        loader: 'babel-loader',
        query: {
          presets: ['airbnb', 'react']
        }
      }],
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader',
        options: {
          includePaths: ['src/browser/scss']
        }
      }]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: './build/',
    progress: false,
    stats: {
      colors: true
    }
  }
};
