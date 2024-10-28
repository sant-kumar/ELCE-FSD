document.getElementById("submit").addEventListener("click", function () {
    const firstName = document.getElementById("firstName").value.trim();
    const age = document.getElementById("age").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const nameError = document.getElementById("nameError");
    const ageError = document.getElementById("ageError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Reset error messages
    nameError.style.display = "none";
    ageError.style.display = "none";
    emailError.style.display = "none";
    passwordError.style.display = "none";

    let isValid = true;

    // First name validation
    if (firstName.length < 4) {
        nameError.style.display = "block";
        isValid = false;
    }

    // Age validation
    if (isNaN(age) || age < 18 || age > 30) {
        ageError.style.display = "block";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@abes\.ac\.in$/;
    if (!emailPattern.test(email)) {
        emailError.style.display = "block";
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        passwordError.style.display = "block";
        isValid = false;
    }

    // If form is valid
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("form").reset();
    }
});