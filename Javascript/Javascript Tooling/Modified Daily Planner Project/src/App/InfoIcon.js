// ^ "import" keyword Syntax -> import {name of function,class,etc which is to be imported} from 'path of file';
// ^ "export" keyword Syntax -> export "infront of item to be exported"

// ? "Cmp" refers to here as an "export default" as it default is One Per Module.
// * "default" keyword "import" Syntax -> import "anyName" from 'path of file';
// ! NOTE - No use of {} in default exports to import Syntax.

import Cmp, { doSomething } from './Component';

console.log('InfoIcon running');

export class InfoIcon extends Cmp
{
  constructor(closeNotifierFunction, text, hostElementId)
  {
    super(hostElementId);
    this.closeNotifier = closeNotifierFunction;
    this.text = text;
    this.create();
    this.closeInfoIcon = () => {
      this.detach();
      this.closeNotifier();
    };
  }

  create()
  {
    const InfoIconElement = document.createElement('div');
    InfoIconElement.className = 'card';
    const InfoIconTemplate = document.getElementById('infoIcon');
    
    // & document.importNode() - It creates a copy of a Node or DocumentFragment from another document, to be inserted into the ....
    // & .... current document later.
    const InfoIconBody = document.importNode(InfoIconTemplate.content, true);
   
    InfoIconBody.querySelector('p').textContent = this.text;
    InfoIconElement.append(InfoIconBody);

    const hostElPosLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight;
    const parentElementScrolling = this.hostElement.parentElement.scrollTop;

    const x = hostElPosLeft + 20;
    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;

    InfoIconElement.style.position = 'absolute';
    InfoIconElement.style.left = x + 'px'; // 500px
    InfoIconElement.style.top = y + 'px';

    InfoIconElement.addEventListener('click', this.closeInfoIcon);
    this.element = InfoIconElement;
  }
}