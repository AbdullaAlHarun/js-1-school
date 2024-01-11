let heading  = document.querySelector("h1");
let button = document.querySelector("button");
let buttonColours = document.querySelector(".colours");
let body = document.querySelector("body");

function changeHeading(){
    heading.innerHTML = "It's a god idag";
}

button.onclick = changeHeading;

function changeColor () {
    body.style.backgroundColor = 'blue';
}

buttonColours.onclick = changeColor;