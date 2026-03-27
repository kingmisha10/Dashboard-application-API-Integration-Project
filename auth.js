/* ================= LOGIN ================= */
const login = document.getElementById("loginForm");

if (login) {
  login.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Fill all fields");
      return;
    }

    // Fake login (allowed for this project)
    localStorage.setItem("user", email);

    window.location.href = "dashboard.html";
  });
}

/* ================= SIGNUP ================= */
const signup = document.getElementById("signupForm");

if (signup) {
  signup.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword =
      document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Account created successfully");

    window.location.href = "login.html";
  });
}

/* ================= RESET PASSWORD (API) ================= */
const reset = document.getElementById("resetForm");

if (reset) {
  reset.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;

    try {
      const res = await fetch(
        "https://simple-crud-backend-6o49.onrender.com/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        document.getElementById("msg").innerText =
          "Password reset link sent!";
      } else {
        alert(data.message || "Reset failed");
      }
    } catch (err) {
      alert("Server error, try again");
    }
  });
}

