const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        available: true
    },
    {
        title: "1984",
        author: "George Orwell",
        available: false
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        available: true
    }
];

// Select the book-container class
const bookContainer = document.querySelector(".book-container");
console.log("bookContainer: ", bookContainer);

let html = "";

const totalItemsOfBooks = books.length;

console.log("totalItemsOfBooks: ", totalItemsOfBooks);


for (let i = 0; i < totalItemsOfBooks; i++) { 

    console.log(books[i].title);
    console.log(books[i].author);

    html += `
            <div class="book book-detail">
            
            <h2>Title: ${books[i].title}</h2>
            <h2>Author: ${books[i].author}</h2>
            </div>
`;
console.log(html);
}

bookContainer.innerHTML = html;

