document.addEventListener("DOMContentLoaded", function () {
    const admin = document.getElementById("Admin");
    const PError = document.getElementById("PError");

    admin.addEventListener("submit", function(event) {
        event.preventDefault();
        PError.textContent = "";

        let isValid = true;
        const productName = document.getElementById("productName").value.trim();
        const productRate = document.getElementById("productRate").value.trim();

        if (!productName || !productRate) {
            PError.textContent = "** Product details are required";
            isValid = false;
        }

        if (isValid) {
            // Remove product from FWorld.js products in localStorage
            removeProductFromStorage(productName);

            // Redirect to FashionWorld.html
            window.location.href = "fashionWorld.html";
        }
    });
});

function removeProductFromStorage(productName) {
    // Retrieve products from localStorage
    let products = JSON.parse(localStorage.getItem("products")) || [];

    // Filter out the product by its name (assuming name is unique)
    products = products.filter(product => product.item !== productName);

    // Save the updated products array back to localStorage
    localStorage.setItem("products", JSON.stringify(products));

    // Optionally, remove any "newProducts" if that applies.
    let newProducts = JSON.parse(localStorage.getItem("newProducts")) || [];
    newProducts = newProducts.filter(product => product.item !== productName);
    localStorage.setItem("newProducts", JSON.stringify(newProducts));
}
