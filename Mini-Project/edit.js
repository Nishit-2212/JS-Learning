const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');

const products = JSON.parse(localStorage.getItem('products'));
const product = products.find(p => p.id == productId);

document.getElementById('product-title').value = product.title;
document.getElementById('product-description').value = product.description;
document.getElementById('product-category').value = product.category;
document.getElementById('product-price').value = product.price;
document.getElementById('product-stock').value = product.stock;
document.getElementById('product-brand').value = product.brand;
document.getElementById('product-image').value = product.images;

document.getElementById('edit-form').addEventListener('submit', function(event) {
        event.preventDefault();


        const updatedTitle = document.getElementById('product-title').value;
        const updatedDescription = document.getElementById('product-description').value;
        const updatedCategory = document.getElementById('product-category').value;
        const updatedPrice = document.getElementById('product-price').value;
        const updatedStock = parseInt(document.getElementById('product-stock').value, 10);
        const updatedBrand = document.getElementById('product-brand').value;
        const updatedImage = document.getElementById('product-image').value;

        const updatedProduct = {
            id: productId,
            title: updatedTitle,
            description: updatedDescription,
            category: updatedCategory,
            price: updatedPrice,
            stock: updatedStock,
            brand: updatedBrand,
            images: [updatedImage]
        };

        const index = products.findIndex(p => p.id == productId);

        if (index !== -1) {
            products[index] = updatedProduct;
            localStorage.setItem('products', JSON.stringify(products));
        }

        console.log('Updated Product:', updatedProduct);

        window.location.href = 'index.html';
    });





    console.log(productId);