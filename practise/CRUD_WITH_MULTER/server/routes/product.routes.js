const express = require('express');
const {addProduct,getProducts, getProductById, updateProduct, deleteProduct} = require('../controllers/product.controllers.js')


const router = express.Router();


router.get('/',getProducts);
router.post('/',addProduct);
router.get('/:id',getProductById);
router.put('/',updateProduct);
router.delete('/:id',deleteProduct);




module.exports = router;