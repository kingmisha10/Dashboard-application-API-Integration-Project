/* ================= LOGIN ================= */
const login = document.getElementById("loginForm");

if (login) {
  login.addEventListener("submit", (e) => {
    e.preventDefault();

    localStorage.setItem("user", "student");
    window.location.href = "dashboard.html";
  });
}

/* ================= SIGNUP ================= */
const signup = document.getElementById("signupForm");

if (signup) {
  signup.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Account created successfully");
    window.location.href = "login.html";
  });
}

/* ================= RESET PASSWORD ================= */
const reset = document.getElementById("resetForm");

if (reset) {
  reset.addEventListener("submit", (e) => {
    e.preventDefault();

    document.getElementById("msg").innerText =
      "If this were real, a reset link would be sent.";
  });
}

