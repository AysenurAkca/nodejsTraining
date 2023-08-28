const Product = require('../models/product')
const getProducts = async (req,res)=> {
    const products = await Product.find()
    res.render('index', {products})
}

const getDetails = async (req,res) => {
    const {id} = req.params;
    const theProduct = await Product.findById(id)
    res.render('details', {theProduct})
}
const newPage = (req,res)=> {
    res.render('newProduct')
}



module.exports = {
    getProducts,
    getDetails,
    newPage
   
}