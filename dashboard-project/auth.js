const login = document.getElementById("loginForm");
const signup = document.getElementById("signupForm");
const reset = document.getElementById("resetForm");

if(login){
login.addEventListener("submit",(e)=>{
e.preventDefault();
window.location.href="dashboard.html";
});
}

if(signup){
signup.addEventListener("submit",(e)=>{
e.preventDefault();
alert("Account created");
window.location.href="login.html";
});
}

if(reset){
reset.addEventListener("submit",(e)=>{
e.preventDefault();
document.getElementById("msg").innerText =
"Password reset link sent!";
});
}