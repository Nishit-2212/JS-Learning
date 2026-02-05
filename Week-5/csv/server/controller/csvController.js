const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csv = require('csv-parser');
const fs = require('fs');


const csvWriter = async (req, res) => {
    console.log("In");
    const csvWriter = createCsvWriter({
        path: 'files/csv/product.csv',
        header: [
            { id: 'id', title: 'Product_id' },
            { id: 'name', title: 'Product Name' },
            { id: 'category', title: 'Category' },
            { id: 'price', title: 'Price' },
            { id: 'quantity', title: 'Quantity' }
        ]
    });
    // const records = [
    // { id: '1', name: 'Sant', category: 'fragrance', price: '30', quantity: '14' },
    // { id: '2', name: 'Sayrnt', category: 'fragrrytance', price: '3540', quantity: '1544' }
    // ];
    console.log("req.body", req.body);
    const records = req.body;

    await csvWriter.writeRecords(records)
    console.log("Succesfully writen in csv.")
    res.send({ message: "Succesfully writen in csv." })
}


const csvReader = async (req, res) => {

    const result = [];
    fs.createReadStream('files/csv/product.csv')
        .pipe(csv())
        .on('data', (data) => result.push(data))
        .on('end', () => console.log(result));

    
    res.status(200).send({
        message: "Read Succesfully",
        Result: result
    })
}




module.exports = { csvWriter, csvReader }