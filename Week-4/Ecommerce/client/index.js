const tableBody = document.getElementById('tbody');


const loadData = async () => {

    const productData = await fetch("http://localhost:3000/api/product/list")
        .then(res => res.json())
        .catch(error => console.log("Error in fetching products", error))

    console.log(productData);

    let tr = document.createElement("tr");
    tr.setAttribute("id", "tr1")

    // let size = Object.keys(product).length;

    for (const product of productData) {

        let productTitle = product.title;

        let td = document.createElement("td");
        let value = document.createTextNode(product.title);
        td.appendChild(value)
        document.getElementById("tr1").appendChild(td);
    }


    // loop this
    // let tr = document.createElement("tr");
    // tr.setAttribute("id","tr1")


    // let td = document.createElement("td");
    // let value = document.createTextNode("This is my value");
    // td.appendChild(value)
    // // let newTr = document.getElementById("tr1");
    // tr.appendChild(td);
    // tableBody.appendChild(tr);  





}

loadData()