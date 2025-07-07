function validateLogin() {
  const userId = document.getElementById("userId").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorDiv = document.getElementById("error-message");

  const validUsers = [
    { id: "12345", password: "pass123" },
    { id: "67890", password: "securepass" },
    { id: "54321", password: "welcome123" }
  ];

  errorDiv.innerText = ""; // Clear previous messages

  // Input validations
  if (!userId || !password) {
    errorDiv.innerText = "Both fields are required.";
    return false;
  }

  if (!/^\d+$/.test(userId) || userId.length > 5) {
    errorDiv.innerText = "ID not valid";
    return false;
  }

  if (password.length < 6 || password.length > 30) {
    errorDiv.innerText = "Password not valid";
    return false;
  }

  // Auth check
  const foundUser = validUsers.find(user => user.id === userId);

  if (!foundUser && password) {
    errorDiv.innerText = "ID not valid";
    return false;
  } else if (foundUser && foundUser.password !== password) {
    errorDiv.innerText = "Password not valid";
    return false;
  } else if (!foundUser && password !== "") {
    errorDiv.innerText = "Both ID/password not valid";
    return false;
  }

  // Success: Redirect to home page
  window.location.href = "home.html"; // US002
  return false; // Prevent actual form submission
}
