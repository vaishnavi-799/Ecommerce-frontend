const Admin = document.getElementById("Admin");

const nameError = document.getElementById("nameError");
const pswError = document.getElementById("pswError");

// Select the button separately
const btn = document.querySelector(".btn");

btn.addEventListener('click', function (event) {
    event.preventDefault();

    nameError.textContent = "";
    pswError.textContent = "";

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value.trim();

    if (name !== "Ansa") {
        nameError.textContent = "Enter correct name";
        isValid = false;
    }
    if (password !== "ansa1234") {
        pswError.textContent = "Enter correct password"; 
        isValid = false;
    }

    if (isValid) {
        window.location.href = "LoginAdmine.html"; 
    }
});
