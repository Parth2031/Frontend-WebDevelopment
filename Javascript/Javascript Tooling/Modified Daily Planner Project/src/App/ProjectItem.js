// ^ "import" keyword Syntax -> import {name of function,class,etc which is to be imported} from 'path of file';
// ^ "export" keyword Syntax -> export "infront of item to be exported"

import { DOMHelper } from '../Utility/DOMHelper';
// import { InfoIcon } from './InfoIcon';

console.log('Project Item created!');

export class ProjectItem
{
  constructor(id, updateProjectListsFunction, type)
  {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.hasActiveInfoIcon = false;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
    this.connectDrag();
  }

  showMoreInfoHandler()
  {
    if (this.hasActiveInfoIcon) {
      return;
    }
   
    const projectElement = document.getElementById(this.id);
    const infoIconText = projectElement.dataset.extraInfo;
   
    // const infoIcon = new InfoIcon( () => {
    //     this.hasActiveInfoIcon = false;
    //   },
    //   infoIconText,
    //   this.id
    // );

    // infoIcon.attach();
    // this.hasActiveInfoIcon = true;

    // * NOTE - 
    /*
     ! import(path of file) is a function which is based on Promise Built-In Object and is used for dynamically calling a import file 
     ! only when needed rather than loading the whole file at the start of program loading. 
     ? It helps us to save the memory space of not loading the all file rather than only needed files are loaded.
     */

    import('./InfoIcon').then( module =>
    {
      const infoIcon = new module.InfoIcon( () => {
          this.hasActiveInfoIcon = false;
        },
        infoIconText,
        this.id
      );

      infoIcon.attach();
      this.hasActiveInfoIcon = true;
    });
  }

  connectDrag()
  {
    const item = document.getElementById(this.id);
  
    item.addEventListener('dragstart', event =>
    {
      // & dataTranfer is part of the Data Attributes Functionality Property and it has it's own methods as well in JS.

      event.dataTransfer.setData('text/plain', this.id);
      event.dataTransfer.effectAllowed = 'move';
    });

    item.addEventListener('dragend', event => {
      console.log(event);
    });
  }

  connectMoreInfoButton()
  {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoBtn = projectItemElement.querySelector('button:first-of-type');
  
    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));
  }

  connectSwitchButton(type)
  {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector('button:last-of-type');
  
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
  
    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
  
    switchBtn.addEventListener('click',this.updateProjectListsHandler.bind(null, this.id));
  }

  update(updateProjectListsFn, type)
  {
    this.updateProjectListsHandler = updateProjectListsFn;
    this.connectSwitchButton(type);
  }
}