import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import CheckOutItem from './CheckOutItem';


const CheckOut = () => {
    
    const cart = useSelector(state=>state.cart);
    const { cartItems } = cart;
    const [total,setTotal]=useState(0);
    useEffect(() => {
        setTotal(cartItems.reduce((accumulatedSum,cartItem)=>accumulatedSum+cartItem.quantity*cartItem.price,0))
        
    }, [cartItems])
    return (
        <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Name</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>

    </div>
    {cartItems.map(cartItem=>(
        <CheckOutItem cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL:{total}</div>
    </div>
    
    )
}

export default CheckOut
