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
                "https://commons.wikimedia.org/wiki/File:Image-not-found.png"
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
                "https://commons.wikimedia.org/wiki/File:Image-not-found.png"
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
                "https://commons.wikimedia.org/wiki/File:Image-not-found.png"
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
                "https://commons.wikimedia.org/wiki/File:Image-not-found.png"
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
                "https://commons.wikimedia.org/wiki/File:Image-not-found.png"
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
                "https://commons.wikimedia.org/wiki/File:Image-not-found.png"
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
                "https://commons.wikimedia.org/wiki/File:Image-not-found.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp"
        }

    ]
}


let themess = document.getElementById("themess");
let productsData;


//with static data
(function () {
    let storeData = localStorage.getItem('products');



    const getId = JSON.parse(localStorage.getItem("id"));
    const getProduct = JSON.parse(localStorage.getItem("products"))


    //Getting last Id
    console.log("Hellos")
    let lastId;
    if (!getId && getProduct) {
        getProduct.map((da) => {
            lastId = da.id;
        })
        localStorage.setItem("id", JSON.stringify(lastId));
    }


    //COokie 
    const theme = getCookie("theme");

    if (theme == null) {
        document.cookie = "theme=Light";
        // document.cookie = "theme=Dark";
    }

    let themeCookie = getCookie("theme");

    if (themeCookie == "Dark") {
        themess.textContent = "Light"
        document.body.style.backgroundColor = "#424242"
    }
    else {
        themess.textContent = "Dark"
        document.body.style.backgroundColor = "#f2f2f2"
    }
    // themess.textContent = themeCookie;
    console.log("Cookie theme", themeCookie)


    console.log("Cookie")
    console.log(theme);
    //cookies


    if (storeData) {
        productsData = JSON.parse(storeData);
        return
    }

    productsData = file.products;

    console.log("Hello")
    localStorage.setItem('products', JSON.stringify(productsData))


})();




// Counting Total Count of Cart Product and inject in the Cart Image
const cartUpdate = () => {
    const cartCount = document.getElementById("cart-count");

    let getCartItem = JSON.parse(localStorage.getItem("cart"));


    if (!getCartItem) {
        cartCount.textContent = 0;
        return;
    }

    let count = 0;
    for (const key of Object.keys(getCartItem)) {

        count += getCartItem[key]
    }
    cartCount.textContent = count;
}



const search = document.getElementById("myInput");
const demo = document.getElementById("demo");
const tableBody = document.getElementById("tbody");
const searchButton = document.getElementById("button-addon2");
const category = document.getElementById("categorySelect");




// Theme Event 
themess.addEventListener("click", (e) => {

    // let themeCookie = getCookie("theme");
    // themess.textContent = themeCookie;

    let choosenTheme = themess.value;
    console.log(choosenTheme)

    if (choosenTheme == "Dark") {
        themess.value = "White"
        themess.textContent = "Light"
        document.cookie = "theme=Dark";
        document.body.style.backgroundColor = "#494949";
    }
    else {

        themess.value = "Dark"
        themess.textContent = "Dark"
        console.log("Inside Light")
        document.cookie = "theme=Light";
        document.body.style.backgroundColor = "#f2f2f2";
    }

    console.log(choosenTheme);


})




console.log(category)




// split Cookie with given name
function getCookie(name) {
    const cookies = document.cookie.split("; ");

    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return value;
        }
    }
    return null;
}







