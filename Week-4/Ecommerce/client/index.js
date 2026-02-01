const tableBody = document.getElementById('tbody');






const renderData = async () => {

    const productsData = await fetch("http://localhost:3000/api/product/list")
        .then(res => res.json())
        .catch(error => console.log("Error in fetching products", error))

    console.log(productsData);


    productsData.map((da) => {

        const row = document.createElement("tr");
        row.innerHTML = `
                <td style="display: none;">${da.id}</td>   
                <td>
                    ${da.title}
                </td>
                <td>
                    ${da.category}
                </td>
                <td>
                    <img src="${da.images}" alt="Image is not loaded" height="100" width="100">
                </td>
                <td>
                    ${da.description}
                </td>
                <td>
                    ${da.price}
                </td>
                <td>
                    ${da.stock}
                </td>
                <td>
                    <button class="addToCart"> Add To Cart </button>
                    <button class="edit" id="editButton"> Edit </button>
                    <button class="delete id="deleteButton"> Delete </button>
                </td>
            `
        tableBody.appendChild(row);
    }
    )

}


renderData()







document.addEventListener('click', async function(event) {

    if (event.target.classList.contains('edit')) {
        const row = event.target.closest('tr');
        const productId = row.children[0].innerText;


        // console.log("Clicked");
        window.location.href = `edit-product.html?productId=${productId}`;
    }

    if (event.target.classList.contains('delete')) {
        const row = event.target.closest('tr');
        const productId = row.children[0].innerText;
        // console.log(productId);

        const response = await fetch(`http://localhost:3000/api/product/${productId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .catch(error => console.log("Error in deleting product", error));   

        console.log(response.message);

        location.reload();
        alert(response.message);
    }
});