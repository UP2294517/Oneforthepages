document.addEventListener("DOMContentLoaded", function () {
    console.log("One for the Pages - Loaded Successfully!");

    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const query = searchInput.value.trim();
        if (query !== "") {
            window.location.href = `search.html?query=${encodeURIComponent(query)}`;
        }
    });
});