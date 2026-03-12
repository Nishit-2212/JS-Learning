const bcrypt = require("bcrypt");


const userModel = require('../models/user')
const userCounter = require('../models/userCounter')

const createUser = async (req, res) => {
  let user = req.body;
  console.log("User data from re.body", user)

  try {

    const emailExists = await userModel.findOne({ email: user.email })
    console.log(emailExists);
    if (emailExists) {
      return res.status(400).json({ message: "Email already exists please login" });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;

    const userId = await userCounter.findOne();
    const userLastId = userId.toObject();
    console.log("Last userid ocjext", userLastId);
    console.log("Last user id", userLastId.userId);
    console.log("Last user id", typeof (userLastId._id));

    
    
    const newUser = new userModel({
      userId: userLastId.userId,
      username: user.username,
      email: user.email,
      password: user.password
    })

    await newUser.save();
    
    // increment id by 1
    await userCounter.findOneAndUpdate(
      {},
      { $inc: { userId: 1 } },
      { new: true }
    );

    // console.log(newUser);
    return res.status(201).json({
      message: "User is Created succesfully",
      User: newUser
    });
  } catch (err) {
    console.log("Error in createUser:-", err);
    return res.status(400).json({ message: "User is not created" });
  }
};



module.exports = { createUser };
