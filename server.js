const express = require('express')
const app = express();
const connectDB = require('./config/db')
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userRoute =require('./routes/userRouter')
const productRoute =require('./routes/productRoute')
const orderRoute =require('./routes/orderRoute')


connectDB(); 
dotenv.config();
app.use(bodyParser.json());
app.use('/api/user',userRoute);
app.use('/api/products',productRoute);
app.use('/api/orders',orderRoute);
app.listen('3000',()=>{
    console.log(`Server started`)
});