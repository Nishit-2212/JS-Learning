const { LocalStorage } = require("node-localstorage");

let localStorage = new LocalStorage("./models");

let productData = JSON.parse(localStorage.getItem("productData")) || [];
let productLastId = JSON.parse(localStorage.getItem("productId")) || 1;


const productModel = require("../models/product");


const addProduct = async(req, res) => {
  let data = req.body;
  console.log(data);

  console.log("Inner Add Product Controller");

  try {
    const newProduct = new productModel({
      title: data.title,
      category: data.category,
      image: data.image,
      description: data.description,
      price: Number(data.price),
      stock: Number(data.stock),
    });
    await newProduct.save();
    console.log(newProduct);
    return res.status(201).json({message: "Product added successfully",
      product: newProduct
     });
  } catch (err) {
    console.error("error in adding product", err);
    return res.status(400).json({ message: "Error in adding product" });
  }
};

const fetchProduct = (req, res) => {
  try {
    const page = parseInt(req.params.page) || 1;
    const limit = 3;
    // console.log("page and lmit",page,limit)
    // console.log(req.params.page)
    const skip = (page-1) * limit;
    const paginationWiseProduct = productData.slice(skip,(skip+limit))
    // console.log(paginationWiseProduct)
    console.log("Inner Load Product");
    return res.status(200).json(productData);
  } catch (err) {
    console.log("Error in fetching", err);
    return res.status(400).json({ message: "Error in fetching products" });
  }
};

const getProductById = (req, res) => {
  try {
    console.log("pronting the product",req.params.id);
    let id = Number(req.params.id);
    const product = productData.find((p) => p.id === id);
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

const updateProduct = (req, res) => {
  console.log("Inner update product ");
  const updatedProduct = req.body;
  console.log(updatedProduct);

  try {
    const index = productData.findIndex(
      (product) => updatedProduct.id == product.id,
    );

    console.log('Index:', index);

    if (index === -1) {
      // return "Product not found";
      return res.status(400).json({ message: "Product Not found" });
    }

    productData[index] = updatedProduct;

    localStorage.setItem("product", JSON.stringify(productData));
    return res.status(200).json({ message: "Product Updated Succesfully" });
  } catch (err) {
    console.log("Error in updating the product", err);
  }
};

const deleteProduct = (req, res) => {
  let id = Number(req.params.id);

  try {
    let index = productData.findIndex((product) => product.id === id);
    productData.splice(index, 1);
    localStorage.setItem("product", JSON.stringify(productData));

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
