const express = require('express');
const { addCategory, getAllCategory } = require('../controllers/categoryController')
const { verifyToken } = require('../middleware/authmiddleware.js');
const { adminMiddleware } = require('../middleware/adminmiddleware.js');


const router = express.Router();



router.post('/create-category',verifyToken, adminMiddleware, addCategory)
router.get('/',getAllCategory)



module.exports = router