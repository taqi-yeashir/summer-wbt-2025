
function database() {
    return {
        username: "admin", 
        password: "12345"  
    };
}

// Function that runs when form is submitted
function handleRegister(event) {
   

    // Ask for username and password
    let enteredUser = prompt("Enter your username:");
    let enteredPass = prompt("Enter your password:");

    // Get stored credentials from database()
    let credentials = database();

    // Check if they match
    if (enteredUser === credentials.username && enteredPass === credentials.password) {
        alert("Register Confirmed ✅");
    } else {
        alert("Wrong password ❌");
    }
}

// Attach event listener when page loads
window.onload = function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", handleRegister);
};
