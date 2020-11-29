const express = require('express');
const orderRouter = express.Router();
const { isAuth  } = require('../utils')
const Order = require('../models/orderModel')

orderRouter.get('/',isAuth,async(req,res)=>{
    console.log('1')
    try {
        console.log(req.user)
        const  data  = await Order.find({ user: req.user._id });
        console.log(data);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

orderRouter.get('/:id',isAuth,async(req,res)=>{
    console.log('1')
    try {
        
        const  data  = await Order.findById({ _id:req.params.id });
        console.log(data);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

orderRouter.post('/',isAuth,async(req,res)=>{
    try {
        const order = new Order({
            orderItems:req.body.orderItems,
            paymentMethod:req.body.paymentMethod,
            deliverySlot:req.body.deliverySlot,
            totalPrice:req.body.totalPrice,
            user:req.user._id
            
        })
        const savedOrder = await order.save();
        console.log(savedOrder)
        res.status(200).json({
            order:savedOrder
        })    
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);        
    }
    
});

module.exports=orderRouter;