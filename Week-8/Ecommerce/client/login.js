document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        const getLoginResponse = await response.json();


        if (response.status === 200) {
            console.log("Inner login status code 200");
            window.location.href = 'index.html';
        }
        alert(getLoginResponse.message);
    }
    catch (err) {
        console.log("Error in login", err)
    }

});



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


(async() => {

    const user = await getUserFromToken();
    // if(user) {
    //     globalThis.location.href = "index.html";
    //     alert("You already Login Please LogOut first to login again")
    // }
})()