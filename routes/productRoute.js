const express = require('express');
const productRoute = express.Router();
const Product = require('../models/productModel');
const { isAuth } = require('../utils');


productRoute.post('/',isAuth,async(req,res)=>{
    const product = new Product({
        name:req.body.name,
        image:req.body.image,
        price:req.body.price,
        quantity_available:req.body.quantity_available
    })

    const savedProduct = await product.save();

    res.status(200).json({
        product:savedProduct
    })


})

productRoute.get('/',isAuth,async(req,res)=>{
    const products = await Product.find();
    res.send(products)
})

module.exports=productRoute
