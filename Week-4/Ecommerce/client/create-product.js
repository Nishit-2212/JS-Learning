
// latest code
const form = document.getElementById("create-form");

// Adding Product
form.addEventListener("submit", async(e) => {
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
        },
        body: JSON.stringify(product),
      },
    );

    response = await response.json();
    console.log("Server response:", response);

     window.location.href = 'index.html';
     alert("Product Created Successfully");
    // handle response as needed
  } catch (err) {
    console.error("Error during fetch:", err);
  }
});
