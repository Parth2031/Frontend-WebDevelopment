// TODO:: Basic Webpack Production Configuration :-

const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports =
{
  entry: "./src/app.js",
  mode: "development",
  output: {
    // filename: 'app.js',

    // ! It is used to make a new name of file every time, we build a file using webpack -->>
    filename: '[contenthash].js',
    
    path: path.resolve(__dirname, 'src'),
    publicPath: 'src/'
  },
  // devtool: 'cheap-source-map',
  
  // ! This plugin is used to joing clean-wepack-plugin -->>
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ],
  // devServer: {
  //   contentBase:'./'
  // } 
};