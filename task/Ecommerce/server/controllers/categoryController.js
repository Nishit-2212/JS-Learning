const { LocalStorage } = require("node-localstorage");

let localStorage = new LocalStorage("./models");

let Category = JSON.parse(localStorage.getItem("category")) || [];
let CategoryLastId = JSON.parse(localStorage.getItem("categoryId")) || 1;

const addCategory = (req, res) => {
    let data = req.body;
    console.log(data.name);
    const findCategoryExist = Category.find((category) => category.name == data.name);
    if(findCategoryExist) {
        return res.status(400).json({message:"Category Already Exist"})
    }

    try {
        data.id = CategoryLastId;
        Category.push(data);
        localStorage.setItem("categoryId", JSON.stringify(++CategoryLastId));
        localStorage.setItem("category", JSON.stringify(Category));
        // console.log(Category);
        return res.status(201).json({ message: "Category added successfully" });
    } catch (err) {
        console.error("error in adding category", err);
        return res.status(400).json({ message: "Error in adding category" });
    }
}


const getAllCategory = (req,res) => {

    return res.status(200).send(JSON.stringify(Category))

}

module.exports = { addCategory, getAllCategory }


