document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = form.querySelector("input[type='text']");
    const contactInput = form.querySelector("input[type='number']");
    const radioInputs = form.querySelectorAll("input[type='radio']");
    const proceedButton = form.querySelector("button");

    proceedButton.addEventListener("click", function (e) {
        e.preventDefault(); // prevent form submission

        const name = nameInput.value.trim();
        const contact = contactInput.value.trim();
        let selectedPayment = null;

        radioInputs.forEach(input => {
            if (input.checked) {
                const label = input.parentElement.querySelector("label");
                selectedPayment = label ? label.textContent.trim() : "Unknown";
            }
        });

        if (name === "" || contact === "") {
            alert("Please enter your name and contact number.");
            return;
        }

        if (!selectedPayment) {
            alert("Please select a payment method.");
            return;
        }

        alert(`Name: ${name}\nContact: ${contact}\nPayment Method: ${selectedPayment}`);

        const currentUser = localStorage.getItem("currentUser");

        if (currentUser) {
            // ✅ Define userInfo object
            const userInfo = {
                name: name,
                contact: contact,
                selectedPayment: selectedPayment
            };

            // ✅ Save userInfo per user
            localStorage.setItem(`userInfo_${currentUser}`, JSON.stringify(userInfo));

            // ✅ Track user in allUsers list
            let allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
            if (!allUsers.includes(currentUser)) {
                allUsers.push(currentUser);
                localStorage.setItem("allUsers", JSON.stringify(allUsers));
            }
        } else {
            alert("No user is currently logged in.");
        }
    });
});
