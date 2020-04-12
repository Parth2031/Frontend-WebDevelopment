// TODO:: Understanding Modular Javascript Project :-

// ! "import" keyword Syntax -> import {name of function,class,etc which is to be imported} from 'path of file';

import { ProjectList } from './assets/App/ProjectList.js';

// * NOTE - "globalThis" keyword is used instead of "const" when using modular javascript as globalThis help us to access any item from any file. 

globalThis.DEFAULT_VALUE = 'MAX';

class App
{
  static init()
  {
    const activeProjectsList = new ProjectList('active');
    const finishedProjectsList = new ProjectList('finished');
    
    activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList));
    finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));
  }

  // ! In this function, we are Dynamically Loading Script using Event Listener when we want and not automatically is script loaded.

  static loadScript()
  {
    const loadDynamicScript = document.createElement('script');
    loadDynamicScript.src = 'assets/Utility/Dynamic Script.js';
    loadDynamicScript.defer = true;
    document.head.append(loadDynamicScript);
  }
}

App.init();
