const securePage = async () => {
    try {

        let response = await fetch("http://localhost:3000/api/auth/verifyToken", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-type": "application/json",
            },
        });

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

        if (response.status == 404) {
            window.location.href = "login.html";
            return;
        }
        const user = await response.json();
        if (user.role == 'user') {
            window.location.href = "index.html";
            alert("Sorry you can't access this site");
            return;
        }
        return;
    } catch (err) {
        console.log("Error in verify token", err);
    }
};

(async () => {
    await securePage();
})();


console.log("Hello")
const form = document.getElementById("edit-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    await securePage();

    const category = document.getElementById('category').value.trim();

    if (!category) {
        alert("Please Enter a category");
        return;
    }

    const englishOnlyRegex = /^[a-zA-Z]+$/;

    const categoryCheck = englishOnlyRegex.test(category);

    if (!categoryCheck) {
        alert("Please Enter only Alphabet in Category name");
        return;
    }

    const categoryObject = {
        name: category
    }

    try {
        const response = await fetch("http://localhost:3000/api/category/create-category", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(categoryObject),
        });
        const data = await response.json();
        console.log("Server response:", data);

        window.location.href = "index.html";

        if (response.status === 201) {
            console.log("Category Added successfully");
            alert(data.message);
            return;
        } else {
            console.log("Error in creating category");
            alert(data.message);
            return;
        }
    }
    catch (err) {
        console.log("Error in Adding Category");
    }
});    

