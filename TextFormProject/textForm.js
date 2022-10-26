//function for reset 
function reset(){
    const resetname = document.getElementById('name');
    resetname.style.color = "black";
    resetname.style.fontSize = "12px";
    resetname.value = "";
    resetname.style.background = "white";
}

//function for change Text Color
let textColor;
const defaultTextColor = "black";

window.addEventListener("load", startup, false);

function startup() {
    textColor = document.querySelector("#textColor");
    textColor.value = defaultTextColor;
    textColor.addEventListener("input", updateFirst, false);
    textColor.addEventListener("change", updateAll, false);
    textColor.select();
}

function updateFirst(event) {
  const name = document.querySelector("#name");
  if (name) {
    name.style.color = event.target.value;
  }
}

function updateAll(event) {
  document.querySelectorAll("name").forEach((name) => {
    name.style.color = event.target.value;
  });
}
//function for change background color 
let backgroundColor;
const defaultBackgroundColor = "white";

window.addEventListener("load", startup, false);

function startup() {
    backgroundColor = document.querySelector("#backgroundColor");
    backgroundColor.value = defaultBackgroundColor;
    backgroundColor.addEventListener("input", updateFirst, false);
    backgroundColor.addEventListener("change", updateAll, false);
    backgroundColor.select();
}

function updateFirst(event) {
  const name = document.querySelector("#name");
  if (name) {
    name.style.background = event.target.value;
  }
}

function updateAll(event) {
  document.querySelectorAll("name").forEach((name) => {
    name.style.background = event.target;
  });
}

//function for change front size 
function changesize(){
    const name = document.getElementById('name');
    const size = document.getElementById('size').value;
    name.style.fontSize = size + "px";
}

//function for the text display in different fonts
function changefront(obj){
    const name = document.getElementById('name');
    name.style.fontFamily = obj.value; 

    
}

