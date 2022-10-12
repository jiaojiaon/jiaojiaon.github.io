const name = document.querySelector('#name');
const backgroundColor = document.querySelector('#backgroundColor');
const textColor = document.querySelector('#textColor');
const size = document.querySelector('#size');
const reset = document.querySelector('#reset')

function reset(){
    const resetname = document.getElementById('name');
    resetname.style.color = "black";
    resetname.style.fontSize = "12";
    resetname = "";
    resetname.style.background = "white";
}