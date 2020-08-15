// TODO:: Understanding ESLint :-

/*
! Explanation of ESLint -

? It is a Code Quality Checker which is used to optimize the code so as to make the code less bulky and more efficient.
* It holds some set of rules that make the code in a very unique format and consistent.
*/

// ^ npm Commands (Terminal Commands) in order to install eslint :-

/*
! npm (Terminal Commands) -

* npm init : It is used to intialize package.json which holds the dependencies name and it's version and also scripts.
? npm install --save-dev eslint : It is used to install eslint dependencies so to use them.
*/

// ^ Creating ESlint Configuration File :-

/*
! Creating ESLint Configuration File to optimize code -
? In order to configure it's setting's, we use  ->>

* node_modules/.bin/eslint --init 
~             OR
? CTRL+SHIFT+P and choose ESLint Configurations.
*/

// ^ package.json Parts to be added are :-

/*
! Package.json file -
{
  "name": "es-lint",
  "version": "1.0.0",
  "description": "Understanding ESLint",
  "main": "ESLint.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Parth Rastogi",
  "license": "ISC",
  "devDependencies": {

  ? This shows the installed developer dependencies in a local file.  -->>
  * "eslint": "^6.8.0"
  }
}
*/
