// Parse the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');

// Fetch the product details (dummy data for now)
const product = {
    id: productId,
    name: "Sample Product",
    price: 100
};

// Populate the form with the product details
document.getElementById('product-name').value = product.name;
document.getElementById('product-price').value = product.price;

// Handle form submission
document.getElementById('edit-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const updatedProduct = {
        id: productId,
        name: document.getElementById('product-name').value,
        price: document.getElementById('product-price').value
    };

    // Save the updated product details (for now, log to console)
    console.log('Updated Product:', updatedProduct);

    // Redirect back to the main page
    window.location.href = 'index.html';
});