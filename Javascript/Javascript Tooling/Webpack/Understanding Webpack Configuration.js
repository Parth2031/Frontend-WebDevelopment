// TODO:: Understanding Webpack Configuration and Webpack Production Configuration :-

const path = require('path');
// const CleanPlugin = require('clean-webpack-plugin');      // ! <-- It is used when we are adding some webpack plugin.

// TODO:: Complete Syntax of Webpack Configuration and Webpack Production Configuration -->>

module.exports =
{
  /*
  ! Chosen Mode tells webpack to use its built-in optimizations accordingly.
  * Types of Mode -
  ?                "production" | "development" | "none"
  */
  mode: "none",
  
  /*
  ! Here the application starts executing and webpack starts bundling. It defaults to ./src.
  * Types of entry -
  ?                 string | object | array
  */
  entry: "./src",
  
  // TODO: In this, the output format & location is decided. Options related to how webpack emits results.
  output:
  {
    // ! The target directory for all output files must be an absolute path (use the Node.js path module).
    // ? Only string format is allowed for destination path.
    path: path.resolve(__dirname, 'asset', 'scripts'),
   
    // ! The filename template for entry chunks.
    // ? Only string format is allowed for filename.
    filename: "app.js",
   
    // ! The url to the output directory resolved relative to the HTML page.
    // ? Only string format is allowed for general path where the files are bundled upon.
    publicPath: "assets/scripts/",
    
    // ! The name of the exported library.
    // ? Only string format is allowed for libraryname.
    library: "MyLibrary",
  },
  
  // TODO: Module are used for adding Third Party Packages like Babel Loader. 
  module:
  {
    // ! It holds some set of rules and exclude some files in order to process it.
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

  // TODO: Enhance debugging by adding meta info for the browser devtools source-map most detailed at the expense of build speed.
  devtool: "names are to find in documentation",
  
  // ! The home directory for webpack the entry and module.rules.loader option is resolved relative to this directory.
  // ? Only string format is allowed (absolute path!).
  context: __dirname,

  // ! The environment in which the bundle should run changes chunk loading behavior and available modules.
  target: "web",

  // ! Lets you precisely control what bundle information gets displayed.
  stats: "errors-only",
          
  devServer:
  {
    // ! Proxy URLs to backend development server.
    proxy: {
      '/api': 'http://localhost:3000'
    },
    
    // * Types of contentBase -
    // ?                       boolean | string | array, static file location
    contentBase: path.join(__dirname, 'public'),
  },
  
  // ! List of additional plugins.
  plugins: [
    // new CleanPlugin.CleanWebpackPlugin() 
  ]
}  