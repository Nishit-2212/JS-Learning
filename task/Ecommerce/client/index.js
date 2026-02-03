const tableBody = document.getElementById("tbody");

const authNavbar = document.getElementById("auth-nav");
const createProductNav = document.getElementById("create-product-nav");
const getToken = localStorage.getItem("token");

const getUserFromToken = async () => {
  if (!getToken) {
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/auth/verifyToken", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${getToken}`,
      },
    });
    const user = await response.json();
    return user;
  } catch (Err) {
    console.log("Error in Get User from Token", Err);
  }
};

const loadProducts = async () => {

  try {
    const productsData = await fetch("http://localhost:3000/api/product/list")
      .then((res) => res.json())
      .catch((error) => console.log("Error in fetching products", error));

    console.log(productsData);

    let user = await getUserFromToken();
    // console.log(user)

    let editDeleteBtn =
      !user || user.role == "user"
        ? ` `
        : `  <button class="edit" id="editButton"> Edit </button>
                    <button class="delete id="deleteButton"> Delete </button>`;

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
                    <img src="${da.imageUrl}" alt="Image is not loaded" height="100" width="100">
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
                    ${editDeleteBtn}
                </td>
            `;
      tableBody.appendChild(row);
    });
  }
  catch (err) {
    console.log("Error in fetching the product", err)
  }


};

(async () => {
  await loadProducts();

  if (getToken) {
    checkAdmin();
    authNavbar.innerHTML = `
            <span> Welcome !!!!! </span>
            <a class="nav-link" onclick=logout()>Log Out</a>
        `;
  }
})();

const checkAdmin = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/auth/verifyToken", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${getToken}`,
      },
    });
    const user = await response.json();

    console.log("get status and role", response.status, user.role);

    if (response.status != 200 || user.role == "user") {
      createProductNav.innerHTML = ``;
      return;
    }

    createProductNav.innerHTML = `
        <a class="nav-link" href="create-product.html">Add Product</a>
        <a class="nav-link" href="create-category.html">Add Category</a>
        `;
  } catch (err) {
    console.log("Error in verify token", err);
  }
};

const logout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};

document.addEventListener("click", async (event) => {
  if (event.target.classList.contains("edit")) {
    const row = event.target.closest("tr");
    const productId = row.children[0].innerText;

    // console.log("Clicked");
    window.location.href = `create-product.html?productId=${productId}`;
  }

  if (event.target.classList.contains("delete")) {
    const row = event.target.closest("tr");
    const productId = row.children[0].innerText;
    // console.log(productId);

    try {
      const response = await fetch(
        `http://localhost:3000/api/product/${productId}`,
        {
          method: "DELETE",
        },
      )
        .then((res) => res.json())
        .catch((error) => console.log("Error in deleting product", error));

      console.log(response.message);

      location.reload();
      alert(response.message);
    }
    catch (err) {
      console.log("Error in deleting the product", err)
    }
  }
});
