const User = require('../models/userModel');
const express = require('express')
const bcrypt = require('bcryptjs')
const { generateToken } = require('../utils')

const userRouter = express.Router();
userRouter.post('/signup',async(req,res)=>{
    if(req.body.password!==req.body.confirmPassword){
        res.status(401).json({message:"Password and Confirm Password must be same!"});
    }
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password: bcrypt.hashSync(req.body.password,8),
        confirmPassword:bcrypt.hashSync(req.body.confirmPassword,8)
    })

    const createdUser = await user.save();
    res.send({
        _id:createdUser._id,
        name:createdUser.name,
        email:createdUser.email,
        password:createdUser.password,
        confirmPassword:createdUser.confirmPassword,
        token:generateToken(createdUser)
    })
})


userRouter.post('/signin',async(req,res)=>{
    try {
        
    const user = await User.findOne({email:req.body.email});
    if(user){
        const bool =await bcrypt.compare(req.body.password,user.password);
        if(bool){
            res.send({
                _id:user._id,
                name:user.name,
                email:user.email,
                token:generateToken(user)

            })
        }
    }   
    } catch (error) {
     res.status(500).send(error.message)   
    }
})


module.exports=userRouter;