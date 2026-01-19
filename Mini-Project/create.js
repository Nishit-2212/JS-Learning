
const form = document.getElementById("create-form");


// Adding Product
form.addEventListener("submit", (e) => {

    e.preventDefault()

    const Title = document.getElementById('product-title').value;
    const Description = document.getElementById('product-description').value;
    const Category = document.getElementById('product-category').value;
    const Price = parseInt(document.getElementById('product-price').value)
    const Stock = parseInt(document.getElementById('product-stock').value)
    const Brand = document.getElementById('product-brand').value;
    const Image = document.getElementById('product-image').value;



    console.log("Hello")
    // console.log(Title,Description,Category,Price,Stock,Brand,Image)
    const getId = JSON.parse(localStorage.getItem("id"));
    const getProduct = JSON.parse(localStorage.getItem("products"));

    const createProduct = {
        id: getId + 1,
        title: Title,
        description: Description,
        category: Category,
        price: Price,
        stock: Stock,
        brand: Brand,
        images: Image
    };

    console.log(typeof getProduct)
    getProduct.push(createProduct);

    console.log("End")

    localStorage.setItem("id", JSON.stringify(getId + 1))
    localStorage.setItem("products", JSON.stringify(getProduct))


    window.location.href = 'index.html';

})