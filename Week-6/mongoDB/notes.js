// show dbs
// use internship (create db)
// internship > db.createCollection('product') (create a collection)
// internship > db.product.drop() (drop the collection)


// internship > show collections
// internship > db.product.drop()


// Insert
// internship > db.product.insertOne({name,"colgate"});
// internship > db.product.inserMany([{},{}])


//find
// internship > db.product.find();
// internship > db.product.findOne()

// cars > db.cars.find({},{model:1})
// cars > db.cars.find({},{model:1,_id:0})
// cars > db.cars.find({maker:'Honda'})    // this is also work in array value
// cars > db.cars.find({'engine.type':'ABS'})



// update
// cars > db.cars.updateOne({model:'Nexon'},{$set{color:'Red'}})

// if you want to update and insert in array value
// cars > db.cars.updateOne({model:'Nexon'},{$push{features:'Heated Seats'}})   

// if you want to update and delete/pull in array value
// cars > db.cars.updateOne({model:'Nexon'},{$pull{features:'Heated Seats'}})  

// if you want to push multiple value in array
// cars > db.cars.updateMany({model:'Nexon',{$push:{features:{$each:["Wireless Charging","Voice Control"]}}}})

// remove field
// cars > db.cars.updateOne({model:'Nexon'},{$unset:{color:""}})

// cars > db.cars.updateMany({fuel_type:'Diesel'},{$set:{alloys:'true'}})

// color field in each document
// cars > db.cars.updateMany({},{$set:{color:"Blue"}})


// if the document is not exist so you want to insert new document use upsert for that
// cars > db.cars.updateMany({maker:'BMW'},{$set:{engine:'turbo'}},{upsert:true}) 




// delete
// cars > db.cars.deleteOne({maker:'BMW'})
// cars > db.cars.deleteMany({maker:'BMW'})





// Operators

// Comparison Operator
// $eq,$lt,$gt,$lte,$gte,$ne

// $in, $nin

// Logical Operator
// $and,$or,$nor

// element operator
// $exist
// {age:{$exist:true}}
// $type  
// $type filter the content based on BASON type like string,bool, etc..  
// and also this can be useful to find field with null values  example:- db.cars.find({model:{$type:'null'}})


// $all :- return all document that match the pattern like
// db.collection.find({hobbies:{$all:["play","read"]}})
// $size :- return all document that match specified array size
// db.collection.find({hobbies:{$size:4}})

// $eleMatch
// when you want to sortlist data in array of object [{ },{ },{ }]


// $inc


// $addToSet :- add a unique value to an array

// $expr :- db.products.find({$expr: { $gt : [{$size:'$variants'},1] }},{variants:1,name:1})


// cursor
// Count
// find().count()
// Sort
// find().sort({"name":1})  // -1 for descending order
// Limit
// find().limit(2)
// Skip
// find().skip(3)




// aggregate function












// Note:-
// 1.
// If your collection name includes special characters,
// such as the underscore character, or begins with numbers, 
// then to access the collection use the db.getCollection() method in mongosh


// dought
// db.collection.explain()



//sample data

// cars collection

// [
//   {
//     _id: ObjectId('698ebf6fc7d4734fa28ce5b1'),
//     maker: 'Tata',
//     model: 'Nexon',
//     fuel_type: 'Petrol',
//     transmission: 'Automatic',
//     engine: { type: 'Turbocharged', cc: 1199, torque: '170 Nm' },
//     features: [ 'Touchscreen', 'Reverse Camera', 'Bluetooth Connectivity' ],
//     sunroof: false,
//     airbags: 2
//   },
//   {
//     _id: ObjectId('698ec0d4c7d4734fa28ce5b2'),
//     maker: 'Hyundai',
//     model: 'Creta',
//     fuel_type: 'Diesel',
//     transmission: 'Manual',
//     engine: { type: 'Naturally Aspirated', cc: 1493, torque: '250 Nm' },
//     features: [
//       'Sunroof',
//       'Leather Seats',
//       'Wireless Charging',
//       'Ventilated Seats',
//       'Bluetooth'
//     ],
//     sunroof: true,
//     airbags: 6
//   },
//   {
//     _id: ObjectId('698ec0d4c7d4734fa28ce5b3'),
//     maker: 'Maruti Suzuki',
//     model: 'Baleno',
//     fuel_type: 'Petrol',
//     transmission: 'Automatic',
//     engine: { type: 'Naturally Aspirated', cc: 1197, torque: '113 Nm' },
//     features: [ 'Projector Headlamps', 'Apple CarPlay', 'ABS' ],
//     sunroof: false,
//     airbags: 2
//   },
//   {
//     _id: ObjectId('698ec0d4c7d4734fa28ce5b4'),
//     maker: 'Mahindra',
//     model: 'XUV500',
//     fuel_type: 'Diesel',
//     transmission: 'Manual',
//     engine: { type: 'Turbocharged', cc: 2179, torque: '360 Nm' },
//     features: [ 'All-Wheel Drive', 'Navigation System', 'Cruise Control' ],
//     sunroof: true,
//     airbags: 6
//   },
//   {
//     _id: ObjectId('698ec0d4c7d4734fa28ce5b5'),
//     maker: 'Honda',
//     model: 'City',
//     fuel_type: 'Petrol',
//     transmission: 'Automatic',
//     engine: { type: 'Naturally Aspirated', cc: 1498, torque: '145 Nm' },
//     features: [ 'Keyless Entry', 'Auto AC', 'Multi-angle Rearview Camera' ],
//     sunroof: false,
//     airbags: 4
//   }
// ]



// Q1. find the car with engine more that 1400cc
// cars > db.cars.find({"engine.cc":{$gt:1400}})

// Q2. find the cars with engine having 1499 and 2179 cc
// cars > db.cars.find({"engine.cc":{$in:[1498,2179]}})
// or
// cars > db.cars.find({"engine.cc":{$in:[1498,2179,2034]}})

// Q3. i want a car which is Diesel, Sunroof & Turbocharged Engine
// cars > db.cars.find( { $and: [{ fuel_type: 'Diesel' }, { sunroof: true }, { "engine.type": 'Turbocharged' }] });
// or    db.cars.find( { $or: [{ fuel_type: 'Diesel' }, { sunroof: true }] });
// nor    db.cars.find( { $nor: [{ fuel_type: 'Diesel' }, { sunroof: true }] });

// Q4. i want list string type model
// db.cars.find({model:{$type:"string"}})

// Q5. i want to print all model where the null value
// db.cars.find({model:{$type:"null"}})

// Q6. list the all car which have exact 4 features
// db.cars.find({features:{$size:3}})

// Q7.





// aggregate functions

// $group
// $match
// $project
// $sort
// $limit
// $unwind
// $lookup
// $addFields
// $count
// $skip




