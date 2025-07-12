document.addEventListener('DOMContentLoaded', () => {
    const addCart = document.getElementById("addCart");
    const TotaP = document.getElementById("TotaP");
    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
        alert("No user logged in. Redirecting to login page...");
        window.location.href = "login.html";
        return;
    }

    let userCart = JSON.parse(localStorage.getItem(`cart_${currentUser}`)) || [];

    function renderCart() {
        addCart.innerHTML = "";
        let Total = 0;

        userCart.forEach((product, index) => {
            Total += Number(product.rate);
            const itemHTML = `
                <div class="cards m-2 d-flex justify-content-between">
                    <img src="${product.img}" width="100px" alt="${product.item}">
                    <div class="item my-auto fw-bold fs-5">${product.item}</div>
                    <div class="item my-auto fs-5">Rs ${product.rate}/-</div>
                    <button class="btn btn-danger" id="remove-${index}">Remove</button>
                </div>`;
            addCart.insertAdjacentHTML('beforeend', itemHTML);
        });

        TotaP.textContent = `Total Price: ${Total}/-`;
        localStorage.setItem(`cart_${currentUser}`, JSON.stringify(userCart));

        // Add remove button handlers
        userCart.forEach((_, index) => {
            const removeBtn = document.getElementById(`remove-${index}`);
            if (removeBtn) {
                removeBtn.addEventListener('click', () => {
                    userCart.splice(index, 1);
                    localStorage.setItem(`cart_${currentUser}`, JSON.stringify(userCart));
                    renderCart(); // re-render cart after deletion
                });
            }
        });
    }

    renderCart();
});
