const user = localStorage.getItem("user");

if (!user || user === "null" || user === "undefined") {
  window.location.href = "login.html";
}

const container = document.getElementById("products")
const searchInput = document.getElementById("searchInput")
const logoutBtn = document.getElementById("logoutBtn")

let products = []

/* loading skeleton */

function showSkeleton(){

for(let i=0;i<8;i++){

const div = document.createElement("div")
div.className="skeleton"

container.appendChild(div)

}

}

/* display courses */

function displayProducts(items){

container.innerHTML=""

items.forEach(product=>{

const card = document.createElement("div")
card.className="product"

card.innerHTML = `

<img src="${product.image}">

<h4>${product.title.substring(0,40)}</h4>

<p>$${product.price}</p>

`

card.onclick = ()=>{

window.location.href=`course.html?id=${product.id}`

}

container.appendChild(card)

})

}

/* fetch API */

async function loadProducts(){

showSkeleton()

const res = await fetch("https://fakestoreapi.com/products")

products = await res.json()

displayProducts(products)

}

loadProducts()

/* search */

searchInput.addEventListener("input",()=>{

const term = searchInput.value.toLowerCase()

const filtered = products.filter(p =>
p.title.toLowerCase().includes(term)
)

displayProducts(filtered)

})

/* logout */

logoutBtn.onclick = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  window.location.href = "login.html";
};
