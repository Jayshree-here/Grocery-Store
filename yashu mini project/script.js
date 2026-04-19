const products = [ 
{ id: 1, name: "Shirt", price: 500, img: "images/shirt.jpg" }, 
{ id: 2, name: "Shoes", price: 1000, img: "images/shoes.jpg" }, 
{ id: 3, name: "Watch", price: 1500, img: "images/watch.jpg" } 
]; 
let cart = []; 
function showPage(pageId) { 
document.querySelectorAll(".page").forEach(p => 
p.classList.remove("active")); 
document.getElementById(pageId).classList.add("active"); 
} 
function login() { 
let user = document.getElementById("username").value; 
let pass = document.getElementById("password").value; 
if (user && pass) { 
showPage("homePage"); 
displayProducts(); 
  } else { 
    alert("Enter details"); 
  } 
} 
function logout() { 
  cart = []; 
  document.getElementById("username").value = ""; 
  document.getElementById("password").value = ""; 
  showPage("loginPage"); 
}  
function displayProducts() { 
  const div = document.getElementById("products"); 
  div.innerHTML = ""; 
  products.forEach(p => { 
    div.innerHTML += ` 
      <div class="product"> 
        <img src="${p.img}" alt="${p.name}" width="150"> 
        <h3>${p.name}</h3> 
        <p>₹${p.price}</p> 
        <button onclick="addToCart(${p.id})">Add</button> 
      </div> 
    `; 
  }); 
} 
function addToCart(id) { 
  let item = cart.find(p => p.id === id); 
  if (item) item.qty++; 
  else { 
    let product = products.find(p => p.id === id); 
    cart.push({ ...product, qty: 1 }); 
  } 
  alert("Added to cart"); 
} 
function goToCart() { 
  showPage("cartPage"); 
  updateCart(); 
} 
function updateCart() { 
  const list = document.getElementById("cart"); 
  const total = document.getElementById("total"); 
 
  list.innerHTML = ""; 
  let sum = 0; 
  if (cart.length === 0) { 
    list.innerHTML = "<li>Your cart is empty</li>"; 
    total.innerText = 0; 
    return; 
  } 
  cart.forEach(item => { 
    sum += item.price * item.qty; 
    list.innerHTML += `<li>${item.name} x ${item.qty} - ₹${item.price * 
item.qty}</li>`; 
}); 
total.innerText = sum; 
} 
function goToAddress() { 
if (cart.length === 0) { 
alert("Cart is empty"); 
return; 
} 
showPage("addressPage"); 
} 
function goToPayment() { 
showPage("paymentPage"); 
} 
function placeOrder() { 
alert("Order Placed Successfully 🎉"); 
cart = []; 
showPage("homePage"); 
updateCart(); 
} 
