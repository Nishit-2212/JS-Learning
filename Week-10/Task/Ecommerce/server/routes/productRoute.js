const express = require('express');
const { addProduct, fetchProduct, deleteProduct, updateProduct, getProductById } = require('../controllers/productController.js')
const { verifyToken } = require('../middleware/authmiddleware.js');
const { adminMiddleware } = require('../middleware/adminmiddleware.js');



const router = express.Router();


router.post('/create-product', addProduct);
router.get('/list',fetchProduct);
router.get('/:id', getProductById);


router.put('/update-product',verifyToken,adminMiddleware, updateProduct)
router.delete('/:id',verifyToken,adminMiddleware, deleteProduct)


module.exports = router;