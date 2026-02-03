document.getElementById('signupForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
        username: username,
        email: email,
        password: password,
        role: "user"
    }


    try {
        const registerUser = await fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())


        console.log(registerUser);
        window.location.href = 'login.html';
        alert(registerUser.message);
    }
    catch (err) {
        alert("Error in user Signup")
    }

});