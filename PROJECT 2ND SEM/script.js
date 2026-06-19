const products = [
{
    id:1,
    name:"Laptop",
    price:49999,
    image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
},
{
    id:2,
    name:"Smartphone",
    price:24999,
    image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
},
{
    id:3,
    name:"Headphones",
    price:2999,
    image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
},
{
    id:4,
    name:"Smart Watch",
    price:4999,
    image:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"
}
];

const container = document.getElementById("productContainer");
const cartCount = document.getElementById("cartCount");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCart();

function displayProducts(items){
    container.innerHTML = "";

    items.forEach(product => {

        container.innerHTML += `
        <div class="card">
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
        `;
    });
}

displayProducts(products);

function addToCart(id){

    let item = products.find(p => p.id === id);

    cart.push(item);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();
}

function updateCart(){
    cartCount.innerText = cart.length;
}

document.getElementById("search")
.addEventListener("keyup", function(){

    let value = this.value.toLowerCase();

    let filtered = products.filter(product =>
        product.name.toLowerCase().includes(value)
    );

    displayProducts(filtered);
});