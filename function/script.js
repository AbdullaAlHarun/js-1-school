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
    heading.style.color = 'white';
}

buttonColours.onclick = changeColor;


//function inside a objects 
const catBtn  = document.querySelector(".cat");
const pet = {
    type: "cat",
    name: "Titi",
    age: 10,
    isFriendly: false, 
    meawMeaw: function (){
        console.log("the sound of the cat ");
    }
};
console.log("type: ", pet.type);
console.log("Is the cat is friendly: ", pet.isFriendly);

pet.meawMeaw();
catBtn.onclick = pet.meawMeaw;
