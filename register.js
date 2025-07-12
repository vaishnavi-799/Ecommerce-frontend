document.addEventListener("DOMContentLoaded", function () {
    const Registration = document.getElementById("Registration");

    const FnameErr = document.getElementById("FnameErr");
    const SnameErr = document.getElementById("SnameErr");
const numberErr = document.getElementById("numberErr");
const passwordErr = document.getElementById("passwordErr");
const CpasswordErr = document.getElementById("CpasswordErr");

Registration.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous error messages
    FnameErr.textContent = "";
    SnameErr.textContent = "";
    numberErr.textContent = "";
    passwordErr.textContent = "";
    CpasswordErr.textContent = "";

    const Fname = document.getElementById("Fname").value.trim();
    const Sname = document.getElementById("Sname").value.trim();
    const number = document.getElementById("number").value.trim();
    const password = document.getElementById("Password").value.trim();
    const Cpassword = document.getElementById("CPassword").value.trim();

    let isValid = true;

    // Validation
    if (Fname === "") {
        FnameErr.textContent = "First name is required";
        isValid = false;
    }

    if (Sname === "") {
        SnameErr.textContent = "Second name is required";
        isValid = false;
    } else if (Fname === Sname) {
        SnameErr.textContent = "First name and second name shouldn't be the same";
        isValid = false;
    }

    if (number === "" || number.length !== 10 || isNaN(number)) {
        numberErr.textContent = "Invalid number (must be 10 digits)";
        isValid = false;
    }

    if (password === "") {
        passwordErr.textContent = "*Password is required";
        isValid = false;
    } else if (password.length < 8) {
        passwordErr.textContent = "*Password must be at least 8 characters";
        isValid = false;
    }

    if (Cpassword === "") {
        CpasswordErr.textContent = "*Confirm password is required";
        isValid = false;
    } else if (password !== Cpassword) {
        CpasswordErr.textContent = "*Passwords do not match";
        isValid = false;
    }

    if (isValid) {
        // Save full name and password to localStorage
        localStorage.setItem("registeredUsername", `${Fname} ${Sname}`);
        localStorage.setItem("registeredPassword", password);

        alert("Form Registered successfully!");
        window.location.href = "Fwlogin.html";
    }
});

    
});



