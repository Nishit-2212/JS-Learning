require('dotenv').config();
const express = require('express');
const JSEncrypt = require('jsencrypt');
const fs = require('fs');


const app = express();

app.use(express.json())

const PORT = process.env.PORT;

app.post('/encryptData', (req, res) => {

    try {
        const { userId, age } = req.body;
        const timestamp = new Date();
        timestamp.setDate(timestamp.getDate() + 1);

        const crypt = new JSEncrypt();

        const publicKey = fs.readFileSync('./public.pem', 'utf-8')
        crypt.setPublicKey(publicKey);

        const data = {
            userId: userId,
            age: age,
            timestamp: timestamp
        }

        const encrypted = crypt.encrypt(JSON.stringify(data))

        return res.status(200).json({
            "encryptedData": encrypted
        })
    }
    catch (Error) {
        console.error("Error", Error)
        return res.status(400).json({
            message: "Something Wrong while encrypt the data"
        })
    }
})


app.post('/decryptData', (req, res) => {

    try {
        const { encryptedData } = req.body;
        if (!encryptedData) {
            return res.status(404).json({
                message: "Please provide encryptedData"
            })
        }

        const crypt = new JSEncrypt();
        const privateKey = fs.readFileSync('./private.pem', 'utf-8')
        crypt.setPrivateKey(privateKey);

        console.log("encryptesData", encryptedData)
        const decrypted = JSON.parse(crypt.decrypt(encryptedData));

        const presentDate = new Date();
        const {timestamp} = decrypted;
        console.log("timestamps",timestamp);

        if(presentDate > timestamp) {
            return res.status(400).json({
                message:"You encrypted data is expired"
            })
        }

        console.log('Data', decrypted)
        res.status(200).json({
            Data: decrypted
        })
    }
    catch (err) {

        console.error("Error in decription", err);
        return res.status(400).json({
            message: "Error in decryption"
        })
    }
})





app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})