const { LocalStorage } = require("node-localstorage");

let localStorage = new LocalStorage("./models");

let productData = JSON.parse(localStorage.getItem("product")) || [];
let productLastId = JSON.parse(localStorage.getItem("productId")) || 1;

const addProduct = (req, res) => {
  let data = req.body;
  console.log(data);

  try {
    data.id = productLastId;
    productData.push(data);
    localStorage.setItem("productId", JSON.stringify(++productLastId));
    localStorage.setItem("product", JSON.stringify(productData));
    console.log(productData);
    res.status(201).json({message: "Product added successfully" });
  } catch (err) {
    console.error("error in adding product", err);
    res.status(400).json({ message: "Error in adding product" });
  }
};

const fetchProduct = (req, res) => {
  try {
    console.log("Inner Load Product");
    res.status(200).json(productData);
  } catch (err) {
    console.log("Error in fetching", err);
    res.status(400).json({ message: "Error in fetching products" });
  }
};

const getProductById = (req, res) => {
  try {
    console.log("pronting the product",req.params.id);
    let id = Number(req.params.id);
    const product = productData.find((p) => p.id === id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    console.log(product);
    res.status(200).json(product);
  } catch (err) {
    console.log("Error in get Product", err);
    res.status(400).json({ message: "Error in fetching product by ID" });
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
      res.status(400).json({ message: "Product Not found" });
    }

    productData[index] = updatedProduct;

    localStorage.setItem("product", JSON.stringify(productData));
    res.status(200).json({ message: "Product Updated Succesfully" });
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

    res.status(200).json({ message: "Product deleted Successfully" });
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
