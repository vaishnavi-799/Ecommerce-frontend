document.addEventListener('DOMContentLoaded', () => {
    const setCart = document.getElementById("setCart");
    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
        alert("No user logged in. Redirecting to login page...");
        window.location.href = "login.html";
        return;
    }

    // Merge products from different sources
    let products = JSON.parse(localStorage.getItem("products")) || [];
    const newProducts = JSON.parse(localStorage.getItem("newProducts")) || [];
    products = products.concat(newProducts);

    // Load user-specific cart from localStorage
    let userCart = JSON.parse(localStorage.getItem(`cart_${currentUser}`)) || [];

    function AddToCart(index) {
        userCart.push(products[index]);

        // Save updated cart
        localStorage.setItem(`cart_${currentUser}`, JSON.stringify(userCart));
        
    }
    
    // Render all products
    products.forEach((product, index) => {
        const cardHTML = `
            <section class="m-4">
                <div class="card text-center Lead vertical-card">
                    <img src="${product.img}" width="100px" class="mx-auto m-2" alt="">
                    <h2>${product.item}</h2>
                    <div class="card-body">
                        <h3>Rs ${product.rate} /-</h3>
                        <p>${product.dsc}</p>
                        <button class="btn" id="btn-${index}">Add</button>
                    </div>
                </div>
            </section>`;

        setCart.insertAdjacentHTML('beforeend', cardHTML);
        document.getElementById(`btn-${index}`).addEventListener('click', () => AddToCart(index));
    });
});
