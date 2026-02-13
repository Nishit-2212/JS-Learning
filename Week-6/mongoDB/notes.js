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

// $rename

// $addToSet :- add a unique value to an array



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



// aggregate function



// product collections
[
  { _id: ObjectId('698c33191ed6c59fac8ce5b0'), item: 'Colgate' },
  { _id: 5, item: 'Colgate' },
  { _id: 6, item: 'Colgate' },
  {
    _id: ObjectId('65f100000000000000000001'),
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    category: 'Electronics',
    price: 1199,
    currency: 'USD',
    stock: 45,
    tags: [ 'smartphone', 'ios', 'premium' ],
    specifications: {
      storage: '256GB',
      color: 'Titanium Blue',
      display: { size: '6.1 inch', resolution: '2556x1179', type: 'OLED' },
      processor: 'A17 Pro'
    },
    variants: [
      { storage: '128GB', price: 999, stock: 30 },
      { storage: '512GB', price: 1399, stock: 15 }
    ],
    supplier: {
      name: 'Tech Distributors Inc.',
      contact: { email: 'supply@techdistributors.com', phone: '+1-202-555-0188' }
    },
    warehouseLocations: [
      { city: 'New York', quantity: 20 },
      { city: 'Los Angeles', quantity: 25 }
    ],
    ratings: [
      { userId: 101, rating: 5, review: 'Excellent!' },
      { userId: 102, rating: 4, review: 'Great phone but expensive.' }
    ],
    isActive: true,
    createdAt: ISODate('2024-01-10T10:00:00.000Z')
  },
  {
    _id: ObjectId('65f100000000000000000002'),
    name: 'Samsung Galaxy S24',
    brand: 'Samsung',
    category: 'Electronics',
    price: 999,
    currency: 'USD',
    stock: 60,
    tags: [ 'smartphone', 'android' ],
    specifications: {
      storage: '256GB',
      color: 'Phantom Black',
      display: { size: '6.2 inch', resolution: '2340x1080', type: 'AMOLED' },
      processor: 'Snapdragon 8 Gen 3'
    },
    variants: [
      { storage: '128GB', price: 899, stock: 35 },
      { storage: '512GB', price: 1199, stock: 25 }
    ],
    supplier: {
      name: 'Global Tech Supplies',
      contact: { email: 'contact@globaltech.com', phone: '+1-303-555-0199' }
    },
    warehouseLocations: [
      { city: 'Chicago', quantity: 30 },
      { city: 'Houston', quantity: 30 }
    ],
    ratings: [ { userId: 103, rating: 5, review: 'Best Android phone!' } ],
    isActive: true,
    createdAt: ISODate('2024-02-05T12:00:00.000Z')
  },
  {
    _id: ObjectId('65f100000000000000000003'),
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    category: 'Accessories',
    price: 399,
    currency: 'USD',
    stock: 80,
    tags: [ 'headphones', 'noise-cancelling', 'wireless' ],
    specifications: { type: 'Over-Ear', batteryLife: '30 hours', color: 'Black' },
    variants: [],
    supplier: {
      name: 'Audio World Ltd.',
      contact: { email: 'sales@audioworld.com', phone: '+1-404-555-0111' }
    },
    warehouseLocations: [ { city: 'Seattle', quantity: 50 }, { city: 'Denver', quantity: 30 } ],
    ratings: [],
    isActive: true,
    createdAt: ISODate('2024-03-01T09:30:00.000Z')
  },
  {
    _id: ObjectId('65f100000000000000000004'),
    name: 'Dell XPS 15',
    brand: 'Dell',
    category: 'Computers',
    price: 1899,
    currency: 'USD',
    stock: 25,
    tags: [ 'laptop', 'windows', 'premium' ],
    specifications: {
      ram: '16GB',
      storage: '1TB SSD',
      processor: 'Intel i7',
      display: { size: '15.6 inch', resolution: '4K', type: 'IPS' }
    },
    variants: [ { ram: '32GB', price: 2199, stock: 10 } ],
    supplier: {
      name: 'Enterprise IT Supplies',
      contact: { email: 'info@enterpriseit.com', phone: '+1-212-555-0147' }
    },
    warehouseLocations: [
      { city: 'San Francisco', quantity: 15 },
      { city: 'Boston', quantity: 10 }
    ],
    ratings: [ { userId: 104, rating: 4, review: 'Powerful but pricey.' } ],
    isActive: true,
    createdAt: ISODate('2024-01-20T08:00:00.000Z')
  },
  {
    _id: ObjectId('65f100000000000000000005'),
    name: 'Nike Air Max 270',
    brand: 'Nike',
    category: 'Footwear',
    price: 150,
    currency: 'USD',
    stock: 120,
    tags: [ 'shoes', 'sports', 'men' ],
    specifications: { sizeRange: '7-12', color: 'White/Black', material: 'Mesh' },
    variants: [ { size: 9, stock: 20 }, { size: 10, stock: 25 } ],
    supplier: {
      name: 'Fashion Wholesale Co.',
      contact: { email: 'orders@fashionwholesale.com', phone: '+1-310-555-0101' }
    },
    warehouseLocations: [ { city: 'Miami', quantity: 60 }, { city: 'Atlanta', quantity: 60 } ],
    ratings: [],
    isActive: true,
    createdAt: ISODate('2024-02-15T11:45:00.000Z')
  },
  {
    _id: ObjectId('65f100000000000000000006'),
    name: 'Adidas Ultraboost 22',
    brand: 'Adidas',
    category: 'Footwear',
    price: 180,
    currency: 'USD',
    stock: 90,
    tags: [ 'shoes', 'running' ],
    specifications: { sizeRange: '6-13', color: 'Core Black', material: 'Primeknit' },
    variants: [],
    supplier: {
      name: 'Global Sports Supply',
      contact: { email: 'support@globalsports.com', phone: '+1-702-555-0155' }
    },
    warehouseLocations: [ { city: 'Dallas', quantity: 50 }, { city: 'Phoenix', quantity: 40 } ],
    ratings: [ { userId: 105, rating: 5, review: 'Very comfortable!' } ],
    isActive: false,
    createdAt: ISODate('2024-03-10T14:00:00.000Z')
  },
  {
    _id: ObjectId('698f1d85c7d4734fa28ce5b7'),
    name: 'MacBook Pro M3',
    category: 'Computer',
    specifications: { sizeRange: '6-13', color: 'Black', material: 'Primeknit' },
    warehouseLocations: [ { city: 'Miami', quantity: 60 }, { city: 'Atlanta', quantity: 60 } ]
  }
]
