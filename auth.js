const login = document.getElementById("loginForm");

if(login){
login.addEventListener("submit", async (e)=>{
e.preventDefault();

const email = document.getElementById("email").value
const password = document.getElementById("password").value

try{

const res = await fetch(
"https://simple-crud-backend-6o49.onrender.com/login",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email:email,
password:password
})
})

const data = await res.json()

if(res.ok){

localStorage.setItem("user", JSON.stringify(data))
window.location.href="dashboard.html"

}else{

alert(data.message || "Login failed")

}

}catch(err){

alert("Server error")

}

})
}

const signup = document.getElementById("signupForm");

if(signup){
signup.addEventListener("submit", async (e)=>{
e.preventDefault();

const name = document.getElementById("name").value
const email = document.getElementById("email").value
const password = document.getElementById("password").value
const confirmPassword = document.getElementById("confirmPassword").value

if(password !== confirmPassword){
alert("Passwords do not match")
return
}

try{

const res = await fetch(
"https://simple-crud-backend-6o49.onrender.com/signup",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name:name,
email:email,
password:password
})
})

const data = await res.json()

if(res.ok){

alert("Account created successfully")
window.location.href="login.html"

}else{

alert(data.message || "Signup failed")

}

}catch(err){

alert("Server error")

}

})
}

const reset = document.getElementById("resetForm");

if(reset){
reset.addEventListener("submit", async (e)=>{
e.preventDefault();

const email = document.getElementById("email").value

try{

const res = await fetch(
"https://simple-crud-backend-6o49.onrender.com/reset-password",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email:email
})
})

const data = await res.json()

if(res.ok){

document.getElementById("msg").innerText =
"Password reset link sent!"

}else{

alert(data.message || "Reset failed")

}

}catch(err){

alert("Server error")

}

})
}
