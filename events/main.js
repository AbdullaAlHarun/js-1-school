

function saySomethingFunction (){
    console.log("hello Mehedi")
}

const button = document.querySelector(".btn");
console.log(button);

//way 1 
button.addEventListener("click",function(){
    console.log("you clicked me OMG!!");
});


button.addEventListener("click: ", handlClick);
function handlClick() {
    console.log("you clicked on me OMG OMG!!");
}


//way2  

button.onclick = function (){
    console.log("OMG way2 clicked");
}

button.onclick = function (event){
    console.log(event.target.value);
    console.log(this.value);
}

// Q3 key press from keybord 
//onKeyDown 
// onKeyUp
//onKeyPress 

const myFirstNameInput = document.querySelector("#firsName");

const handelKeyPress = function() {
    console.log("a key is pressed");
    console,log(this.value);
}

myFirstNameInput.addEventListener("keybord", handelKeyPress);

