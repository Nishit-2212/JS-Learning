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





let productsData;

//with static data
(function () {
    let storeData = localStorage.getItem('products');
    if (storeData) {
        productsData = JSON.parse(storeData);
        return
    }

    productsData = file.products;

    console.log("Hello")
    localStorage.setItem('products', JSON.stringify(productsData))


})();





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


let themess = document.getElementById("themess");


themess.addEventListener("click", (e) => {
    
    let choosenTheme = themess.value;
    console.log(choosenTheme)
    
    if(choosenTheme == "Dark") {
        themess.value = "White"
        themess.textContent = "Light"
        document.cookie = "theme=Dark";
    }
    else {
        
        themess.value = "Dark"
        themess.textContent = "Dark"
        console.log("Inside Light")
        document.cookie = "theme=Light";
    }
    
    console.log(choosenTheme);
    
    
})




console.log(category)





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
(function () {


    // console.log("Hello")
    renderData();
    cartUpdate();
    // cartDetails();


})();

const allCategory = new Set();

// Dought Self invoking function is not working 
function categoryLoad() {
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


category.addEventListener("click", () => {

    if (!allCategory.size) {
        console.log("category clicked")
        categoryLoad();
    }

})


category.addEventListener("change", function () {

    if (this.value == "") {
        localStorage.removeItem("LastSearchCategory");
    }



    const selectedValue = this.value;
    console.log(selectedValue)



    localStorage.setItem("LastSearchCategory", selectedValue);
    showData("category", selectedValue)


});


// Commented
// searchButton.addEventListener("click", () => {

//     // console.log("Button Clicked")
//     let searchValue = search.value.trim().toLowerCase();
//     // console.log(searchValue);


//     localStorage.setItem("LastSearch", searchValue);
//     showData("title", searchValue)

// });


// const showData = (fields, searchValue) => {

//     tableBody.innerHTML = "";

//     let getData = JSON.parse(localStorage.getItem("products"));
//     let allProductData = getData;


//     let getLastSearchValue = localStorage.getItem("LastSearch");
//     let getLastSearchCategory = localStorage.getItem("LastSearchCategory");

//     console.log(getLastSearchCategory,getLastSearchValue);

//     if (getLastSearchCategory && getLastSearchValue) {

//         allProductData.filter((da) => da.category == getLastSearchCategory)
//             .map((da) => {
//                 let title = da.title.trim().toLowerCase();
//                 console.log("Searched")
//                 if (title.includes(getLastSearchValue)) {

//                     const row = document.createElement("tr");
//                     row.innerHTML = `
//                 <td>
//                     ${da.title}
//                 </td>
//                 <td>
//                     ${da.category}
//                 </td>
//                 <td>
//                     <img src="${da.images}" alt="Image is not loaded" height="100" width="100">
//                 </td>
//                 <td>
//                     ${da.description}
//                 </td>
//                 <td>
//                     ${da.price}
//                 </td>
//                 <td>
//                     ${da.stock}
//                 </td>
//                 <td>
//                     <button class="addToCart"> Add </button>
//                     <button class="edit" id="editButton"> Edit </button>
//                     <button class="delete id="deleteButton"> Delete </button>
//                 </td>
//             `
//                     tableBody.appendChild(row);


//                 }
//             })


//     }
//     else {
//         allProductData.map((da) => {
//             let field = da[fields].trim().toLowerCase();
//             console.log("Searched")
//             if (field.includes(searchValue)) {

//                 const row = document.createElement("tr");
//                 row.innerHTML = `
//                 <td style="display: none;">${da.id}</td>   
//                 <td>
//                     ${da.title}
//                 </td>
//                 <td>
//                     ${da.category}
//                 </td>
//                 <td>
//                     <img src="${da.images}" alt="Image is not loaded" height="100" width="100">
//                 </td>
//                 <td>
//                     ${da.description}
//                 </td>
//                 <td>
//                     ${da.price}
//                 </td>
//                 <td>
//                     ${da.stock}
//                 </td>
//                 <td>
//                     <button class="addToCart"> Add </button>
//                     <button class="edit" id="editButton"> Edit </button>
//                     <button class="delete id="deleteButton"> Delete </button>
//                 </td>
//             `
//                 tableBody.appendChild(row);
//             }
//         })
//     }
// }




window.addEventListener("load", () => {
    localStorage.removeItem("LastSearchCategory");
    localStorage.removeItem("LastSearch");

});



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


(function () {

    const getId = JSON.parse(localStorage.getItem("id"));
    const getProduct = JSON.parse(localStorage.getItem("products"))


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

    console.log(theme);

})()



// console.log("Seached")
// console.log(search)


function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}


// :TODO Debouncing
const debounce = (func, ms) => {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, ms);
    }
}

const searching = async(sea) => {

    let searchedValue = sea.trim();
    // console.log(searchedValue)
    let titles = loadTitles();
    let titlesArray = [...titles]
    autocomplete(document.getElementById("myInput"), titlesArray);
}

const debounceSearch = debounce(searching, 500);

search.addEventListener("input",(e) => {
    console.log("Hello")
    debounceSearch(e.target.value)
})





const loadTitles = () => {

    let getProducts = JSON.parse(localStorage.getItem("products"))

    const titles = new Set();


    for(let product of getProducts) {
        // console.log(product.title);
        titles.add(product.title);
    }

    return titles;
    // console.log(titles)

}

