document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const fname = document.getElementById("firstName").value.trim();
  const lname = document.getElementById("lastName").value.trim();
  const dob = document.getElementById("dob").value;
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();
  const contact = document.getElementById("contact").value.trim();

  const errorDiv = document.getElementById("error");
  const ackDiv = document.getElementById("acknowledgment");
  errorDiv.innerText = "";
  ackDiv.innerText = "";

  // Validations
  if (!fname || !lname || !dob || !email || !address || !contact) {
    errorDiv.innerText = "All fields are mandatory.";
    return;
  }

  const dobDate = new Date(dob);
  const minDate = new Date("1924-01-01");
  if (dobDate < minDate) {
    errorDiv.innerText = "Choose a date greater than 1/1/1924";
    return;
  }

  if (!/^\d{10}$/.test(contact)) {
    errorDiv.innerText = "Enter a valid contact number";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorDiv.innerText = "Enter a valid mail id";
    return;
  }

  // Generate ID and password
  const passengerId = Math.floor(10000 + Math.random() * 90000);
  const password = fname.substring(0, 4) + "@123";

  ackDiv.style.color = "green";
  ackDiv.innerHTML = `
    Passenger Registration is successful.<br>
    Passenger ID: <strong>${passengerId}</strong><br>
    Password: <strong>${password}</strong>
  `;

  // Optional: Clear form fields
  // document.getElementById("registerForm").reset();
});

function resetForm() {
  const confirmReset = confirm("Is it Okay to reset the fields?");
  if (confirmReset) {
    document.getElementById("registerForm").reset();
    document.getElementById("error").innerText = "";
    document.getElementById("acknowledgment").innerText = "";
  }
}
