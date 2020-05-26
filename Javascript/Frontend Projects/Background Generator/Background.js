var colorone = document.querySelector("#colorone");
var colortwo = document.querySelector("#colortwo");
var bodybg = document.querySelector("#bodybg");
var showdata  = document.querySelector("#showvalue");

// ! Type: 'input' in adddEventListener is used only when the value of <input>, <select> & <textarea> element has been changed.

colorone.addEventListener('input', bgcolorchange);
colortwo.addEventListener('input', bgcolorchange);

// TODO:: Syntax for linear gradient in Js -->  
// * selected - variablename.style.background = "linear-gradient(to right, " + colorone.value + "," + colortwo.value + ")";

function bgcolorchange()
{   
  bodybg.style.background = "linear-gradient(to right, " + colorone.value + "," + colortwo.value + ")";    
  showdata.textContent = bodybg.style.background;
}
