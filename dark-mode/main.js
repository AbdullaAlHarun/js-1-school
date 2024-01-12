// addEventListener 
// onClick 

const body = document.querySelector("body");

const darkModeBtn = document.querySelector(".mode-btn");
console.log(body);
console.log(darkModeBtn);

let isDarkMode = false;
console.log("I click on dark mode btn before: ", isDarkMode);

function toggleMode () {
    isDarkMode = ! isDarkMode;

    if (isDarkMode){
        body.style.backgroundColor = "#0A0A0A";
     
    } else {
        body.style.backgroundColor = "lightgreen";
    }

}

darkModeBtn.addEventListener("click", toggleMode);



