// Making Decision 
// If and else statements! 

let temp = 28;

if(temp > 30){
    console.log("It is very hot!!");
} else if (temp > 20){
    console.log("fail")
} else {
    console.log("The weather is very cold!")
}

// Condition!! task 
let score = 60;

if (score => 50) {
    console.log("pass");
} 
else {
    console.log("fail");
}

// A = very good 
// B =Good 
// C = Average 
// D = start to think 

let result = "A"

if (result === "A"  ) {
    console.log("Very Good" + " You got a core \n of: " + result);
} else if ( result === "B") {
    console.log(" Good");
} else if ( result === "C") {
    console.log(" Avarage");
} else if ( result === "D") {
    console.log("Start to think");
} else {
    console.log("you fail badly")
}

// task if else with number 
let myGrade = 50;

if (myGrade >= 90) {
    console.log("A");
} else if (myGrade >=70) {
    console.log("B")
} else {
    console.log("You fail");
}

// 2. Switch case 
let color = "grehjkhkhen";

switch(color) {
    case "red":
        console.log("Stop!");
        break;
    case "yellow":
        console.log("Get ready!!");
        break;
    case "green":
        console.log("Go!");
        break;
    default:
        console.log("No Traffic lights , murder people!");
}

// Switch case class Task 

let grade = "A";

switch(grade) {
case "A": 
    console.log("Outstanding!");
    break;
case "B":
    console.log("Very Good!");
    break;
case "C":
    console.log("Good Effort!");
    break;
case "D":
    console.log("Made improvment!");
    break;
case "F":
    console.log("Failed!");
    break;
default:
    console.log("Invalid Grade");
}