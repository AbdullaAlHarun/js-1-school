
// Changing the year on footer
//const year = document.querySelector('#current-year')

//year.innerHTML = new Data().getFullYear()
//console.log(year);


// Arrays 
const fruits = ["Apple", "Blue Berry", "Orange", "Bannan"];
console.log(fruits.length);

//added new item in the end
fruits.push("Mango");
console.log(fruits);

//adding new item in the beganning 
fruits.unshift("grapes");
console.log(fruits);


//remove the last item in the array 
fruits.pop();
console.log(fruits);

// if I want to remove 1st item in the array
fruits.shift();
console.log(fruits);

// sort the number 
const numbers =[3, 4, 99, 88,54, 5];

numbers.sort();
console.log(numbers);

let animal = "dog";
console.log(animal.length);

const cars = ["BMW", "Tesla", "Tayata"];
console.log(cars.indexOf("Tesla"));

// declear a objects

const user = {
    name: "Monde",
    age: 30,
    job: "Softwear Engineer",
    wealth: 6665653226562639
}

console.log(user); 

console.log(user.name);
console.log(user.age);

//output with + concreting
console.log("Hello my name is " + user.name + " and I am " + user.age + "years old, I own " + user.wealth + "in doller and I work as a " + user.job);

//output with ` concreting
console.log(`Hello my name is  ${user.name} and I am  ${user.age}  years old, I own  ${user.wealth} in doller and I work as a ${user.job}`);


///

const books =[
    {
        title: "the hobbit",
        author: "Hesham EL Masry",
        pages: 300
    },
    {
        title: "Drive with me!",
        author: "Kevin Heart",
        pages: 1000
    },
    {
        title: "One Thousand and one night",
        author: "Some Books",
        pages: 3000
    }
]

console.log("my first book: ",books[0]);
console.log("my Second book: ",books[1]);
console.log("my Third book: ",books[2]);


const searchBook = books.find(function (book){
   return book.title === "the hobbit";
});

console.log("searchBook: ",searchBook);

const searchBook1 = books.find(function (book){
   return book.pages > 300;
});

console.log("searchPage: ",searchBook1);

// funtion is a set of action or code run when we call this funtion name

function doorRing (withCamera){
    console.log("I will go open the door the person is: " +withCamera);
}
doorRing("Monde photo");

function logWard (theWork){
    console.log(logWard);
}

logWard("Hesham");
logWard("Line");

function adTwoNumbers (num1, num2) {
    return num1 + num2;
}

const sum = adTwoNumbers(10, 20);
console.log(sum);