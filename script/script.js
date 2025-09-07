// PART 1: Event Handling
document.getElementById("helloBtn").addEventListener("click", function() {
  document.getElementById("helloMsg").textContent = "Greetings! 👋 We invite you to explore our engaging web page, where you can witness the elegance of JavaScript functioning behind the scenes.";
});


// PART 2: Interactive Elements

// Dark Mode Toggle
document.getElementById("toggleTheme").addEventListener("click", function() {
  document.body.classList.toggle("dark");
});

// Counter
let count = 0;  // initial count value

document.getElementById("increaseBtn").addEventListener("click", function() {
  count++;
  document.getElementById("counter").textContent = count;
});

document.getElementById("decreaseBtn").addEventListener("click", function() {
  if (count > 0) 
    count--; // prevent negative count
  document.getElementById("counter").textContent = count;
});


// PART 3: Form Validation
document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Reset messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  let valid = true;

  // Validate Name
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    valid = false;
  }

  // Validate Email (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    valid = false;
  }

  // Validate Password
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
    valid = false;
  }

  // Success
  if (valid) {
    document.getElementById("formSuccess").textContent = "✅ Form submitted successfully!";
  }
});

