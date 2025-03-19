// ============================
// Book Data: 18 books across 6 categories
// ============================
const books = {
    "fiction1": {
        "title": "The Great Adventure",
        "author": "John Doe",
        "description": "A thrilling adventure through uncharted lands.",
        "price": "£12.99",
        "image": "assets/img/fiction1.png",
        "category": "Fiction"
    },
    "fiction2": {
        "title": "Mystery of the Hidden Door",
        "author": "Jane Smith",
        "description": "A gripping mystery novel full of twists and turns.",
        "price": "£14.99",
        "image": "assets/img/fiction2.png",
        "category": "Fiction"
    },
    "fiction3": {
        "title": "Echoes of the Past",
        "author": "Emily Carter",
        "description": "A dramatic story about love, loss, and discovery.",
        "price": "£10.99",
        "image": "assets/img/fiction3.png",
        "category": "Fiction"
    },

    "Non-Fiction1": {
        "title": "The Science of Everything",
        "author": "Dr. Albert Newman",
        "description": "A deep dive into the wonders of science.",
        "price": "£16.99",
        "image": "assets/img/Non-Fiction1.png",
        "category": "Non-Fiction"
    },
    "Non-Fiction2": {
        "title": "World History Uncovered",
        "author": "Michael Thompson",
        "description": "A comprehensive guide to key historical events.",
        "price": "£18.50",
        "image": "assets/img/Non-Fiction2.png",
        "category": "Non-Fiction"
    },
    "Non-Fiction3": {
        "title": "Mindset for Success",
        "author": "Carol Reynolds",
        "description": "Transform your thinking and achieve your goals.",
        "price": "£12.49",
        "image": "assets/img/Non-Fiction3.png",
        "category": "Non-Fiction"
    },

    "childrens1": {
        "title": "The Magical Forest",
        "author": "Samantha Green",
        "description": "An enchanting tale for young readers.",
        "price": "£8.99",
        "image": "assets/img/childrens1.png",
        "category": "Childrens"
    },
    "childrens2": {
        "title": "Adventures of Timmy",
        "author": "Paul Benson",
        "description": "A fun and exciting adventure for kids.",
        "price": "£7.99",
        "image": "assets/img/childrens2.png",
        "category": "Childrens"
    },
    "childrens3": {
        "title": "Learning with Fun",
        "author": "Lily Johnson",
        "description": "An interactive learning book for young minds.",
        "price": "£9.50",
        "image": "assets/img/childrens3.png",
        "category": "Childrens"
    },

    "academic1": {
        "title": "Advanced Mathematics",
        "author": "Dr. Kevin White",
        "description": "A comprehensive guide to complex math concepts.",
        "price": "£19.99",
        "image": "assets/img/academic1.png",
        "category": "Academic"
    },
    "academic2": {
        "title": "Introduction to Psychology",
        "author": "Sarah Watson",
        "description": "A detailed introduction to human psychology.",
        "price": "£17.99",
        "image": "assets/img/academic2.png",
        "category": "Academic"
    },
    "academic3": {
        "title": "Programming for Beginners",
        "author": "Tom Richards",
        "description": "Learn to code with this beginner-friendly book.",
        "price": "£15.99",
        "image": "assets/img/academic3.png",
        "category": "Academic"
    },

    "sale1": {
        "title": "Cooking Made Simple",
        "author": "Anna Stewart",
        "description": "Quick and easy recipes for everyone.",
        "price": "£6.99",
        "originalPrice": "£10.99",
        "image": "assets/img/sale1.png",
        "category": "Sale",
        "onSale": true
    },
    "sale2": {
        "title": "Fitness for Life",
        "author": "David Lee",
        "description": "A complete guide to staying fit and healthy.",
        "price": "£5.99",
        "originalPrice": "£9.99",
        "image": "assets/img/sale2.png",
        "category": "Sale",
        "onSale": true
    },
    "sale3": {
        "title": "Photography Basics",
        "author": "Emily Adams",
        "description": "Learn the fundamentals of photography.",
        "price": "£7.50",
        "originalPrice": "£12.50",
        "image": "assets/img/sale3.png",
        "category": "Sale",
        "onSale": true
    },

    "audioebook1": {
        "title": "Digital Marketing 101",
        "author": "Gary Simmons",
        "description": "Learn the secrets of successful digital marketing.",
        "price": "£11.99",
        "image": "assets/img/audioebook1.png",
        "category": "Audiobooks"
    },
    "audioebook2": {
        "title": "Classic Tales",
        "author": "Various Authors",
        "description": "A collection of timeless stories in audio format.",
        "price": "£9.99",
        "image": "assets/img/audioebook2.png",
        "category": "Audiobooks"
    },
    "audioebook3": {
        "title": "Self-Help Success",
        "author": "Linda Brown",
        "description": "Unlock your potential with this self-help guide.",
        "price": "£10.49",
        "image": "assets/img/audioebook3.png",
        "category": "Audiobooks"
    }
};
// ============================
// Product Page: Display Book Details
// ============================

