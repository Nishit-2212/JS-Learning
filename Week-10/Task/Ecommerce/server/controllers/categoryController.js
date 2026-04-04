const categoryModel = require('../models/category');
const categoryCounterModel = require('../models/categoryCounter')


const addCategory = async(req, res) => {
    let data = req.body;
    console.log("data.name",data.name);

    const getCategory = await categoryModel.findOne({name:data.name})
    if(getCategory) {
        return res.status(400).json({message:"Category Already Exist"})
    }

    try {
        const categoryLastId = await categoryCounterModel.findOne();
        console.log("categoryLastId",categoryLastId)

        const newCategory = new categoryModel({
            categoryId: categoryLastId.categoryId,
            name: data.name
        })

        await newCategory.save();

        await categoryCounterModel.findOneAndUpdate(
              {},
              { $inc: { categoryId: 1 } },
              { new: true }
            );

        return res.status(201).json({ message: "Category added successfully" });
    } catch (err) {
        console.error("error in adding category", err);
        return res.status(400).json({ message: "Error in adding category" });
    }
}


const getAllCategory = async(req,res) => {

    const getAllCategory = await categoryModel.find()
    return res.status(200).send(getAllCategory)

}

module.exports = { addCategory, getAllCategory }


