const login = document.getElementById("loginForm");

if(login){
login.addEventListener("submit",(e)=>{
e.preventDefault()

localStorage.setItem("user","student")

window.location.href="dashboard.html"
})
}

const signup = document.getElementById("signupForm");

if(signup){
signup.addEventListener("submit",(e)=>{
e.preventDefault()

alert("Account created successfully")

window.location.href="login.html"
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
