//##:Modify Heading Styles:
//1.  Select the <h1> element and change its text to "Welcome to JavaScript Class

const headLine = document.querySelector("h1");

headLine.innerText = "Welcome to JavaScript Class";

//2. Change the color of the <h1> element to blue and increase its font size.

headLine.style.color = "red";
console.log(headLine);
//##Interactive List Modification:
//3. Add a button to the HTML document that says "Add Item". 
const mybtn = document.querySelector("button");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
//4. - When the button is clicked, add a new **`<li>`** 
//to the existing list with the text "New Item" and a random number. 
// read this : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
mybtn.addEventListener("click",function(){
    let someRandomNumber = getRandomInt(220);
    list.innerHTML +=`<li>Item</li>`
    //list.innerHTML = list.innerHTML+ `<li>New Item <li>`
})

