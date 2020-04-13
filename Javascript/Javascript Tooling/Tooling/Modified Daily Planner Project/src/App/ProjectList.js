// TODO:: "import" keyword Syntax -> import {name of function,class,etc which is to be imported} from 'path of file';

import { ProjectItem as ProItem } from './ProjectItem';
import {DOMHelper} from '../Utility/DOMHelper'

// ! "*" is used when we want to select all the exports from that choosen file.
// ? "as" is used to change the name of selected file for the current file to be worked upon so to avoid clashing of same names in .... 
// ? .... exported and imported file

// import * as DOMH from '../Utility/DOMHelper';

// ! This example of ProjectItem is used to show that we cannot access this variable outside this file.
// const ProjectItem = 'abc';

// console.log(DEFAULT_VALUE);

export class ProjectList
{
  constructor(type)
  {
    this.type = type;
    const proItems = document.querySelectorAll(`#${type}-projects li`);
    this.projects = [];
    for (const proItem of proItems) {
      this.projects.push(new ProItem(proItem.id, this.switchProject.bind(this), this.type));
    }

    console.log(this.projects);
    this.connectDroppable();
  }

  connectDroppable()
  {
    console.log(globalThis);
  
    const list = document.querySelector(`#${this.type}-projects ul`);

    // TODO:: In this, we are using Drag & Drop API as Events in Event Listeners.

    list.addEventListener('dragenter', event =>
    {
      if (event.dataTransfer.types[0] === 'text/plain')
      {
        list.parentElement.classList.add('droppable');
        event.preventDefault();
      }
    });

    list.addEventListener('dragover', event =>
    {
      if (event.dataTransfer.types[0] === 'text/plain') {
        event.preventDefault();
      }
    });

    list.addEventListener('dragleave', event =>
    {
      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {
        list.parentElement.classList.remove('droppable');
      }
    });

    list.addEventListener('drop', event =>
    {
      const projectId = event.dataTransfer.getData('text/plain');
      if (this.projects.find(p => p.id === projectId)) {
        return;
      }
      
      document.getElementById(projectId).querySelector('button:last-of-type').click();
      list.parentElement.classList.remove('droppable');
    
      // event.preventDefault();                    // ! <-- Not Required
    });
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project)
  {
    this.projects.push(project);
  
    // ! In this, DOMHelper becomes a object when imported from other file so we point towards it to access it's function.
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
  
    // TODO: It is used when we are selecting at all imports from a file to which we have given a name,"DOMHelp" which also works as object. 
    // DOMHelp.moveElement(project.id, `#${this.type}-projects ul`);

    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId)
  {
    // const projectIndex = this.projects.findIndex(p => p.id === projectId);
    // this.projects.splice(projectIndex, 1);

    this.switchHandler(this.projects.find(p => p.id === projectId));
    this.projects = this.projects.filter(p => p.id !== projectId);
  }
}
