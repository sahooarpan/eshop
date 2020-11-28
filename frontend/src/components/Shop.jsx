import React,{ useEffect } from 'react'
import { getProducts } from '../actions/product'
import { useDispatch,useSelector } from 'react-redux'
import Product from './Product'

const Shop = () => {
    const dispatch = useDispatch();
    const product = useSelector(state=>state.products)
    const { products,loading } = product;
    console.log(products,"prdcts")
    useEffect(()=>{
        dispatch(getProducts());
                
    },[]);

    useEffect(()=>{
        console.log(products,"products")
    },[products])

return loading ? <div>Loading...</div> :
<div className="container">
    <div className="row">
     {products && products.map(product=>( 
            
                
                    <Product key={product._id} product={product}/>
                

            
            

            
    ))}
    </div>
    </div>
    
}

    
        

export default Shop
