import React from 'react'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../actions/cart'
const Product = ({product}) => {
    console.log(product)
    const dispatch = useDispatch()
    const handleClick=()=>{
        dispatch(addItemToCart(product))
    }
    return (
        <div className="card mt-4 post-dashboard">
            <img className="card-img-top card-image" src={product.image} alt={product._id}/>
            <div className="card-body">
            <h4 className="text-success mt-2 search-name card-title">
       {product.name}
    </h4>
    <h4 className="text-primary mt-2 search-name card-text">
      Qunatity in Stock: {product.quantity_available}
    </h4>
    <button disabled={product.quantity_available<=0} onClick={handleClick} className="btn btn-warning mt-3 btn-block">Add to Cart</button>
            </div>
        </div>
    )
}

export default Product
