document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
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
            localStorage.setItem('token', getLoginResponse.token);
            console.log("Inner login status code 200");
            window.location.href = 'index.html';
        }
        alert(getLoginResponse.message);
    }
    catch (err) {
        console.log("Error in login", err)
    }

});