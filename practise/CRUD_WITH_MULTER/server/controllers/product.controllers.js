const { LocalStorage } = require("node-localstorage");

productLocalStorage = new LocalStorage("./schema/product");
productLastIdLocalStorage = new LocalStorage("./schema/productLastId");

const AllProducts = JSON.parse(productLocalStorage.getItem("product")) || [];
let productLastId = productLastIdLocalStorage.getItem("productLastId") || 1;

const addProduct = (req, res) => {
  try {
    const getProduct = req.body;
    console.log(getProduct);
    console.log
    const getProductImage = req.file;
    console.log('productImage',getProductImage);

    getProduct.id = productLastId++;

    AllProducts.push(getProduct);
    productLocalStorage.setItem("product", JSON.stringify(AllProducts));
    productLastIdLocalStorage.setItem("productLastId", productLastId);

    return res.status(201).json({
      success: true,
      data: getProduct,
      message: "Product Added Sucessful.",
    });
  } catch (error) {
    console.log("Error in addProduct controller", error);
    return res.status(400).json({
      success: false,
      data: null,
      message: `Somethong goes wrong in Product Adding. ${error}`,
    });
  }
};

const getProducts = (req, res) => {
  return res.status(200).json({
    success: true,
    data: AllProducts,
    message: "Product fetch Sucessful.",
  });
};

const getProductById = (req, res) => {
  try {
    const id = req.params.id;
    const product = AllProducts.find((product) => product.id == id);

    if (!product) {
      return res.status(404).json({
        success: false,
        data: null,
        message: "Product with this id not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: product,
      message: "Product found",
    });
  } catch (error) {
    console.log(`Error in get Product by id`, error);
  }
};

const updateProduct = (req, res) => {
  try {
    const updatedProduct = req.body;

    const productIndex = AllProducts.findIndex((product) => product.id == updatedProduct.id);

    if (productIndex == -1) {
      return res.status(200).json({
        success: false,
        data: null,
        message: `Product with this not found`,
      });
    }

    AllProducts[productIndex] = updatedProduct;
    productLocalStorage.setItem("product", JSON.stringify(AllProducts));

   return  res.status(200).json({
        success : true,
        data : AllProducts,
        message : `Product Updated Sucessfully`
    })
  } catch (error) {
    console.log("Something goes wrong in updating Product");
    return res.status(200).json({
      success: false,
      data: null,
      message: `Something Goes wrong in updating Product`,
      error: error,
    });
  }
};


const deleteProduct = (req,res) => {

    const id = req.params.id;
    const productIndex = AllProducts.findIndex((product) => product.id == id);
    try {
        AllProducts.splice(productIndex,1);
        productLocalStorage.setItem("product", JSON.stringify(AllProducts));
        res.json(200).json({mwssage:"deleted success"})
    }
    catch (err) {
        console.log(`Error in deleting the product ${err}`)
    }
}

module.exports = { addProduct, getProducts, getProductById, updateProduct, deleteProduct};
