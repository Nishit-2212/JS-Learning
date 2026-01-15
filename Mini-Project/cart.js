// const cartDetails = () => {
//     const cartDetail = localStorage.getItem("cart");
//     if (!cartDetail) return;

//     const cartItems = JSON.parse(cartDetail);   
//     const products = JSON.parse(localStorage.getItem("products"));

//     const cartContainer = document.getElementById("cart-items");
//     cartContainer.innerHTML = ""; 

//     for (const [productId, quantity] of Object.entries(cartItems)) {

//         const product = products[productId];
//         if (!product) continue;

//         const card = document.createElement("div");
//         card.className = "product-card p-3 shadow-sm";

//         card.innerHTML = `
//             <div class="row align-items-center">
//                 <div class="col-md-2">
//                     <img src="${product.images}" alt="P" class="product-image">
//                 </div>
//                 <div class="col-md-4">
//                     <h6 class="mb-1">${product.title}</h6>
//                 </div>
//                 <div class="col-md-3">
//                     <div class="d-flex align-items-center gap-2">
//                         <button class="quantity-btn" onclick="updateQuantity(${productId}, -1)">-</button>
//                         <input type="number" class="quantity-input" value="${quantity}" min="1">
//                         <button class="quantity-btn" onclick="updateQuantity(${productId}, 1)">+</button>
//                     </div>
//                 </div>
//                 <div class="col-md-2">
//                     <span class="fw-bold">$${product.price}</span>
//                 </div>
//                 <div class="col-md-1">
//                     <i class="bi bi-trash remove-btn" onclick="removeFromCart(${productId})"></i>
//                 </div>
//             </div>
//         `;

//         cartContainer.appendChild(card);
//     }
// };

// cartDetails();




const cartContainer = document.getElementById("cart-items");
const checkoutBtn = document.getElementById("checkout-btn");


// function() {

//     const subTotal = document.getElementById("subTotal");
//     const total = document.getElementById("total");

//     let product = JSON.parse(localStorage.getItem("products"));
//     let cart = JSON.parse(localStorage.getItem("cart"));




// }




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

        const product = products[productId-1];
        console.log(product);

        let totalPrice = product.price * quantity;

        // console.log(productId)
        // console.log(product)


        // const value = cart[product.id]
        // console.log(value)
        // console.log("Hello")

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
                    <span class="fw-bold product-price">$${totalPrice.toFixed(2)}</span>
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


cartContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    if (!card) return;

    const productId = card.dataset.productId;
    let cart = JSON.parse(localStorage.getItem("cart"));
    const products = JSON.parse(localStorage.getItem("products"));
    const product = products[productId];

    if (e.target.classList.contains("remove-btn")) {
        let qunatity = document.getElementById("quant").value;
        products[productId-1].stock += parseInt(qunatity);
        localStorage.setItem("products", JSON.stringify(products));
        delete cart[productId];
    }

    if (e.target.classList.contains("increment")) {
        let count = cart[productId];
        let getProduct = products[productId-1];
        let maxCount = getProduct.stock;

        
        console.log(count, maxCount)
        if (count > maxCount+2) {
            alert("Not enough Quantity")
            return
        }

        cart[productId]++;

        products[productId-1].stock -= 1;

        localStorage.setItem("products", JSON.stringify(products));

        console.log("Innre +")
        console.log(count, getProduct, maxCount)
    }

    if (e.target.classList.contains("decrement")) {
        cart[productId]--;

        
        products[productId-1].stock += 1;

        localStorage.setItem("products", JSON.stringify(products));
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
        priceSpan.textContent = `$${totalPrice.toFixed(2)}`;
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    calculateTotals();
    totalItem();
    cartDetails();
});








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

        // let count = getCart.reduce((accu,curr) => ++counter,0)
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
    if (flag) return;
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
        subTotalElem.textContent = `$0.00`;
        totalElem.textContent = `$0.00`;
        return;
    }
    for (const [productId, quantity] of Object.entries(getCart)) {
        const product = products[productId-1];
        if (!product) continue;
        subTotal += product.price * quantity;
    }

    let shipping = subTotal + 5;
    subTotalElem.textContent = `$${subTotal.toFixed(2)}`;
    totalElem.textContent = `$${shipping.toFixed(2)}`; 
};
calculateTotals();




//checkout button event
checkoutBtn.addEventListener("click", () => {
    alert("Checkout Successful!");
    // localStorage.removeItem("cart");
    let products = JSON.parse(localStorage.getItem("products"));
    let cart = JSON.parse(localStorage.getItem("cart"));

    let productsIdInCart = [];
    let productsQuantityInCart = [];

    for (const [productId, quantity] of Object.entries(cart)) {
        console.log(productId, quantity)
        productsIdInCart.push(parseInt(productId));
        productsQuantityInCart.push(quantity);
    }

    // console.log(productsIdInCart, productsQuantityInCart);
    for (let i = 0; i < productsIdInCart.length; i++) {
        const productId = productsIdInCart[i];
        const quantity = productsQuantityInCart[i];
        products[productId - 1].stock -= quantity;
    }

    localStorage.setItem("products", JSON.stringify(products));
    localStorage.removeItem("cart");
    cartDetails();
    calculateTotals();
    totalItem();

});