const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const categoryInput = document.getElementById("category");
const priceInput = document.getElementById("price");
const stockInput = document.getElementById("stock");
const imageUrlInput = document.getElementById("imageUrl");

const form = document.getElementById("create-form");

const securePage = async () => {
  try {

    let response = await fetch("http://localhost:3000/api/auth/verifyToken", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (response.status == 401) {
      response = await fetch("http://localhost:3000/api/auth/generateToken", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.status == 400) {
        window.location.href = "login.html";
        return;
      }
      console.log("New Access Token generated");

      response = await fetch("http://localhost:3000/api/auth/verifyToken", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      });


    }

    if (response.status == 404) {
      window.location.href = "login.html";
      return;
    }
    const user = await response.json();

    if (user.role == 'user') {
      window.location.href = "index.html";
      alert("Sorry you can't access this site");
      return
    }
  } catch (err) {
    console.log("Error in verify token", err);
  }
};

const fetchCategories = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/category", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const categories = await response.json();
    console.log("categories:", categories);
    const categorySelect = document.getElementById("category");
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category.name;
      option.textContent = category.name;
      categorySelect.appendChild(option);
    });
  } catch (err) {
    console.log("Error fetching categories:", err);
  }
};

const changeSettings = async () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("productId");

  if (!productId) {
    return;
  }

  const formTitle = document.getElementById("form-title");
  formTitle.textContent = "Edit Product";

  const button = document.getElementById("btn");
  button.innerHTML = `<button onclick="updateProduct()">Update Product</button>`;

  try {
    const product = await fetch(`http://localhost:3000/api/product/${productId}`)
      .then((res) => res.json())

    console.log(product);
    titleInput.value = product.title;
    descriptionInput.value = product.description;
    categoryInput.value = product.category;
    priceInput.value = product.price;
    stockInput.value = product.stock;
    imageUrlInput.value = product.imageUrl || '';
  }
  catch (err) {
    console.log("Error in fetching the product by id", err)
  }
};

(async () => {
  await securePage();
  await fetchCategories();
  await changeSettings();
})();

const updateProduct = async () => {
  await securePage();
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("productId");

  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");
  const categoryInput = document.getElementById("category");
  const priceInput = document.getElementById("price");
  const stockInput = document.getElementById("stock");
  const imageUrlInput = document.getElementById("imageUrl");

  const updatedProduct = {
    id: Number(productId),
    title: titleInput.value,
    description: descriptionInput.value,
    category: categoryInput.value,
    price: priceInput.value,
    stock: stockInput.value,
    imageUrl: imageUrlInput.value,
  };

  try {
    const updateResponse = await fetch(
      "http://localhost:3000/api/product/update-product",
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      },
    )
      .then((res) => res.json())

    console.log(updateResponse);

    window.location.href = "index.html";
    alert(updateResponse.message);
    return;
  } catch (err) {
    console.log("Error in updating product", err);
  }
};

const setImageCategoryWise = (category) => {

  switch (category.toLowerCase()) {
    case "beauty":
      return "https://plus.unsplash.com/premium_photo-1661769021743-7139c6fc4ab9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXR5JTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D";
    case "fragrances":
      return "https://pebblely.com/ideas/perfume/black-white.jpg";
    case "furniture":
      return "https://img.freepik.com/free-psd/elegant-armchair-coffee-table-set-modern-comfort-style_191095-80516.jpg?semt=ais_hybrid&w=740&q=80";
    case "groceries":
      return "https://www.shutterstock.com/image-photo/indoor-photo-passover-products-shopping-260nw-2600073841.jpg";
    default:
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdINGRnkX6PiG3W8O4DvHFUO5Z0nSPXmfVWg&s";
  }
};

// Adding Product
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  await securePage();

  const checkBtn = document.getElementById('submitBtn').value;
  console.log(checkBtn);

  if (checkBtn !== 'createProduct') {
    return;
  }

  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const category = document.getElementById("category").value.trim();
  const price = document.getElementById("price").value.trim();
  const stock = document.getElementById("stock").value.trim();
  let imageUrl = document.getElementById("imageUrl").value.trim();

  if (price <= 0 || stock <= 0) {
    alert("Price and Stock must be Positive Values");
    return;
  }

  if (imageUrl === "") {
    imageUrl = setImageCategoryWise(category);
  }

  const product = {
    title: title,
    description: description,
    category: category,
    price: price,
    stock: stock,
    imageUrl: imageUrl,
  };
  console.log("Product data:", product);

  try {
    let response = await fetch(
      "http://localhost:3000/api/product/create-product",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(product),
      },
    );

    const data = await response.json();
    console.log("Server response:", data);

    window.location.href = "index.html";

    // if (response.status === 201) {
    //   console.log("Product created successfully");
    //   alert(data.message);
    // } else {
    //   console.log("Error in creating product");
    //   alert(data.error);
    // }

    response.status === 201 ? alert(data.message) : alert(data.error);
  } catch (err) {
    console.error("Error during fetch:", err);
  }
});
