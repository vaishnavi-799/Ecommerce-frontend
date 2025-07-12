const Form = document.getElementById("loginForm");
const Errname = document.getElementById("usernameError");
const Errpassword = document.getElementById("passwordError");
const msg = document.getElementById("msg");

Form.addEventListener("submit", function (event) {
  event.preventDefault();

  // clear old errors
  Errname.textContent = "";
  Errpassword.textContent = "";
  msg.textContent = "";

  const namee = document.getElementById("username").value.trim();
  const password1 = document.getElementById("password").value.trim();

  let isValid = true;
  const storedUsername = localStorage.getItem("registeredUsername");
  const storedPassword = localStorage.getItem("registeredPassword");

  if (!namee) {
    Errname.textContent = "*Username is required";
    isValid = false;
  } else if (namee !== storedUsername) {
    Errname.textContent = "*Incorrect username";
    isValid = false;
  }

  if (!password1) {
    Errpassword.textContent = "*Password is required";
    isValid = false;
  } else if (password1 !== storedPassword) {
    Errpassword.textContent = "*Incorrect password";
    isValid = false;
  }

  if (isValid) {
    localStorage.setItem("currentUser", namee);
    alert("Form submitted successfully!");
    console.log(namee);
    window.location.href = "FashionWorld.html";
  }
});