// RenderData Function on every Load
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
                    <button class="addToCart"> Add To Cart </button>
                    <button class="edit" id="editButton"> Edit </button>
                    <button class="delete id="deleteButton"> Delete </button>
                </td>
            `
        tableBody.appendChild(row);
    }
    )

}




//Render Data on reload
(function () {


    // console.log("Hello")
    renderData();
    cartUpdate();
    // cartDetails();


})();

// Category Render
const allCategory = new Set();
let categoryLoad = () => {

    console.log('Inside category function');

    let allProductData = productsData;

    allProductData.forEach(element => {
        allCategory.add(element.category);
    });

    console.log(allCategory)

    for (x of allCategory) {

        const options = document.createElement("option");
        options.value = x;
        options.textContent = x;
        category.appendChild(options);

    }
};

// Category Load on click
category.addEventListener("click", () => {

    if (!allCategory.size) {
        console.log("category clicked")
        categoryLoad();
    }

})


// Category Filter event
category.addEventListener("change", function () {

    if (this.value == "") {
        localStorage.removeItem("LastSearchCategory");
    }

    const selectedValue = this.value;
    console.log(selectedValue)

    localStorage.setItem("LastSearchCategory", selectedValue);
    showData("category", selectedValue)


});



// Search Event
searchButton.addEventListener("click", (e) => {

    e.preventDefault();

    // console.log("Button Clicked")
    let searchValue = search.value.trim().toLowerCase();
    // console.log(searchValue);


    localStorage.setItem("LastSearch", searchValue);
    showData("title", searchValue)

});



// ShowData for search and Category filter (also storing last search and Category search in localStorage)
const showData = (fields, searchValue) => {

    tableBody.innerHTML = "";

    let getData = JSON.parse(localStorage.getItem("products"));
    let allProductData = getData;


    let getLastSearchValue = localStorage.getItem("LastSearch");
    let getLastSearchCategory = localStorage.getItem("LastSearchCategory");

    console.log(getLastSearchCategory, getLastSearchValue);

    if (getLastSearchCategory && getLastSearchValue) {

        allProductData.filter((da) => da.category == getLastSearchCategory)
            .map((da) => {
                let title = da.title.trim().toLowerCase();
                console.log("Searched")
                if (title.includes(getLastSearchValue)) {

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
                    <button class="addToCart"> Add To Cart</button>
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
            let field = da[fields].trim().toLowerCase();
            console.log("Searched")
            if (field.includes(searchValue)) {

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
                    <button class="addToCart"> Add To Cart</button>
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



// Add To Cart Event
tableBody.addEventListener("click", (event) => {

    if (event?.target?.classList.contains("addToCart")) {
        const row = event.target.closest("tr");
        const productId = row.children[0].innerText;
        let products = JSON.parse(localStorage.getItem("products"));

        const product = products.find((p) => p.id == productId);
        let getCart = JSON.parse(localStorage.getItem("cart")) || {};

        let maxCount = product.stock;
        let count = getCart[product.id] || 0;
        console.log("count and maxCOunt", count, maxCount)

        if (product) {

            if (count < maxCount) {
                row.children[6].innerText = product.stock;
                console.log(`Stock updated ${product.title}.remaining stock: ${product.stock}`);

                if (getCart[product.id]) {
                    getCart[product.id] += 1;
                }
                else {
                    getCart[product.id] = 1;
                }

                localStorage.setItem("cart", JSON.stringify(getCart))
                cartUpdate();
            } else {
                alert("Out of stock!");
            }
        }
    }
});




// Edit and Delete Event
document.addEventListener('click', function (event) {

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
            // renderData();
            location.reload();

        }
    }
});




//function is from W3cSchool for suggestion in searching
function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("DIV");
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function (e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) { //up
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}



const debounce = (func, ms) => {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, ms);
    }
}

const searching = async (sea) => {

    // let searchedValue = sea.trim();
    // console.log(searchedValue)

    //getting all titles and for searching suggestion purpose
    let titles = loadTitles();
    let titlesArray = [...titles]
    autocomplete(document.getElementById("myInput"), titlesArray);
}

const debounceSearch = debounce(searching, 500);

search.addEventListener("input", (e) => {
    console.log("Hello")
    debounceSearch(e.target.value)
})




// Load all Titles and save it into the set for suggestion in searching
const loadTitles = () => {

    let getProducts = JSON.parse(localStorage.getItem("products"))

    const titles = new Set();

    for (let product of getProducts) {
        // console.log(product.title);
        titles.add(product.title);
    }

    return titles;
    // console.log(titles)
}

