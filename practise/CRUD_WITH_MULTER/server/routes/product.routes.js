const express = require('express');
const {addProduct,getProducts, getProductById, updateProduct, deleteProduct} = require('../controllers/product.controllers.js')

const multer = require('multer');
const {handleFileRequest} = require('../middleware/filehandle.js')

const upload = multer({dest:"photo/"});


const router = express.Router();


router.get('/',getProducts);
router.post('/',upload.single("photo"),addProduct);
router.get('/:id',getProductById);
router.put('/',updateProduct);
router.delete('/:id',deleteProduct);




module.exports = router;