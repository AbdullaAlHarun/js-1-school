const article = document.querySelector("#post");
console.dir(article);
console.log(article.dataset);
console.log(article.author);

const postDetails = document.querySelector("#post-details");
console.log(postDetails);

//alert(postDetails);
//document.getElementById('#post-details');

postDetails.addEventListener("Click",function(){
    alert(`the book author is:" ${article.dataset.author} and the catagory of the book is
    ${article.dataset.catagory}, Tusen takk <3 !!
    `)
});

const postImg = document.querySelector("img");
console.log(postImg);

postImg.addEventListener("Click", function () {
    window.open(postImg.dataset.fullsize, "_self");
});