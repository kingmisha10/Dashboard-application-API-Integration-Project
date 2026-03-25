const params = new URLSearchParams(window.location.search)

const id = params.get("id")

fetch(`https://fakestoreapi.com/products/${id}`)
.then(res=>res.json())
.then(data=>{

document.getElementById("course").innerHTML = `

<div class="course-card">

<div class="course-image">
<img src="${data.image}">
</div>

<div class="course-info">

<h2>${data.title}</h2>

<p class="category">${data.category}</p>

<p class="desc">${data.description}</p>

<h3 class="price">$${data.price}</h3>

<button class="buy-btn">Enroll Course</button>

</div>

</div>

`

})