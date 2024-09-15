// script.js

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form from submitting
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Simple login validation (can be extended for backend integration)
    if(email === "sangeetameena811@gmail.com" && password === "sangeeta") {
        alert("Login successful!");

        window.location.href = "index.html";
    } 
    else if (email === "u21cs042@coed.svnit.ac.in" && password === "u21cs042") {
        alert("Login successful!");

        window.location.href = "index.html";
    } 
    else {
        alert("Invalid email or password. Please try again.");
    }
});
