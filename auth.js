
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
  reset.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;

    console.log("Sending email:", email);

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

      console.log("Response status:", res.status);

      const data = await res.json();
      console.log("Response data:", data);

      if (res.ok) {
        document.getElementById("msg").innerText =
          "Password reset link sent!";
      } else {
        alert(data.message || "Reset failed");
      }
    } catch (err) {
      console.error("ERROR:", err);
      alert("Server error, check console");
    }
  });
}

