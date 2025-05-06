function enterDashboard() {
  const role = document.getElementById("role").value;
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
  document.getElementById("welcome-msg").innerText = "Welcome, " + role.charAt(0).toUpperCase() + role.slice(1) + "!";
  document.getElementById("dashboard-content").innerHTML = `<p>This is the ${role} dashboard. Functionality coming soon.</p>`;
}