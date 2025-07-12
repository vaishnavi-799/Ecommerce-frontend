document.addEventListener("DOMContentLoaded", () => {
    const addCart = document.getElementById("addCart");

    let allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

    allUsers.forEach(user => {
        const cart = JSON.parse(localStorage.getItem(`cart_${user}`)) || [];
        const userInfo = JSON.parse(localStorage.getItem(`userInfo_${user}`)) || null;

        if (cart.length === 0) return;

        const userSection = document.createElement("div");
        userSection.classList.add("mb-5");

        let userHTML = `
            <div class="mb-3 fw-bold fs-4 name">User: ${user}</div>
            ${userInfo ? `
                <div>Name: ${userInfo.name}</div>
                <div>Contact: ${userInfo.contact}</div>
                <div>Payment Method: ${userInfo.selectedPayment}</div>
            ` : '<div class="text-warning">User info not found</div>'}
        `;

        userSection.innerHTML = userHTML;

        let total = 0;

        cart.forEach(product => {
            total += Number(product.rate);
            const productHTML = `
                <div class="cards m-2 d-flex justify-content-between p-2">
                    <img src="${product.img}" width="100px" alt="${product.item}">
                    <div class="item my-auto fw-bold fs-5">${product.item}</div>
                    <div class="item my-auto fs-5">Rs ${product.rate}/-</div>
                </div>
            `;
            userSection.insertAdjacentHTML("beforeend", productHTML);
        });

        const totalHTML = `<div class="fw-bold fs-5 mt-2">Total: Rs ${total}/-</div>`;
        userSection.insertAdjacentHTML("beforeend", totalHTML);

       
        const btnHTML = `<button class="btn buy clear-user-order" data-user="${user}">Order Completed</button>`;
        userSection.insertAdjacentHTML("beforeend", btnHTML);

        addCart.appendChild(userSection);
        addCart.insertAdjacentHTML("beforeend", `<hr>`);
    });

    
    const clearButtons = document.querySelectorAll(".clear-user-order");
    clearButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const user = e.target.getAttribute("data-user");

            // Remove this user's data
            localStorage.removeItem(`cart_${user}`);
            localStorage.removeItem(`userInfo_${user}`);

            // Remove from allUsers list
            let allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
            allUsers = allUsers.filter(u => u !== user);
            localStorage.setItem("allUsers", JSON.stringify(allUsers));

            // Refresh page or just remove this section from DOM
            alert(`Order for ${user} has been cleared.`);
            e.target.closest(".mb-5").remove();
        });
    });
});
