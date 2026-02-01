const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const categoryInput = document.getElementById("category");
const priceInput = document.getElementById("price");
const stockInput = document.getElementById("stock");
const imageUrlInput = document.getElementById("imageUrl");

const params = new URLSearchParams(window.location.search);
const productId = params.get("productId");

(async () => {
  {
    const product = await fetch(
      `http://localhost:3000/api/product/${productId}`,
    )
      .then((res) => res.json())
      .catch((error) => console.log("Error in fetching product by ID", error));

    console.log(product);
    titleInput.value = product.title;
    descriptionInput.value = product.description;
    categoryInput.value = product.category;
    priceInput.value = product.price;
    stockInput.value = product.stock;
    imageUrlInput.value = product.images || '';
  }
})();

const form = document.getElementById("edit-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

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
    images: imageUrlInput.value,
  };

  const updateResponse = await fetch(
    "http://localhost:3000/api/product/update-product",
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    },
  )
    .then((res) => res.json())
    .catch((error) => console.log("Error in updating product", error));

    console.log(updateResponse)


    window.location.href = 'index.html';
    alert(updateResponse.message);
});
