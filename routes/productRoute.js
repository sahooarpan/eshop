const express = require('express');
const productRoute = express.Router();
const Product = require('../models/productModel')


productRoute.post('/',async(req,res)=>{
    const product = new Product({
        name:req.body.name,
        image:req.body.image,
        price:req.body.price,
        category:req.body.category
    })

    const savedProduct = await product.save();

    res.status(200).json({
        product:savedProduct
    })


})

productRoute.get('/',async(req,res)=>{
    const products = await Product.find();
    res.json({products})
})

module.exports=productRoute
