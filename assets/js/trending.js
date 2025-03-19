document.addEventListener("DOMContentLoaded", function () {
    const productGrid = document.getElementById("trending-books");

    if (!productGrid) return; // Stop if the section is missing

    // Convert books object into an array and shuffle it
    const bookArray = Object.keys(books);
    const shuffledBooks = bookArray.sort(() => 0.5 - Math.random()); // Shuffle array

    // Select 3 random books
    const selectedBooks = shuffledBooks.slice(0, 3);

    selectedBooks.forEach(bookId => {
        const book = books[bookId];

        // Create product card dynamically
        const productCard = document.createElement("div");
        productCard.classList.add("book-card");

        productCard.innerHTML = `
            <a href="product.html?id=${bookId}">
                <img src="${book.image}" alt="${book.title}">
            </a>
            <h3><a href="product.html?id=${bookId}">${book.title}</a></h3>
            <p>${book.author}</p>
            <a href="product.html?id=${bookId}" class="btn">View Details</a>
        `;

        productGrid.appendChild(productCard);
    });
});