
const form = document.getElementById("create-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const stock = document.getElementById("stock").value;


  const product = {    title: title,
    description: description,
    price: Number(price),
    stock: Number(stock),
  };

  console.log("Product data:", product);

  const response = await fetch("http://localhost:3000/api/product",{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(product)
  })

  console.log(typeof price);


});