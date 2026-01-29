const { LocalStorage } = require('node-localstorage')
const bcrypt = require('bcrypt');

let localStorage = new LocalStorage('./models')

let userData = JSON.parse(localStorage.getItem("user")) || [];
let userLastId = JSON.parse(localStorage.getItem("userId")) || 1;


const createUser = async(user) => {

    try{
        let userId = userLastId;
        user.id = userId;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(user.password,salt)
        user.password = hashedPassword;

        userData.push(user);
        localStorage.setItem("user",JSON.stringify(userData));
        localStorage.setItem("userId",JSON.stringify(++userLastId));

        console.log(userData);
    }
    catch (err) {
        console.log("Error in createUser:-",err);
    }
}



module.exports = { createUser }