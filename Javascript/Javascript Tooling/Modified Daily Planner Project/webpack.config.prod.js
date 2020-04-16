// TODO:: CommonJS Syntax which is based on Node JS :-

const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports =
{
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
  
  // ! It is used to add the modules of Babel Loader in order to get Browser Support.
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
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ],
  // devServer: {
  //   contentBase:'./'
  // } 
};