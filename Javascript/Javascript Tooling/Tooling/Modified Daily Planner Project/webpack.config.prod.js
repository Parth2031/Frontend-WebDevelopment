const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/Daily.js",
  mode: "development",
  devtool: 'cheap-source-map',
  output: {
    // filename: 'Daily.js',
    // ! It is used to make a new name of file every time, we build a file using webpack.
    
    filename: '[contenthash].js',
    path: path.resolve(__dirname, 'bundled scripts'),
    publicPath: 'bundled scripts/'
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ],
  // devServer: {
  //   contentBase:'./'
  // } 
};