const productModel = require("../models/product");
const productCounterModel = require('../models/productCounter')

const addProduct = async (req, res) => {
  let data = req.body;
  console.log(data);

  console.log("Inner Add Product Controller");

  try {


    const productLastId = await productCounterModel.findOne();
    console.log("ProductsId is id", productLastId)
    console.log("Last product Id", productLastId.productId)
    await productCounterModel.findOneAndUpdate(
      {},
      { $inc: { productId: 1 } },
      { new: true }
    );


    const newProduct = new productModel({
      productId: productLastId.productId,
      title: data.title,
      category: data.category,
      image: data.imageUrl,
      description: data.description,
      price: Number(data.price),
      stock: Number(data.stock),
    });
    await newProduct.save();
    console.log(newProduct);
    return res.status(201).json({
      message: "Product added successfully",
      product: newProduct
    });
  } catch (err) {
    console.error("error in adding product", err);
    return res.status(400).json({ message: "Error in adding product" });
  }
};

const fetchProduct = async (req, res) => {
  try {
    // const page = parseInt(req.params.page) || 1;
    // const limit = 3;
    // // console.log("page and limit",page,limit)
    // // console.log(req.params.page)
    // const skip = (page-1) * limit;
    // const paginationWiseProduct = productData.slice(skip,(skip+limit))
    // // console.log(paginationWiseProduct)

    const allProduct = await productModel.find();

    console.log("Inner Load Product");
    return res.status(200).json(allProduct);
  } catch (err) {
    console.log("Error in fetching", err);
    return res.status(400).json({ message: "Error in fetching products" });
  }
};

const getProductById = async (req, res) => {
  try {
    console.log("pronting the product", req.params.id);
    const id = Number(req.params.id);

    const product = await productModel.findOne({ productId: id })

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    console.log(product);
    return res.status(200).json(product);
  } catch (err) {
    console.log("Error in get Product", err);
    return res.status(400).json({ message: "Error in fetching product by ID" });
  }
};

const updateProduct = async (req, res) => {
  console.log("Inner update product ");
  const updatedProduct = req.body;
  console.log(updatedProduct);

  try {
    const getProduct = await productModel.findOne({productId:updatedProduct.id})
    if(!getProduct) {
      return res.status(400).json({ message: "Product Not found" });
    }

    await productModel.findOneAndUpdate({ productId: updatedProduct.id }, {
      title: updatedProduct.title,
      category: updatedProduct.category,
      image: updatedProduct.imageUrl,
      description: updatedProduct.description,
      price: Number(updatedProduct.price),
      stock: Number(updatedProduct.stock),
    })


    return res.status(200).json({ message: "Product Updated Succesfully" });
  } catch (err) {
    console.log("Error in updating the product", err);
  }
};

const deleteProduct = async(req, res) => {
  let id = Number(req.params.id);

  try {
    // let index = productData.findIndex((product) => product.id === id);
    
    await productModel.deleteOne({productId:id})

    return res.status(200).json({ message: "Product deleted Successfully" });
  } catch (err) {
    console.log("Error in deleting", err);
  }
};

module.exports = {
  addProduct,
  fetchProduct,
  deleteProduct,
  updateProduct,
  getProductById,
};
