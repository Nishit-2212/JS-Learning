// latest code
const form = document.getElementById("create-form");
const getToken = localStorage.getItem("token");

// Adding Product
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const category = document.getElementById("category");
  const price = document.getElementById("price");
  const stock = document.getElementById("stock");
  const imageUrl = document.getElementById("imageUrl");

  const product = {
    title: title.value,
    description: description.value,
    category: category.value,
    price: price.value,
    stock: stock.value,
    imageUrl: imageUrl.value,
  };
  console.log("Product data:", product);

  try {
    let response = await fetch(
      "http://localhost:3000/api/product/create-product",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${getToken}`,
        },
        body: JSON.stringify(product),
      },
    );

    const data = await response.json();
    console.log("Server response:", data);

    window.location.href = "index.html";

    if (response.status === 201) {
      console.log("Product created successfully");
      alert(data.message);
    } else {
        console.log("Error in creating product");
      alert(data.error);
    }
    // handle response as needed
  } catch (err) {
    console.error("Error during fetch:", err);
  }
});
