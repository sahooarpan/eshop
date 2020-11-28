const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
      orderItems: [
        {
          name: { type: String, required: true },
          qty: { type: Number, required: true },
          image: { type: String, required: true },
          price: { type: Number, required: true },
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
          },
        },
      ],
      paymentMethod: { type: String, required: true },
      deliverySlot:{type:String,required:true},
      totalPrice: { type: Number, required: true },
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    }
    
  );
const orderModel = mongoose.model("Order", orderSchema);
module.exports= orderModel;