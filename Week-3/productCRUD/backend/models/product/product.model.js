const fs = require('node:fs/promises');


const createProduct = async (data) => {

    try {
        let dataa = await fs.readFile('./product.txt', { encoding: 'utf8' })
        if (!dataa) {
            await fs.writeFile('./product.txt', "[]")
        }

        dataa = await fs.readFile('./product.txt', { encoding: 'utf8' })
        let productData = JSON.parse(dataa);
        let lastId = await getLastId(productData);
        data.id = lastId;
        productData.push(data);
        console.log(productData)
        await fs.writeFile('./product.txt', JSON.stringify(productData))
        // console.log(typeof dataa)

    }
    catch (err) {
        console.log('error', err)
    }

}


const listProduct = async () => {
    try {
        let dataa = await fs.readFile('./product.txt', { encoding: 'utf8' })
        dataa = JSON.parse(dataa)
        console.log(dataa)

        return dataa;
    }
    catch (err) {
        console.log('err', err)
    }
}


const updateProduct = async (item) => {

    try {
        let getId = item.id;
        console.log(getId);
        const getData = await fs.readFile('./product.txt', 'utf-8');

        const productData = await JSON.parse(getData);
        console.log(productData)
        // const updatedProduct = productData.map((products) => {
        //     if(products.id == getId) {
        //         products = item;
        //     }
        // })
        const updatedProduct = [];
        for (const product of productData) {
            if (getId == product.id) {
                updatedProduct.push(item);
            }
            else {
                updatedProduct.push(product);
            }
            console.log('stepbystepUpdatedProduct', updatedProduct);
        }
        console.log('updatedProduct', updatedProduct);
        await fs.writeFile("./product.txt", JSON.stringify(updatedProduct));

    }
    catch (err) {
        console.log('err', err)
    }

}

const deleteProduct = async (id) => {

    try
    {
        const updatedProduct = [];
        const getData = await fs.readFile('./product.txt', 'utf-8');

        const productData = await JSON.parse(getData);
        // console.log(productData)
        console.log("get id",id)

        for (const product of productData) {
            if (id == product.id) {
                // continue;
            }
            else {
                updatedProduct.push(product);
            }
            
        }

        await fs.writeFile('./product.txt',JSON.stringify(updatedProduct));
        console.log("updated product in deletefunction",updatedProduct);
    }
    catch(err) {
        console.log(err)
    }



}


const getLastId = async (dataa) => {

    getAllProduct = dataa;
    let lastId = 1;
    console.log(getAllProduct);
    for (const product of getAllProduct) {
        lastId = product.id + 1
        // lastId++;
        console.log(product.id)
    }

    return lastId;
}


// export default createProduct;
module.exports = { createProduct, listProduct, updateProduct, deleteProduct };