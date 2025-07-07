function goToPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');
}

function logout() {
  alert("Logging out...");
  window.location.href = "login.html"; // Simulate logout
}

// --- My Profile ---
function enableEdit() {
  ['name', 'email', 'phone'].forEach(id => {
    document.getElementById(id).disabled = false;
  });
  document.getElementById('editBtn').classList.add('hidden');
  document.getElementById('saveBtn').classList.remove('hidden');
}

function saveProfile() {
  ['name', 'email', 'phone'].forEach(id => {
    document.getElementById(id).disabled = true;
  });
  document.getElementById('editBtn').classList.remove('hidden');
  document.getElementById('saveBtn').classList.add('hidden');
  alert("Profile updated!");
}

// --- My Trips ---
const tripData = {
  upcoming: [
    ["Indigo", "Delhi", "Mumbai", "2025-08-15", "$100"],
    ["Air India", "Bangalore", "Chennai", "2025-09-01", "$80"],
    ["SpiceJet", "Hyderabad", "Pune", "2025-10-10", "$90"]
  ],
  cancelled: [
    ["Vistara", "Delhi", "Goa", "2025-06-15", "$120"],
    ["Indigo", "Ahmedabad", "Kolkata", "2025-05-20", "$110"],
    ["Air Asia", "Mumbai", "Nagpur", "2025-04-05", "$70"]
  ],
  completed: [
    ["Air India", "Chennai", "Delhi", "2025-02-25", "$95"],
    ["Indigo", "Mumbai", "Jaipur", "2025-01-10", "$85"],
    ["SpiceJet", "Pune", "Bangalore", "2024-12-01", "$75"]
  ]
};

function showTrip(type) {
  const rows = tripData[type]
    .map(([flight, origin, dest, date, price]) =>
      `<tr><td>${flight}</td><td>${origin}</td><td>${dest}</td><td>${date}</td><td>${price}</td></tr>`
    ).join('');

  document.getElementById("tripDetails").innerHTML = `
    <table border="1" cellpadding="10" style="width: 100%; border-collapse: collapse;">
      <tr><th>Flight Name</th><th>Origin</th><th>Destination</th><th>Travel Date</th><th>Price</th></tr>
      ${rows}
    </table>
  `;
}
