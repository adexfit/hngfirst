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

  const showSuccess = () => {
    const successMsg = document.getElementById("success");
    if (valid) {
      successMsg.style.display = "block";
      successMsg.textContent = "Form submitted successfully!";
    } else {
      successMsg.style.display = "none";
    }

    setTimeout(() => {
      successMsg.style.display = "none";
    }, 3000);
  };

  const name = form.name.value.trim();
  showError("name", !name ? "Full name is required." : "");

  const subject = form.subject.value.trim();
  showError("subject", !subject ? "Subject is required." : "");

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
    showSuccess();
    // alert("Form submitted successfully!");
    form.reset();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});
