let file = {
  "products": [
    {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "stock": 99,
      "brand": "Essence",
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princdess/1.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
    },
    {
      "id": 2,
      "title": "Eyeshadow Palette with Mirror",
      "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      "category": "beauty",
      "price": 19.99,
      "stock": 34,
      "brand": "Glamour Beauty",
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-withdd-mirror/1.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
    },
    {
      "id": 3,
      "title": "Powder Canister",
      "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine.",
      "category": "fragrances",
      "price": 14.99,
      "stock": 89,
      "brand": "Velvet Touch",
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/powder-canistder/1.wedbp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"
    },
    {
      "id": 4,
      "title": "Red Lipstick",
      "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips.",
      "category": "fragrances",
      "price": 12.99,
      "stock": 91,
      "brand": "Chic Cosmetics",
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/red-lipstickd/1.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp"
    },
    {
      "id": 5,
      "title": "Red Nail Polish",
      "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails.",
      "category": "furniture",
      "price": 8.99,
      "stock": 79,
      "brand": "Nail Couture",
      "images": [
        "https://cdn.dummyjson.com/product-images/beauty/red-nail-poldish/1.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp"
    },

    {
      "id": 6,
      "title": "Calvin Klein CK One",
      "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent.",
      "category": "groceries",
      "price": 49.99,
      "stock": 4,
      "brand": "Calvin Klein",
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp"
    },

    {
      "id": 7,
      "title": "Chanel Coco Noir Eau De",
      "description": "Coco Noir by Chanel is an elegant and mysterious fragrance.",
      "category": "groceries",
      "price": 129.99,
      "stock": 58,
      "brand": "Chanel",
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp"
    }

  ]
}


// const url = async () => {
    //     let file = "https://dummyjson.com/products";
    //     let res = await fetch(file);
    //     let data = await res.json();
    //     productsData = data.products;
    //     // console.log(userdata);
    // }
    
    // url()
    
    
    let productsData;

//with static data
(async function () {
    let storeData = localStorage.getItem('products');
    // console.log(storeData)
    if (storeData) {
        productsData = JSON.parse(storeData);
        return
    }

    // let file = "https://dummyjson.com/products/";
    // let res = await fetch(file);
    // let data = await res.json();
    productsData = file.products;

    console.log("Hello")
    localStorage.setItem('products', JSON.stringify(productsData))


})();   



// with single API
// (async function () {
//     let storeData = localStorage.getItem('products');
//     // console.log(storeData)
//     if (storeData) {
//         productsData = JSON.parse(storeData);
//         return
//     }

//     let file = "https://dummyjson.com/products/";
//     let res = await fetch(file);
//     let data = await res.json();
//     productsData = data.products;

//     console.log("Hello")
//     localStorage.setItem('products', JSON.stringify(productsData))


// })();   
// categoryLoad()



const cartUpdate = ()=> {
        const cartCount = document.getElementById("cart-count");

        let getCartItem = JSON.parse(localStorage.getItem("cart"));
        // console.log(getCartItem)

        if(getCartItem != null) {
            let count = 0;
            
            for(const key of Object.keys(getCartItem)) {
                // console.log(getCartItem[key])
                count += getCartItem[key]
            }

            cartCount.textContent = count;

        }
        else {
            // console.log("Outer")
            cartCount.textContent = 0
        }
}



const search = document.getElementById("Search");
const demo = document.getElementById("demo");
const tableBody = document.getElementById("tbody");
const searchButton = document.getElementById("button-addon2");
const category = document.getElementById("categorySelect");






const renderData = () => {

let allProductData = JSON.parse(localStorage.getItem("products"));

    productsData.map((da) => {
            
                const row = document.createElement("tr");
                row.innerHTML = `
                <td style="display: none;">${da.id}</td>   
                <td>
                    ${da.title}
                </td>
                <td>
                    ${da.category}
                </td>
                <td>
                    <img src="${da.images}" alt="Image is not loaded" height="100" width="100">
                </td>
                <td>
                    ${da.description}
                </td>
                <td>
                    ${da.price}
                </td>
                <td>
                    ${da.stock}
                </td>
                <td>
                    <button class="addToCart"> Add </button>
                    <button class="edit" id="editButton"> Edit </button>
                    <button class="delete id="deleteButton"> Delete </button>
                </td>
            `
                tableBody.appendChild(row);
            }
        )

}






//Render Data on reload
(function() {

    
    // console.log("Hello")
        renderData();
        cartUpdate();
        // cartDetails();


})();






var categoryLoaded = false;
category.addEventListener("click", () => {

    if (!categoryLoaded) {
        console.log("category clicked")
        // category.innerHTML = ''
        categoryLoad();
        categoryLoaded = true;
    }

})


category.addEventListener("change", function () {

    // console.log("category clicked")
    // category.innerHTML = ''
    // categoryLoad()

    if (this.value == "") {
        // console.log("True")
        localStorage.removeItem("LastSearchCategory");
    }



    const selectedValue = this.value;
    console.log(selectedValue)



    localStorage.setItem("LastSearchCategory", selectedValue);
    showData("category",selectedValue)


    //try

    // tableBody.innerHTML = "";

    // let allProductData = productsData;
    // let searchValue = search.value;

    // allProductData.filter((da) => da.category == selectedValue)
    //     .map((da) => {
    //         let title = da.title;
    //         console.log("Searched")
    //         if (title.startsWith(searchValue)) {

    //             const row = document.createElement("tr");
    //             row.innerHTML = `
    //             <td>
    //                 ${da.title}
    //             </td>
    //             <td>
    //                 ${da.category}
    //             </td>
    //             <td>
    //                 <img src="${da.images}" alt="Image is not loaded" height="100" width="100">
    //             </td>
    //             <td>
    //                 ${da.desciption}
    //             </td>
    //             <td>
    //                 ${da.price}
    //             </td>
    //             <td>
    //                 <button class="addToCart"> Add </button>
    //             </td>
    //         `
    //             tableBody.appendChild(row);


    //         }
    //     })

    //try




});



searchButton.addEventListener("click", () => {

    // console.log("Button Clicked")
    let searchValue = search.value;

    localStorage.setItem("LastSearch", searchValue);
    showData("title", searchValue)



    // tableBody.innerHTML = "";

    // let allProductData = productsData;


    // allProductData.map((da) => {
    //     let title = da.title;
    //     console.log("Searched")
    //     if (title.startsWith(searchValue)) {

    //         const row = document.createElement("tr");
    //         row.innerHTML = `
    //             <td>
    //                 ${da.title}
    //             </td>
    //             <td>
    //                 ${da.category}
    //             </td>
    //             <td>
    //                 <img src="${da.images}" alt="Image is not loaded" height="100" width="100">
    //             </td>
    //             <td>
    //                 ${da.desciption}
    //             </td>
    //             <td>
    //                 ${da.price}
    //             </td>
    //             <td>
    //                 <button class="addToCart"> Add </button>
    //             </td>
    //         `
    //         tableBody.appendChild(row);


    //     }
    // })

});



// Dought Self invoking function is not working 
function categoryLoad() {
    const allCategory = new Set();

    let allProductData = productsData;

    allProductData.map((da) => {
        allCategory.add(da.category);
    })

    console.log(allCategory)

    for (x of allCategory) {

        const options = document.createElement("option");
        options.value = x;
        options.textContent = x;
        category.appendChild(options);

        //     category.innerHTML = `
        //     <option value="${x}"> ${x} </option>
        //    `  
    }
};


const showData = (fields, searchValue) => {

    tableBody.innerHTML = "";

    let getData = JSON.parse(localStorage.getItem("products"));
    let allProductData = getData;
    // var fieldss = fields


    // combine search from localStorage
    let getLastSearchValue = localStorage.getItem("LastSearch");
    let getLastSearchCategory = localStorage.getItem("LastSearchCategory");

    if (getLastSearchCategory && getLastSearchValue) {

        allProductData.filter((da) => da.category == getLastSearchCategory)
            .map((da) => {
                let title = da.title;
                console.log("Searched")
                if (title.startsWith(getLastSearchValue)) {

                    const row = document.createElement("tr");
                    row.innerHTML = `
                <td>
                    ${da.title}
                </td>
                <td>
                    ${da.category}
                </td>
                <td>
                    <img src="${da.images}" alt="Image is not loaded" height="100" width="100">
                </td>
                <td>
                    ${da.description}
                </td>
                <td>
                    ${da.price}
                </td>
                <td>
                    ${da.stock}
                </td>
                <td>
                    <button class="addToCart"> Add </button>
                    <button class="edit" id="editButton"> Edit </button>
                    <button class="delete id="deleteButton"> Delete </button>
                </td>
            `
                    tableBody.appendChild(row);


                }
            })


    }
    else {
        allProductData.map((da) => {
            let field = da[fields];
            console.log("Searched")
            if (field.startsWith(searchValue)) {

                const row = document.createElement("tr");
                row.innerHTML = `
                <td style="display: none;">${da.id}</td>   
                <td>
                    ${da.title}
                </td>
                <td>
                    ${da.category}
                </td>
                <td>
                    <img src="${da.images}" alt="Image is not loaded" height="100" width="100">
                </td>
                <td>
                    ${da.description}
                </td>
                <td>
                    ${da.price}
                </td>
                <td>
                    ${da.stock}
                </td>
                <td>
                    <button class="addToCart"> Add </button>
                    <button class="edit" id="editButton"> Edit </button>
                    <button class="delete id="deleteButton"> Delete </button>
                </td>
            `
                tableBody.appendChild(row);
            }
        })
    }
}




window.addEventListener("load", () => {
    localStorage.removeItem("LastSearchCategory");
    localStorage.removeItem("LastSearch");

});



tableBody.addEventListener("click", (event) => {

    if (event.target && event.target.classList.contains("addToCart")) {
        const row = event.target.closest("tr");

        const productId = row.children[0].innerText;
        // const category = row.children[1].innerText;
        // const imageSrc = row.children[2].querySelector("img").src;
        // const description = row.children[3].innerText;
        // const price = row.children[4].innerText;

        // console.log(title);

        let products = JSON.parse(localStorage.getItem("products"));

        const product = products.find((p) => p.id == productId);

        if(product) {

            if (product.stock > 0) {
                product.stock -= 1;

                row.children[6].innerText = product.stock;

                localStorage.setItem("products", JSON.stringify(products));

                console.log(`Stock updated ${product.title}.remaining stock: ${product.stock}`);

                let getCart = JSON.parse(localStorage.getItem("cart")) || {};
                if(getCart[product.id]) {
                    getCart[product.id] += 1;
                }
                else {
                    // getCart[product.id] = 0;
                    getCart[product.id] = 1;
                }

                // getCart[product.id] += 1;

                localStorage.setItem("cart",JSON.stringify(getCart))

                cartUpdate();

            } else {
                alert("Out of stock!");
            }
        }
    }
});


// :TODO Debouncing
// const debounce = (func, ms) => {
//     let timeout;
//     return function (...args) {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => {
//             func.apply(this, args);
//         }, ms);
//     }
// }

// const searching = async(sea) => {

//     let searchedValue = sea.trim();
//     demo.innerText = searchedValue;
// }

// const debounceSearch = debounce(searching, 500);

// search.addEventListener("input",(e) => {

//     console.log("Hello")
//     debounceSearch(e.target.value)
// })



document.addEventListener('click', function(event) {
    if (event.target.classList.contains('edit')) {
        const row = event.target.closest('tr');
        const productId = row.children[0].innerText; 


        // console.log("Clicked");
        window.location.href = `edit.html?productId=${productId}`;
    }

    if (event.target.classList.contains('delete')) {
        const row = event.target.closest('tr');
        const productId = row.children[0].innerText;
        // console.log(productId);

        let products = JSON.parse(localStorage.getItem("products"));
        const product = products.find((p) => p.id == productId);
        if (product) {
            products.splice(products.indexOf(product), 1);
            localStorage.setItem("products", JSON.stringify(products));
            // alert("Product deleted successfully");
            renderData();
        }
    }
});








