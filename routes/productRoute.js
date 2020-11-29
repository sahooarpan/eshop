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


productRoute.put('/',isAuth,async(req,res)=>{
    try {
        console.log('put')
        const { cartItems } = req.body;
        console.log(cartItems)
        for(let cartItem of cartItems){
            console.log(cartItem)
            cartItem.quantity_available-=cartItem.quantity
            console.log(cartItem._id,cartItem.quantity_available)
            await Product.update({_id:cartItem._id},{quantity_available:cartItem.quantity_available},{multi:true})
        }
        const products = await Product.find();
        console.log("updated")
        res.send(products)
    
        
    } catch (error) {
        console.log(error.message)
    }
})



module.exports=productRoute
