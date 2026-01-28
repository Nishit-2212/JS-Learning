const form = document.getElementById("form1");

const title = document.getElementById("title");
const description = document.getElementById("description");
const category = document.getElementById("category");
const price = document.getElementById("price");
const stock = document.getElementById("stock");
// ::TODO get the image URL


form.addEventListener('submit', async(e) => {
    
    e.preventDefault();
    
    const product = {
        title: title.value,
        description: description.value,
        category: category.value,
        price: price.value,
        stock: stock.value,
    };
    console.log(product);
    
    try {
        let response = await fetch("http://localhost:3000/api/product/create-product", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(product)
        });
        
        response = await response.json();

        console.log("Response", response);
        // alert("H");
        alert(response);

        
    }
    catch (err) {
        console.error("err", err)
    }
})