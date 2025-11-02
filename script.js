// Listen for form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop page reload

  // Get values from input fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  // Regular expression for email validation
  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  // Validation checks
  if (name === "" || email === "" || message === "") {
    formMessage.style.color = "red";
    formMessage.textContent = "❌ Please fill in all fields!";
  } 
  else if (!emailPattern.test(email)) {
    formMessage.style.color = "red";
    formMessage.textContent = "⚠️ Please enter a valid email address!";
  } 
  else {
    formMessage.style.color = "green";
    formMessage.textContent = "✅ Thank you, " + name + "! Your message has been submitted successfully.";
    
    // Clear form
    document.getElementById("contactForm").reset();
  }
});
