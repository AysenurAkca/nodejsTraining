const express = require('express')
const productsController = require('../controller/productsController')
const route = express.Router()

route.get('/products', productsController.getProducts)
route.get('/products/:id', productsController.getDetails)
route.get('/products/newProduct', productsController.newPage)

module.exports= route;