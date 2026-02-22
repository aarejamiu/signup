let confirmPasswordInput = document.getElementById("confirmPassword");
let passwordInput = document.getElementById("password");
function togglePassword(spanElement) {
    let passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        spanElement.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        spanElement.textContent = "Show";
    }
}
function toggleConfirmPassword(spanElement) {
    let confirmPasswordInput = document.getElementById("confirmPassword");
    if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text";
        spanElement.textContent = "Hide";
    }
    else{
        confirmPasswordInput.type = "password";
        spanElement.textContent = "Show";
    }
}
function registerUser(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (password !== confirmPasswordInput.value) {
        alert("Passwords do not match");
        return;
    }
    if (email === "" || password === "") {
        alert("All fields are required");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    let existingUser = localStorage.getItem(email);

    if (existingUser !== null) {
        alert("This email is already registered!");
        return;
    }

    // Save user
    let user = {
        email: email,
        password: password
    };

    localStorage.setItem(email, JSON.stringify(user));

    alert("Registration successful!");
    window.location.href = "login.html";
}
function loginUser(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedUser = localStorage.getItem(email);

    if (storedUser === null) {
        alert("User not found");
        return;
    }

    let user = JSON.parse(storedUser);

    if (user.password === password) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", email);
        window.location.href = "dash.html";
    } 
    else {
        alert("Incorrect password");
    }
}