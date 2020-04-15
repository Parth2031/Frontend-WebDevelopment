// TODO:: Understanding Modular Javascript :-

// ? NOTE :- Modular JS is based on ES2015 which are import and export statements.
// ! NOTE - While doing Modular Javascript, we need Serve JS to run simantaneously as it is needed to avoid any security issues.
// ! So, we write serve in terminal and use  the host id and run on the browser. It is just like live server extension but only for Modular JS.

/*
? Syntax of import & export -
* "import" keyword Syntax -> import {name of function,class,etc which is to be imported} from 'path of file';
* "export" keyword Syntax -> export "infront of item to be exported like function/class/variable,etc"
*/

// ! Example of Synatax ->

// import { name of file to be imported like ProjectList } from './assets/App/ProjectList.js';
// export class ProjectList { .... };

// TODO:: "import" keyword Path -

// *  '.(.)/folder_name/..../filename.extension'                    // <-- In this, one dot (.) is used only some times. 
// ? So, extension is like -> .js,.html,etc.   

// TODO:: Types of "export" keyword :-
/*
* Named Exports(Zero or more exports per module)
* Default Exports(One per module) -
!                                   "default keyword" is used.

* Syntax of "export default" -> export default "infront of item to be exported like function/class/variable,etc"
? NOTE - When we use "default" keyword, we don't require name of any class/function/variable,etc.

* "default" keyword "import" Syntax -> import "anyName" from 'path of file';
? NOTE - No use of {} in default exports to import Syntax.
*/

// ! Example of Types of "export" keyword ->

// export class ProjectItem { ....};
// export default class { .... };
// import Cmp, { doSomething } from './Component.js';

// TODO:: "import" keyword Add On's :-

// * "*" is used when we want to select all the exports from that choosen file.
// ? "as" is used to change the name of selected file for the current file to be worked upon so to avoid clashing of same names in .... 
// ? .... exported and imported file

// ! Example of "import" keyword Add On's ->

// import { ProjectItem as ProItem } from './ProjectItem.js';
// import * as DOMH from '../Utility/DOMHelper.js';

// TODO:: Dynamic importing of file :-

// ? NOTE - 
/*
! import(path of file) is a function which is based on Promise Built-In Object and is used for dynamically calling a import file
! only when needed rather than loading the whole file at the start of program loading.
? It helps us to save the memory space of not loading the all file rather than only needed files are loaded.
* It is written down where it is used so usually in middle of some code or at end.
*/

// TODO: Syntax of Dynamic import -  
// ?                            import('path of file').then( () => { .... });

// // ---------------------------------------------------------------------------------------------------------------------------------

// * NOTE - "globalThis" keyword is used instead of "const" when using modular javascript as globalThis help us to access any item from any file. 

// ! Example of globalThis Property ->

globalThis.DEFAULT_VALUE = 'MAX';
// console.log(DEFAULT_VALUE);