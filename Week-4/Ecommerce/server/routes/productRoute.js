const express = require('express');
const { addProduct, fetchProduct, deleteProduct, updateProduct } = require('../controllers/productController.js')
const router = express.Router();


router.post('/create-product', (req, res) => {
    console.log("Hello")
    try {
        let data = req.body;
        console.log(data);
        addProduct(data);

        res.status(201).json('Product Created SuccesFully');
    }
    catch (err) {
        console.error("Error in Creating", err);
    }
})


router.get('/list', (req, res) => {

    try {
        console.log("Inner Load Product")
        const allProduct = fetchProduct();
        res.status(200).json(allProduct);
    }
    catch (err) {
        console.log("Error in fetching", err)
    }

})


router.put('/update-product', (req, res) => {
    const product = req.body;
    try {
        const resp = updateProduct(product);
        console.log("responce", resp)
        if (!resp) {
            res.status(400).json({ message: "Product Not found" })
            return; // bug this is not returning that's why i added this
        }
        res.status(200).json({ message: "Product Updated Succesfully" });
    }
    catch (err) {
        console.log("Error in update product", err)
    }
});

router.delete('/:id', deleteProduct)


module.exports = router;