// Retrieve the product ID from the URL (e.g., product.html?id=fiction1)
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// If a valid product ID is found, update the page content dynamically
if (productId && books[productId]) {
    const product = books[productId];

    // Populate the HTML elements with book data
    document.getElementById("product-title").innerText = product.title;
    document.getElementById("product-author").innerText = "by " + product.author;
    document.getElementById("product-description").innerText = product.description;
    document.getElementById("product-price").innerText = product.price;
    document.getElementById("product-img").src = product.image;
    document.getElementById("page-title").innerText = product.title + " | One for the Pages";

    // Update breadcrumbs for navigation
    document.getElementById("breadcrumb-category").innerText = product.category;
    document.getElementById("breadcrumb-category").href = product.category.toLowerCase().replace(/ /g, '') + ".html";
    document.getElementById("breadcrumb-title").innerText = product.title;
} else {
    // Display an error message if the product is not found
    document.getElementById("product-title").innerText = "Product Not Found";
    document.getElementById("product-description").innerText = "Sorry, the requested product does not exist.";
}

// ============================
// Shopping Cart Functionality
// ============================

// Placeholder function for adding a book to the cart
function addToCart() {
    alert("Book added to cart!");
}

// ============================
// Review and Rating System
// ============================

// Load and Display Reviews from localStorage
function loadReviews() {
    const reviewsList = document.getElementById("reviews-list");
    reviewsList.innerHTML = ""; // Clear existing content

    // Retrieve saved reviews from localStorage
    const storedReviews = JSON.parse(localStorage.getItem(`reviews-${productId}`)) || [];

    if (storedReviews.length === 0) {
        reviewsList.innerHTML = "<p>No reviews yet. Be the first to review this book!</p>";
    } else {
        storedReviews.forEach(review => {
            const reviewItem = document.createElement("div");
            reviewItem.classList.add("review-item");

            // Generate review with star ratings
            reviewItem.innerHTML = `
                <strong>${review.name}</strong> - 
                <span class="rating">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</span>
                <p>${review.comment}</p>
                <hr>
            `;
            reviewsList.appendChild(reviewItem);
        });
    }
}

// Submit a New Review
function submitReview() {
    const name = document.getElementById("review-name").value.trim();
    const rating = parseInt(document.getElementById("review-rating").value);
    const comment = document.getElementById("review-text").value.trim();

    if (name === "" || comment === "") {
        alert("Please enter your name and a review.");
        return;
    }

    const newReview = { name, rating, comment };

    const storedReviews = JSON.parse(localStorage.getItem(`reviews-${productId}`)) || [];
    storedReviews.push(newReview);

    localStorage.setItem(`reviews-${productId}`, JSON.stringify(storedReviews));

    loadReviews();

    alert("Thank you for your review!");
}

// Load reviews when page is ready
document.addEventListener("DOMContentLoaded", function () {
    loadReviews();
});
