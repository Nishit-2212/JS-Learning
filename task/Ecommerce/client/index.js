const tableBody = document.getElementById("tbody");

const authNavbar = document.getElementById("auth-nav");
const createProductNav = document.getElementById("create-product-nav");
const actionBtn = document.getElementById('actionHeader');

let user;

const limit = 3;
const page = 10;


const getUserFromToken = async () => {
  try {
    let response = await fetch("http://localhost:3000/api/auth/verifyToken", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
    });

    console.log(response.status)

    if (response.status == 401) {
      response = await fetch("http://localhost:3000/api/auth/generateToken", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.status == 400) {
        window.location.href = "login.html";
        return;
      }
      console.log("New Access Token generated");

      response = await fetch("http://localhost:3000/api/auth/verifyToken", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      });


    }

    if (response.status == 404 || response.status == 400) {
      console.log("status code ", response.status)
      return null;
    }
    const user = await response.json();
    return user;

  } catch (Err) {
    console.log("Error in Get User from Token", Err);
  }
};



const loadProducts = async (getPage) => {

  let page = getPage || 1;

  try {
    const productsData = await fetch(`http://localhost:3000/api/product/list/${getPage}`)
      .then((res) => res.json())

    console.log(page)
    console.log(productsData);

    // let editDeleteBtn =
    //   ((!user) || (user.role == "user"))
    //     ? ` <button class="addToCart"> Add To Cart </button> `
    //     : `  <button class="edit" id="editButton"> Edit </button>
    //                 <button class="delete id="deleteButton"> Delete </button>`;


    actionBtn.style.display = user ? '' : 'none';
    let editDeleteBtn = ``;
    if (user) {
      actionBtn.style.display = '';
      if (user.role == "user") {

        editDeleteBtn = ` <button class="addToCart"> Add To Cart </button> `;
      }
      else {
        editDeleteBtn = `  <button class="edit" id="editButton"> Edit </button>
                    <button class="delete id="deleteButton"> Delete </button>`;
      }
    }



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

  user = await getUserFromToken();
  await loadProducts();
  console.log(user)
  if (!user) {
    const actionBtn = document.getElementById('actionHeader');
    actionBtn.remove();
    return;
  }
  checkAdmin();
  authNavbar.innerHTML = `
            <span> Welcome !!!!! ${user.name} </span>
            <a class="nav-link" onclick=logout()>Log Out</a>
        `;
})();




const checkAdmin = async () => {
  try {

    if (user.role == "user") {
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

const logout = async () => {
  await getUserFromToken();

  const response = await fetch("http://localhost:3000/api/auth/logout", {
    credentials: "include",
  });

  console.log("logOut sucessfully", response)
  window.location.reload();

  // navigate("/index.html", { replace: true });
};

document.addEventListener("click", async (event) => {
  if (event.target.classList.contains("edit")) {
    const row = event.target.closest("tr");
    const productId = row.children[0].innerText;

    // console.log("Clicked");
    window.location.href = `create-product.html?productId=${productId}`;
  }

  if (event.target.classList.contains("delete")) {
    await getUserFromToken();
    const row = event.target.closest("tr");
    const productId = row.children[0].innerText;
    // console.log(productId);

    try {
      const response = await fetch(
        `http://localhost:3000/api/product/${productId}`,
        {
          credentials: "include",
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
