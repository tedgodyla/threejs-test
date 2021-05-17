const path = require('path');

module.exports = {
  mode: 'development',
  name: 'app',
  devtool: 'source-map',
  entry: {
    app: ['./src/js/app.js']
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  }
};