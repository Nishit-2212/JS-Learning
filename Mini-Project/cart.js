const cartContainer = document.getElementById("cart-items");
const checkoutBtn = document.getElementById("checkout-btn");



// Showing Cart Details from Cart LocalStorage
const cartDetails = () => {
    const cartData = localStorage.getItem("cart");

    const cart = JSON.parse(cartData);
    // console.log(cart)

    if (cart === null) {
        cartContainer.innerHTML = "<p>Your cart is empty</p>";
        console.log("Heelo")
        return;
    }

    const products = JSON.parse(localStorage.getItem("products"));

    cartContainer.innerHTML = "";

    for (const [productId, quantity] of Object.entries(cart)) {

        console.log(productId)
        const product = products.find(p => p.id == productId);

        let totalPrice = product.price * quantity;

        if (!product) continue;

        const card = document.createElement("div");
        card.className = "product-card p-3 shadow-sm";
        card.dataset.productId = productId;

        card.innerHTML = `
            <div class="row align-items-center">
                <div class="col-md-2">
                    <img src="${product.images}" alt="${product.title}" class="product-image">
                </div>
                <div class="col-md-4">
                    <h6 class="mb-1">${product.title}</h6>
                </div>
                <div class="col-md-3">
                    <div class="d-flex align-items-center gap-2">
                        <button class="quantity-btn decrement">-</button>
                        <input type="number" class="quantity-input" value="${quantity}" min="1" id="quant">
                        <button class="quantity-btn increment">+</button>
                    </div>
                </div>
                <div class="col-md-2">
                    <span class="fw-bold product-price">${totalPrice.toFixed(2)}</span>
                </div>
                <div class="col-md-1">
                    <i class="bi bi-trash remove-btn"></i>
                </div>
            </div>
        `;

        console.log()
        cartContainer.appendChild(card);
    }
};


// Handling Events Like Add Product and Delete Product on Cart Page
cartContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    if (!card) return;

    const productId = card.dataset.productId;
    let cart = JSON.parse(localStorage.getItem("cart"));
    const products = JSON.parse(localStorage.getItem("products"));

    const product = products.find(p => p.id == productId);
    // const product = products[productId];

    if (e.target.classList.contains("remove-btn")) {
        delete cart[productId];
    }

    if (e.target.classList.contains("increment")) {
        let count = cart[productId];
        let getProduct = product;
        let maxCount = getProduct.stock;


        console.log("Count and maxCount", count, maxCount)
        if (count >= maxCount) {
            alert("Not enough Quantity")
            return
        }

        cart[productId]++;

        console.log("Innre +")
        console.log(count, getProduct, maxCount)
    }

    if (e.target.classList.contains("decrement")) {
        cart[productId]--;

        if (cart[productId] <= 0) {
            // localStorage.removeItem("cart")
            delete cart[productId];
        }
    }

    const quantityInput = card.querySelector(".quantity-input");
    if (quantityInput) quantityInput.value = cart[productId] || 0;

    const priceSpan = card.querySelector(".product-price");
    if (priceSpan) {
        const totalPrice = (cart[productId] || 0) * product.price;
        priceSpan.textContent = `${totalPrice.toFixed(2)}`;
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    calculateTotals();
    totalItem();
    cartDetails();
});




// Calculating Total Item in Cart
const totalItem = () => {

    const totalItem = document.getElementById("totalItem");
    console.log("Hello")

    let getCart = JSON.parse(localStorage.getItem("cart"));
    let counter = 0;



    if (getCart === null) {
        totalItem.textContent = `Total Item :- 0`
        return;
    }
    else {
        for (const data of Object.entries(getCart)) {
            counter++;
        }
    }


    // console.log(counter)
    totalItem.textContent = `Total Item :- ${counter}`

}


let flag = false;
// render only one time
function renderCartOnce() {
    // if (flag) return;
    cartDetails();
    totalItem();
    flag = true;
}
renderCartOnce();



//calculate toal price and subtotal
const calculateTotals = () => {
    const subTotalElem = document.getElementById("subTotal");
    const totalElem = document.getElementById("total");
    let getCart = JSON.parse(localStorage.getItem("cart"));
    let products = JSON.parse(localStorage.getItem("products"));

    let subTotal = 0;

    if (getCart === null) {
        subTotalElem.textContent = `0.00`;
        totalElem.textContent = `0.00`;
        return;
    }
    for (const [productId, quantity] of Object.entries(getCart)) {
        const product = products.find(p => p.id == productId);
        // const product = products[productId-1];
        if (!product) continue;
        subTotal += product.price * quantity;
    }

    let shipping = subTotal + 5;
    subTotalElem.textContent = `${subTotal.toFixed(2)}`;
    totalElem.textContent = `${shipping.toFixed(2)}`;
};
calculateTotals();



// Handling CheckOut Event and remove Item from product data in localStorage after CheckOut
checkoutBtn.addEventListener("click", () => {
    alert("Checkout Successful!");

    let products = JSON.parse(localStorage.getItem("products")) || [];
    let cart = JSON.parse(localStorage.getItem("cart")) || {};

    for (const [productId, quantity] of Object.entries(cart)) {
        const id = parseInt(productId);

        const product = products.find(p => p.id === id);

        if (product) {
            product.stock -= quantity;

            if (product.stock < 0) {
                product.stock = 0;
            }
        }
        localStorage.setItem("products", JSON.stringify(products));
    }

    localStorage.removeItem("cart");

    cartDetails();
    calculateTotals();
    totalItem();
});
