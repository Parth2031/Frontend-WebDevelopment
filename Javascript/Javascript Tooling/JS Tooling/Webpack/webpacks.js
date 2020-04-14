// TODO:: Understanding Webpack :-

/*
! Explanation of Webpack - 

? Webpack is a bundler that allows you to split your JS code over multiple files and ship one bundle in the end.
? It allows you to transform code during bundling process.
? It allows you to optimize code during bundling process.
! NOTE -> Webpack works on npm modules (node_modules) which is "Node Package Manager" part of Node JS.
*/

// TODO:: npm Commands (Terminal Commands) in order to install webpack :-

/*
! npm (Terminal Commands) -

* npm init : It is used to intialize package.json which holds the dependencies name and it's version and also scripts.

? npm install --save-dev webpack webpack-cli : It is used to install webpack & webpack-cli devDependencies in node_modules.
? npm install --save-dev webpack-dev-server : It is used to run the website and reload automatically when the changes are mode in .js files.
  It is also an alternative to serve which doesn't load automatically so we run this continuosly in terminal for to see the changes.
? npm install --save-dev clean-webpack-plugin : It is used the clean the previous build scripts and to maintain only the new build scripts.

* npm run build : It is used to run the code. It is also used to build the all .js files into a bundle using webpack.  
* npm run build-dev : It is the given name by us to build the webpack-dev-server.
! NOTE -> Similarly, we can do for clean-webpack-plugin by giving a name in package.json in script section.
*/

// TODO:: Creating Webpack Configuration Files :-

/*
! Creating Webpack Configuration Files to export files as a bundle in a specified location -

? webpack.config.js : It is used to configure the main.js file at either development/production state of file.
? webpack.config.prod.js : It is used to configure the main.js file at only production state of file.
*/

// TODO:: package.json Part to be added are :-

/*
! Package.json file -
{
  "name": "webpacks",
  "version": "1.0.0",
  "description": "Understanding Webpack",
  "main": "Webpacks.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    
  ? In order to add npm run build commands, we need to add the given lines in package.json file ->>    
  * "build": "webpack",
  * "build-dev": "webpack-dev-server",            
  !                             In this, "build-dev" and "build-prod" name is given by me and can be changed according to user.
  * "build-prod": "webpack --config webpack.config.prod.js"
  },
  "author": "Parth Rastogi",
  "license": "ISC",
  "devDependencies": {
  
  ? This shows the installed developer dependencies in a local file.   
    "webpack": "^4.42.1",
    "webpack-cli": "^3.3.11"
  }
}
*/
