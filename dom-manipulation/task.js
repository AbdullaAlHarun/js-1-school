//##:Modify Heading Styles:
//1.  Select the <h1> element and change its text to "Welcome to JavaScript Class

const headLine = document.querySelector("h1");

headLine.innerText = "Welcome to JavaScript Class";

//2. Change the color of the <h1> element to blue and increase its font size.

headLine.style.color = "red";
console.log(headLine);
//##Interactive List Modification:
//3. Add a button to the HTML document that says "Add Item". 
document.getElementById('addItemButton').addEventListener('click', function() {
    // Add your code here to perform actions when the button is clicked
    alert('Item added!');
    // You can add more functionality or DOM manipulation as needed
  });

//4. - When the button is clicked, add a new **`<li>`** 
//to the existing list with the text "New Item" and a random number. 
// read this : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
