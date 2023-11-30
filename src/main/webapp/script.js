let books = [
{ title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10.99 },
{ title: "To Kill a Mockingbird", author: "Harper Lee", price: 12.99 },
// Add more book entries as needed
];
// Function to dynamically sort books by title
function sortBooks() {
books.sort((a, b) => a.title.localeCompare(b.title));
displayBooks();
}
// Function to display books on the webpage
function displayBooks() {
const container = document.querySelector('.container');
container.innerHTML = `<h1 class="mt-4 mb-4">Bookstore</h1>
<button onclick="sortBooks()" class="btn btn-primary mb-4">Sort by
Title</button>`;
books.forEach(book => {
container.innerHTML += `<div class="card">
<div class="card-body">
<h5 class="card-title">${book.title}</h5>
<p class="card-text">Author: ${book.author}</p>
<p class="card-text">Price: $${book.price.toFixed(2)}</p>
</div>
</div>`;
});
}
// Initial display of books
displayBooks();