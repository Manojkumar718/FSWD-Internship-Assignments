// Get elements
let form = document.getElementById("myForm");
let message = document.getElementById("message");

// Event handling
form.addEventListener("submit", function(event) {

    event.preventDefault(); // stop page refresh

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    // Validation
    if (name === "" || email === "") {
        message.textContent = "Please fill all fields";
        message.style.color = "red";
    } 
    else if (!email.includes("@")) {
        message.textContent = "Enter a valid email";
        message.style.color = "red";
    } 
    else {
        message.textContent = "Form submitted successfully!";
        message.style.color = "green";
    }
});