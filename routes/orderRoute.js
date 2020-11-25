const express = require('express');
const orderRouter = express.Router();
const { isAuth  } = require('../utils')
const Order = require('../models/orderModel')

orderRouter.post('/',isAuth,async(req,res)=>{
    const order = new Order({
        orderItems:req.body.orderItems,
        paymentMethod:req.body.paymentMethod,
        itemsPrice:req.body.itemsPrice,
        shippingPrice:req.body.shippingPrice,
        taxPrice:req.body.taxPrice,
        totalPrice:req.body.totalPrice,
        user:req.user._id
        
    })
    const savedOrder = await order.save();
    res.status(200).json({
        order:savedOrder
    })
});

module.exports=orderRouter;