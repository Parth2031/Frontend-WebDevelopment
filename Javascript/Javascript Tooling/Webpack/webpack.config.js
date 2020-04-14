// TODO:: Understanding Webpack Configuration :-

const path = require('path');

module.exports = {
  entry: "Webpacks.js",
  mode: "development",
  output: {
    filename: 'Webpacks.js',
    path: path.resolve(__dirname, 'src'),
    publicPath: 'src/'
  },
  // devtool: 'cheap-module-eval-source-map',
  // devServer: {
  //   contentBase:'./'
  // } 
};