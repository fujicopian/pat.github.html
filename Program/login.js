function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform your login validation here
    // For simplicity, let's assume a basic validation for demonstration

    if (username === "admin" && password === "adminpassword") {
        // Redirect to the admin page after successful login
        window.location.href = "adminhome.html";
    } else if (username === "Lifesnyc" && password === "userpassword") {
        // Redirect to the user page after successful login
        window.location.href = "userhome.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}