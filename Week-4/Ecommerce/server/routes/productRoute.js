const express = require('express');
const { addProduct, fetchProduct, deleteProduct, updateProduct, getProductById } = require('../controllers/productController.js')
const router = express.Router();


router.post('/create-product', addProduct);
router.get('/list',fetchProduct);
router.get('/:id', getProductById);


router.put('/update-product', updateProduct)
router.delete('/:id', deleteProduct)


module.exports = router;