const express = require('express')
const { createProduct, listProduct, updateProduct, deleteProduct } = require('../../models/product/product.model.js')
// import productModel from '../../models/product/product.model.js'


// const app = express();

const productRouter = express.Router();


productRouter.post('/',(req,res) => {
    console.log("Creating product");

    createProduct(req.body);

    res.status(200).send("Created Succcefullly")
    
});


productRouter.get('/',async(req,res) => {
    console.log("Listing all product");

    let data = JSON.stringify(req.body);
    
    const resp = await listProduct();
    console.log("Hello")
    console.log(resp);
    res.status(200).send(resp);
    // res.end();
});

productRouter.put('/',async(req,res) => {

    console.log("Inner put method")
    const getData = req.body;
    await updateProduct(getData)

    const resp = await listProduct();
    res.status(200).send(resp);

})

productRouter.delete('/:id',async(req,res) => {

    console.log("Product Delete Command Fire");
    const id = req.params.id;
    // console.log("getting id",id);

    await deleteProduct(id);

    const resp = await listProduct();
    res.status(200).send(resp);


})




module.exports = productRouter;