const { LocalStorage } = require("node-localstorage");
const bcrypt = require("bcrypt");

let localStorage = new LocalStorage("./models");

let userData = JSON.parse(localStorage.getItem("user")) || [];
let userLastId = JSON.parse(localStorage.getItem("userId")) || 1;

const createUser = async (req, res) => {
  let user = req.body;

  try {
    
    let emailExists = userData.find((u) => u.email === user.email);
    if (emailExists) {
      return res.status(400).json({ message: "Email already exists" });
    }
    
    let userId = userLastId;
    user.id = userId;
    

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;

    userData.push(user);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("userId", JSON.stringify(++userLastId));

    console.log(userData);
    res.status(201).json({ message: "User is Created succesfully" });
  } catch (err) {
    console.log("Error in createUser:-", err);
    res.status(400).json({ message: "User is not created" });
  }
};



module.exports = { createUser };
