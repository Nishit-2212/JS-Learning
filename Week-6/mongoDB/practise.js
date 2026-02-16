// product collection
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
        tags: ['smartphone', 'ios', 'premium'],
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
        tags: ['smartphone', 'android'],
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
        ratings: [{ userId: 103, rating: 5, review: 'Best Android phone!' }],
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
        tags: ['headphones', 'noise-cancelling', 'wireless'],
        specifications: { type: 'Over-Ear', batteryLife: '30 hours', color: 'Black' },
        variants: [],
        supplier: {
            name: 'Audio World Ltd.',
            contact: { email: 'sales@audioworld.com', phone: '+1-404-555-0111' }
        },
        warehouseLocations: [{ city: 'Seattle', quantity: 50 }, { city: 'Denver', quantity: 30 }],
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
        tags: ['laptop', 'windows', 'premium'],
        specifications: {
            ram: '16GB',
            storage: '1TB SSD',
            processor: 'Intel i7',
            display: { size: '15.6 inch', resolution: '4K', type: 'IPS' }
        },
        variants: [{ ram: '32GB', price: 2199, stock: 10 }],
        supplier: {
            name: 'Enterprise IT Supplies',
            contact: { email: 'info@enterpriseit.com', phone: '+1-212-555-0147' }
        },
        warehouseLocations: [
            { city: 'San Francisco', quantity: 15 },
            { city: 'Boston', quantity: 10 }
        ],
        ratings: [{ userId: 104, rating: 4, review: 'Powerful but pricey.' }],
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
        tags: ['shoes', 'sports', 'men'],
        specifications: { sizeRange: '7-12', color: 'White/Black', material: 'Mesh' },
        variants: [{ size: 9, stock: 20 }, { size: 10, stock: 25 }],
        supplier: {
            name: 'Fashion Wholesale Co.',
            contact: { email: 'orders@fashionwholesale.com', phone: '+1-310-555-0101' }
        },
        warehouseLocations: [{ city: 'Miami', quantity: 60 }, { city: 'Atlanta', quantity: 60 }],
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
        tags: ['shoes', 'running'],
        specifications: { sizeRange: '6-13', color: 'Core Black', material: 'Primeknit' },
        variants: [],
        supplier: {
            name: 'Global Sports Supply',
            contact: { email: 'support@globalsports.com', phone: '+1-702-555-0155' }
        },
        warehouseLocations: [{ city: 'Dallas', quantity: 50 }, { city: 'Phoenix', quantity: 40 }],
        ratings: [{ userId: 105, rating: 5, review: 'Very comfortable!' }],
        isActive: false,
        createdAt: ISODate('2024-03-10T14:00:00.000Z')
    },
    {
        _id: ObjectId('698f1d85c7d4734fa28ce5b7'),
        name: 'MacBook Pro M3',
        category: 'Computer',
        specifications: { sizeRange: '6-13', color: 'Black', material: 'Primeknit' },
        warehouseLocations: [{ city: 'Miami', quantity: 60 }, { city: 'Atlanta', quantity: 60 }]
    }
]



// Q1. Return only documents that have a name field.
// db.products.find({'name':{$exists:true}})


// Q2. COunt total number of products per category.
// db.products.aggregate([
//  { $group: { _id:'$category.main',TotalProducts:{$sum:1} } }
//  ])


// Q3. find all product where isActive = True
// db.products.aggregate([
// { $match : { isActive : true } } 
// ])


// Q4. get all products with price > 1000
// db.products.aggregate([ { $match : { price : { $gt : 1000 } }} ])


// Q5. Sort products by price descending.
// or if price exist then sort
// db.products.aggregate([ { $match : { price : { $exists : true } }}, { $sort : { price : -1 } } ])


// Q6. Return only:
// name
// brand
// price
// db.products.aggregate([ { $project: { name: 1, brand: 1, price: 1} }] )


// Q7. Count how many products belong to "Footwear".
// db.products.aggregate([ { $group: { _id: '$category', TotalProducts: { $sum: 1 } } }] )


// Q8. Find products created in February 2024.
// db.products.aggregate([ { $match : { createdAt : { $gt : new Date('2024-02-01T00:00:00.000Z') , $lt : new Date('2024-03-01T00:00:00.000Z') } } }


// Q9. Calculate average price per category. 
// db.products.aggregate([ { $group: { _id: '$category', AveragePrice: { $avg: '$price' } } }] )


// Q10. Find the most expensive product in each category. 
// db.products.aggregate([ { $group: { _id: '$category', maxPrice: { $max: '$price' } } }] )


// Q11. Count how many products each brand has.
// db.products.aggregate([ { $group: { _id: '$brand', TotalProduct: { $sum: 1 } } }] )


// Q12. Calculate total stock per category.
// db.products.aggregate([
// { $group : { _id:'$category',totalStock: { $sum : '$stock' } } }
// ])




// Q13. Unwind warehouse Locations and calculate total quantity across all cities.
// db.products.aggregate([ 
//  { $unwind: "$warehouseLocations" }, 
//  { $group: { _id: '$warehouseLocations.city', 
//              TotalQuantites: { $sum: '$warehouseLocations.quantity' } 
//             } 
//  }])


// Q14. Find products that are stored in "Miami" warehouse.
//  db.products.aggregate([ { $unwind: '$warehouseLocations' }, { $match: { 'warehouseLocations.city': 'Miami' } }, { $project: { name: 1, 'warehouseLocations.city': 1 } }] )
//  if you want to rename the field of city
// db.products.aggregate([ { $unwind: '$warehouseLocations' }, { $match: { 'warehouseLocations.city': 'Miami' } }, { $project: { name: 1, city : '$warehouseLocations.city' } }] )


// Q15. Find products that have empty ratings array.
// db.products.aggregate([{ $match: { ratings: { $size: 0 } } }] )


// Q16. Find products that do NOT have a price field.
// db.products.aggregate([ { $match : { price : { $exists : true } } }])


// Q17. Find inactive products grouped by category.
// db.products.aggregate([
//  { $match : {isActive:false} },
//  { $group : {_id:'$category'} }
//  ])



// Q18. Count how many products have at least one variant.
//  db.products.aggregate([ { $match: { 'variants.1': { $exists: true } } }] )
// or
// db.products.find({$expr: { $gt : [{$size:'$variants'},1] }},{variants:1,name:1})




// ARRAY + UNWIND PRACTICE
// 19. Unwind ratings and calculate:
// average rating per product




// 20. Find the highest-rated product.

// 21. Calculate total number of reviews per product.

// 22. Unwind variants and calculate total variant stock per product.

// 23. Find products where variant stock is greater than main stock.

// 24. Find products that have more than one warehouse location.

// 25. Count total products stored in each city.

