const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  const showError = (id, message = "") => {
    const group = document.getElementById(id + "-group");
    const errorMsg = document.getElementById(id + "Error");
    if (message) {
      group.classList.add("error");
      errorMsg.style.display = "block";
      errorMsg.textContent = message;
      valid = false;
    } else {
      group.classList.remove("error");
      errorMsg.style.display = "none";
    }
  };

  const name = form.name.value.trim();
  showError("name", !name ? "Name is required." : "");

  const email = form.email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  showError(
    "email",
    !email
      ? "Email is required."
      : !emailPattern.test(email)
      ? "Please enter a valid email address."
      : ""
  );

  const message = form.message.value.trim();
  showError(
    "message",
    !message
      ? "Message is required."
      : message.length < 10
      ? "Message must be at least 10 characters long."
      : ""
  );

  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
