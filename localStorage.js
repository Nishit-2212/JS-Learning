

var productsData;
// const url = async () => {
//     let file = "https://dummyjson.com/products";
//     let res = await fetch(file);
//     let data = await res.json();
//     productsData = data.products;
//     // console.log(userdata);
// }

// url()

(async function() {
    let storeData = localStorage.getItem('products');
    if(storeData) {
        return 
    }
    let file = "https://dummyjson.com/products/";
    let res = await fetch(file);
    let data = await res.json();
    productsData = data.products;
    console.log("Hello")
})();




const button = document.getElementById("btn");
const button1 = document.getElementById("btn1");


button.addEventListener("click", () => {

    localStorage.setItem('products',JSON.stringify(productsData))

})



button1.addEventListener("click",()=> {
    let storeData = localStorage.getItem('products');
    if(storeData) {
        const parseData = JSON.parse(storeData);
        console.log(storeData)
    }
})
 

