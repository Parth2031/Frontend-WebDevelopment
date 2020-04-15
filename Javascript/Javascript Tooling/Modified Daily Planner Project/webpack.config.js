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
  devtool: 'cheap-module-eval-source-map',
  // devServer: {
  //   contentBase:'./'
  // } 
};