const { LocalStorage } = require('node-localstorage')

let localStorage = new LocalStorage('./models')

let productData = JSON.parse(localStorage.getItem("product")) || [];
let productLastId = JSON.parse(localStorage.getItem("productId")) || 1;


const addProduct = (data) => {
    try {
        data.id = productLastId;
        productData.push(data);
        localStorage.setItem('productId', JSON.stringify(++productLastId));
        localStorage.setItem('product', JSON.stringify(productData));
        console.log(productData)
    }
    catch (err) {
        console.error("error in adding product", err)
    }
}


const fetchProduct = () => {
    return productData;
}


const updateProduct = (updatedProduct) => {

    try {
        const index = productData.findIndex(product => updatedProduct.id === product.id);

        if(index === -1) {
            // return "Product not found";
            
            return false;
        }

        productData[index] = updatedProduct;

        localStorage.setItem('product', JSON.stringify(productData));
        return true;
    }
    catch (err) {
        console.log("Error in updating the product", err)
    }

}



const deleteProduct = (id) => {

    try {
        let index = productData.findIndex(product => product.id === id);
        productData.splice(index, 1);
        localStorage.setItem("product", JSON.stringify(productData))
    }
    catch (err) {
        console.log("Error in deleting", err)
    }

}


module.exports = { addProduct, fetchProduct, deleteProduct, updateProduct };
