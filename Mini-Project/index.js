

var productsData;
// const url = async () => {
//     let file = "https://dummyjson.com/products";
//     let res = await fetch(file);
//     let data = await res.json();
//     productsData = data.products;
//     // console.log(userdata);
// }

// url()

(async function () {
    let storeData = localStorage.getItem('products');
    // console.log(storeData)
    if (storeData) {
        productsData = JSON.parse(storeData);
        return
    }

    let file = "https://dummyjson.com/products/";
    let res = await fetch(file);
    let data = await res.json();
    productsData = data.products;

    console.log("Hello")
    localStorage.setItem('products', JSON.stringify(productsData))
})();
// categoryLoad()


const search = document.getElementById("Search");
const demo = document.getElementById("demo");
const tableBody = document.getElementById("tbody");
const searchButton = document.getElementById("button-addon2");
const category = document.getElementById("categorySelect");


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

    let allProductData = productsData;
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
                    ${da.desciption}
                </td>
                <td>
                    ${da.price}
                </td>
                <td>
                    <button class="addToCart"> Add </button>
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

                console.log(`Stock updated for ${product.title}. Remaining stock: ${product.stock}`);
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




