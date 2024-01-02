//Variables 

var myName = "Mehedi";
console.log(myName); // Output : Mehedi

//let age =31;
//console.log(age); // Output : 31;

const  BRAND = "BMW";
console.log(BRAND); // Output : BMW

//Data Types 

//let greeting = "Hello, World";
//console.log(typeof greeting);

//Boolean
let isHappy = true;
console.log(isHappy);
console.log(typeof isHappy);

//undefiend 
let someVar;
console.log(typeof someVar)

//Null
//let emptyValue  = null;
//console.log(emptyValue);

//Object
let person = {
    firstName: "Abdulla",
    lastName: "Al Harun",
    age: 31
};
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

let car = {
    make: "Volbo",
    year: "1992",
    condition: "used",
    price: 10000
};
console.log(car);

// I have a Volbo car and it is 1992 and it is used and the price is 10000
console.log("I have a "
+car.make +" car and it is "
+car.year +" and it is used and the price is 10000");

console.log(`I have a ${car.make} car and it is 1992 and it is used and the price is ${car.price}`);


//Array 
let colors = ["Red", "Green", "Blue"];

let random = [
    55656, 
    "green", 
    {name: "Mehedi", age:31}
    ["boy" , "girl", "whatever"]
];

console.log(random[0]);
console.log(random[1]);

// Type Conversion

let year= "1992"; //string 

//from string to number 
let convertedYear = parseInt(year);
console.log(convertedYear);

//Convert from number to string 
let num = 123;
console.log(num.toString());

let convertedNumber = num.toString();
console.log(convertedNumber);


//Task 1
var city = "Oslo" ;
console.log(city);

let  age = 31;
console.log(age);

const birthYear = "1991";
console.log(birthYear);

//Task 2: Data Types 
let greeting = ("Wellcome!");
console.log(typeof greeting);

let quantity  = 44;
console.log(typeof quantity);

let isJavaScriptFun = true;
console.log(isJavaScriptFun);

let thisIsUndefined;
console.log(thisIsUndefined);

let emptyValue  = null;
console.log(emptyValue);

//Task 3: Type Conversion
let numString = "25";

let Num = parseInt (numString);
console.log(Num);

let num2 = 50;
let numString2 = num2.toString();
console.log(num2);

let sum = num + num2;
console.log(sum);
