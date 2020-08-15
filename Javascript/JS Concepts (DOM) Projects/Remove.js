// TODO:: Basic Javscript Element Based Project

const body = document.querySelector("body");

const h1 = document.createElement("h1");
h1.className = "todo";
h1.appendChild(document.createTextNode("Todo List"));
body.appendChild(h1);

const ul = document.createElement("ul");
ul.id="list";
body.appendChild(ul);

var li_1 = document.createElement("li");
li_1.appendChild(document.createTextNode("Do My work"));
ul.appendChild(li_1);

var li_2 = document.createElement("li");
li_2.appendChild(document.createTextNode("New Homework"));
ul.appendChild(li_2);

const input = document.createElement("input");
input.id = "inp";
input.setAttribute("type","text");
input.setAttribute("placeholder","Please Type..");
body.appendChild(input);

const button = document.createElement("button");
button.className = "butt";
button.appendChild(document.createTextNode("Click Me"));
body.appendChild(button);

// ! Using .addEventListener() which is a DOM Event.

var inputLength = () => {
  return input.value.length;
}

button.addEventListener("click",(event) =>
{
  console.log(event.target.type);
  
  if(inputLength() > 0)
    create_append();
})

// ^ Keypress event and all other keyboard events require "keycode" values to be equal to in order to be accessible. 

input.addEventListener("keypress", function(event)
{
  console.log(event.target.type);

  if(inputLength() > 0 && event.keyCode == 13)
      create_append();
})

function create_append()
{
  const li = document.createElement("li");
  ul.appendChild(li);
  li.appendChild(document.createTextNode(input.value));
  input.value = "";
}

const box = document.createElement("div");
body.appendChild(box);

const butt_remove = document.createElement("button");
butt_remove.id = "remove";
butt_remove.appendChild(document.createTextNode("Remove"));
box.appendChild(butt_remove);

butt_remove.addEventListener("click",() => { ul.removeChild(li_1); })
butt_remove.addEventListener("dblclick",() => { ul.remove(li_2); })
