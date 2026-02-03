const form = document.getElementById("edit-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const category = document.getElementById('category').value;

    if (!category) {
        alert("Please Enter a category");
        return;
    }

    const categoryObject = {
        name: category
    }

    try {
        const response = await fetch("http://localhost:3000/api/category/create-category", {
            method: "POST",
            credentials : "include",
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
        } else {
            console.log("Error in creating category");
            alert(data.error);
        }
    }
    catch (err) {
        console.log("Error in Adding Category");

    }
});
