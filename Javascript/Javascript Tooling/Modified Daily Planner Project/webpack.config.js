// TODO:: CommonJS Syntax which is based on Node JS :-

const path = require('path');

module.exports =
{
  entry: "./src/Daily.js",
  mode: "development",
  output: {
    filename: 'Daily.js',
    path: path.resolve(__dirname, 'bundled scripts'),
    publicPath: 'bundled scripts/'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  // devServer: {
  //   contentBase:'./'
  // } 
};