const name = document.querySelector("#name");

//function for change Text Color
function changeTColor(){
   var textcolor = document.getElementById('textcolor');
    name.style.color = textcolor.value;
}

//function for change background color 
function changeBgColor(){
  var bgcolor = document.getElementById('backgroundColor');
  name.style.backgroundColor = bgcolor.value;
}

//function for change front size 
function changesize(){
    const size = document.getElementById('size').value;
    name.style.fontSize = size + "px";
}

//function for the text display in different fonts
function changefront(obj){
    name.style.fontFamily = obj.value; 
}

//function for reset 
function reset(){
    name.style.color = "black";
    name.style.fontSize = "12px";
    name.value = "";
    name.style.background = "white";
}
