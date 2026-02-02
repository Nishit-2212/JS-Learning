const express = require('express');
const { addProduct, fetchProduct, deleteProduct, updateProduct, getProductById } = require('../controllers/productController.js')
const { verifyToken } = require('../middleware/authmiddleware.js');
const { adminMiddleware } = require('../middleware/adminmiddleware.js');


const router = express.Router();


router.post('/create-product',verifyToken,adminMiddleware, addProduct);
router.get('/list',fetchProduct);
router.get('/:id', getProductById);


router.put('/update-product', updateProduct)
router.delete('/:id', deleteProduct)


module.exports = router;