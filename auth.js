const BASE_URL = "https://simple-crud-backend-6o49.onrender.com";

/* ================= LOGIN ================= */
const login = document.getElementById("loginForm");

if (login) {
  login.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Save token/user
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);

        window.location.href = "dashboard.html";
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      alert("Server error, try again");
    }
  });
}

/* ================= SIGNUP ================= */
const signup = document.getElementById("signupForm");

if (signup) {
  signup.addEventListener("submit", async (e) => {
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

    try {
      const res = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Account created successfully");
        window.location.href = "login.html";
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      alert("Server error, try again");
    }
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

