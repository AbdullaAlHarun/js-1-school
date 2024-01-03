//1. select heading h2
//quearySelector 
//quearySelectorAll
//getElementById

const heading2 = document.querySelector("h2");
console.log(heading2);


//2. select element with class.heading2 
const headingByClass =  document.querySelector(".heading2");
console.log(headingByClass);


//3. select element with an id #list using querySelector 
const ulListById = document.querySelector("#list");
console.log(ulListById);


//4. Select element with Id #list using getElementById 
const list = document.getElementById("list");
console.log(list);

//select only 1st listed item 
const listItem = document.querySelector("li");
console.log(listItem);

// select all listed item
const listAll = document.querySelectorAll("li");
console.log(listAll);

// Select the h1 and changed the color to be red 
const heading1 = document.querySelector("h1");
console.dir(heading1); //comment on console 

heading1.style.color = "#ffffff";
heading1.style.border = "5px solid green";
heading1.style.padding = "1rem";
heading1.style.backgroundColor = "yellowgreen";

const myDiv = document.querySelector("div");
console.log("myDiv:",myDiv);

myDiv.classList.add("container");

heading1.innerText = "Hei Ehan";
heading1.innerHTML = `<p class="orange">Hei Mehedi og Ema </p>`;

                    //   0        1       2       3         4
const myArrayOfNames =["hesh","Mehedi","jonas","johnny","Marius"];

//console.log(myArrayOfNames[0]);
//console.log(myArrayOfNames[2]);
//console.log(myArrayOfNames[3]);

for(let i = 0; i<myArrayOfNames.length; i++){
    console.log(myArrayOfNames[i]);
}

//arithmetic operations 
// = + ++

// ****Addition**** (+)
//10 + 5 = 15
let sum = 10+5;
console.log(sum);

//*********subtruction******* (-)
//10-5=5
let difference = 10 - 5;
console.log(difference);


//****Multification****** (*)
//10*5 = 50 
let product = 10 * 5;
console.log(product);

//*****division***** (/)
// 10/5 = 2 
let result = 10 / 5;
console.log(result);

//*****Modulus********

let remainer = 10 % 4; // remainder 2 
console.log(remainer);


// simple oparetors 
//simple assignment 

let a=5; //a 5 

//adition assignment (+=)
let b = 10;
b += 5; // b is now 15 

//subtraction assignment (-=)
let c= 15;
c -= 5; //10 

//comparison oparetors 
// equal to (==)
let isEquel = (5 == "5") // true 
console.log(isEquel);


//stric equal (===)
let isStricEqual = (5 === "5"); //false
console.log(isStricEqual);

//not equal (!=)
let notEual = (5 != "6");
console.log(notEual);

//greater then  (>)
//10>5

let isGraterThen = (10 > "5");
console.log(isGraterThen);


// less then < 
// greater then >= ( 10>=10 )
//less then <=


// AND  // OR 
// &&   // ||
               // true =  true
let andResult = (5>4 && 10>5);
console.log(andResult);


let orOr = (5 > 10 || 10>5 );
console.log(orOr);

//Not 
!(5 > 10)  //false
// if i put ! then it will be true 

// Next class Topic
//if...else 
//loop 
//switch 

