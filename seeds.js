const mongoose = require('mongoose');
const Product = require('./models/product') 
require('dotenv').config()
mongoose.connect(process.env.DBURI)
.then(()=> console.log('Connected the database'))
.catch(err => console.log('oh no connection error'))

// const p = new Product({
//     name:'apple',
//     price: 1.99,
//     category : 'fruit'
// })

// p.save()
// .then((result) => console.log(result))
// .catch(e=> console.log(e))

// const seedProducts = [
//     {name:'orange', price:1.50, category : 'fruit'},
//     {name:'banana', price:0.50, category : 'fruit'},
//     {name:'lettuce', price:1.50, category : 'vegetable'},
//     {name:'yogurth', price:3.50, category : 'dairy'},
// ]

// Product.insertMany(seedProducts)
// .then((result) => console.log(result))
// .catch(e=> console.log(e))