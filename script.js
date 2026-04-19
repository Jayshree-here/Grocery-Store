// Grocery Items with reliable image URLs
let groceries = [
{name:"Rice",price:60,img:"https://tse2.mm.bing.net/th/id/OIP.zuhzepwnCvZZUPJWi1Q3sQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"},
{name:"Wheat",price:50,img:"https://5.imimg.com/data5/SELLER/Default/2023/9/344257615/OM/LG/KA/191354334/wheat-grains-1000x1000.jpg"},
{name:"Sugar",price:40,img:"https://media.istockphoto.com/id/153484950/photo/sugar.jpg?s=612x612&w=0&k=20&c=QOhyyhG1C_GC-3uRv7bETfJdZMKaMEjUX-f-w0w-hrQ="},
{name:"Salt",price:20,img:"https://th.bing.com/th/id/R.02c2ee8fe2ed70a8c3b69878099ac414?rik=FvLLGDAHzVTA6g&riu=http%3a%2f%2fwww.indiabazaar.co.za%2fcdn%2fshop%2ffiles%2fMIXPRODUCT-2025-07-23T150624.018.jpg%3fv%3d1753276021&ehk=gwUTI0TNTmO7DccrrZdYOfnSMe3tzpgWcZL%2b4bHKthM%3d&risl=&pid=ImgRaw&r=0"},
{name:"Moong Dal",price:120,img:"https://m.media-amazon.com/images/I/61wAC1Gy8vL.jpg"},
{name:"Toor Dal",price:130,img:"https://th.bing.com/th/id/OIP.2DMJczwCTI26DZcmh9_LdgHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"},
{name:"Chana Dal",price:110,img:"https://5.imimg.com/data5/SELLER/Default/2020/12/NG/VV/NP/82583294/unpolished-chana-dal-1000x1000.jpeg"},
{name:"Oil",price:150,img:"https://tse1.mm.bing.net/th/id/OIP.gbRHKzcOMJ7K0CK8nZL21QHaGU?rs=1&pid=ImgDetMain&o=7&rm=3"},
{name:"Milk",price:60,img:"https://tse1.mm.bing.net/th/id/OIP.GquOXtTdkR9xK5bgdrtxowHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"},
{name:"Tea",price:200,img:"https://tse2.mm.bing.net/th/id/OIP.H9x3MGGScqXKS_qLDPl45wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"},
{name:"Coffee",price:300,img:"https://i.pinimg.com/originals/d6/69/18/d6691887774b899ea42cd6e9f2b58b66.png"},
{name:"Besan",price:90,img:"https://tse4.mm.bing.net/th/id/OIP.euIVVvglxINbFv_X5IbIGQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"},
{name:"Atta",price:55,img:"https://i2.wp.com/spicetown.fi/wp-content/uploads/Aashirvaad-Whole-Wheat-Flour-2-kg.jpg"},
{name:"Poha",price:70,img:"https://thumbs.dreamstime.com/b/puffed-rice-poha-uncooked-raw-selective-focus-flattened-thick-thin-flakes-namkeen-chivda-snacks-aloo-indian-breakfast-188303648.jpg"},
{name:"Rava",price:80,img:"https://th.bing.com/th/id/R.d274493575391c4cb68507767ec02781?rik=wUO3Zxe3MbO4Lw&riu=http%3a%2f%2felitefoods.co.in%2fimg%2fproduct%2fnew%2fRava-min.png&ehk=SeT8bCMtZe25T2nlvwhsSsx4MrqxrIFYA%2fw6R05kYMU%3d&risl=&pid=ImgRaw&r=0"},
{name:"Maida",price:60,img:"https://tse2.mm.bing.net/th/id/OIP.Pj3tDcdUHujAh8tS66Ee0gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"},
{name:"Turmeric",price:20,img:"https://th.bing.com/th/id/OIP.WViPKZ9miiECefPqjv0mBQHaFA?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"},
{name:"Chilli",price:30,img:"https://tse4.mm.bing.net/th/id/OIP.bvD-xhY2LnHpL1zj5p3Q2gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"},
{name:"Jeera",price:40,img:"https://m.media-amazon.com/images/I/51Fbom61ovL.jpg"},
{name:"Mustard",price:35,img:"https://tse2.mm.bing.net/th/id/OIP.U2eO70Xb0nSc7lfR0-PE5QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"}
];

// duplicate to make 50 items
while (groceries.length < 50) {
    groceries = groceries.concat(groceries);
}
groceries = groceries.slice(0, 50);

let bag = JSON.parse(localStorage.getItem("bag")) || [];

// LOGIN
function login() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("cid").value;

    if (name === "" || id === "") {
        alert("Please enter customer name and ID");
        return;
    }

    localStorage.setItem("customer", name);
    localStorage.setItem("customerId", id);

    window.location.href = "profile.html";
}

// PROFILE
if (document.getElementById("customerName")) {
    let customer = localStorage.getItem("customer");
    document.getElementById("customerName").innerText = "Welcome " + customer;
}

// GO SHOP
function goShop() {
    window.location.href = "shop.html";
}

// LOAD ITEMS
if (document.getElementById("items")) {
    let container = document.getElementById("items");

    groceries.forEach((g, i) => {
        container.innerHTML += `
        <div class="item">
            <img src="${g.img}">
            <h4>${g.name}</h4>
            <p>₹${g.price} per kg</p>
            <input type="number" placeholder="Enter grams" 
                   oninput="calc(${i}, this.value)">
            <p id="price${i}">₹0</p>
            <button onclick="addToBag(${i})">Add to Bag</button>
        </div>
        `;
    });
}

// CALCULATE
function calc(i, grams) {
    if (!grams) grams = 0;

    let price = (groceries[i].price / 1000) * grams;

    document.getElementById("price" + i).innerText =
        "₹" + price.toFixed(2);
}

// ADD TO BAG
function addToBag(i) {
    let inputs = document.querySelectorAll(".item input");
    let qty = inputs[i].value;

    if (!qty || qty <= 0) {
        alert("Enter quantity first");
        return;
    }

    let price = (groceries[i].price / 1000) * qty;

    bag.push({
        name: groceries[i].name,
        qty: qty,
        price: price
    });

    localStorage.setItem("bag", JSON.stringify(bag));

    alert("Added to bag");
}

// GO BAG
function goBag() {
    window.location.href = "bag.html";
}

// LOAD BAG
if (document.getElementById("bag")) {
    let data = JSON.parse(localStorage.getItem("bag")) || [];
    let total = 0;

    data.forEach(item => {
        document.getElementById("bag").innerHTML +=
            `<p>${item.name} - ${item.qty}g - ₹${item.price.toFixed(2)}</p>`;

        total += item.price;
    });

    document.getElementById("total").innerText =
        "Total: ₹" + total.toFixed(2);
}

// PLACE ORDER
function placeOrder() {
    alert("Your order is placed successfully!");

    localStorage.removeItem("bag");

    window.location.href = "index.html";
}