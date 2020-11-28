import Axios from 'axios'
import { GET_PRODUCTS_FAIL,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_REQUEST } from './constants'
export const getProducts=()=>async dispatch=>{
    try {
        dispatch({type:GET_PRODUCTS_REQUEST})
        const { data } = await Axios.get(`/api/products`);
        dispatch({
            type:GET_PRODUCTS_SUCCESS,
            payload:data
        })

    } catch (error) {
        dispatch({
            type:GET_PRODUCTS_FAIL,
            payload:error.message
        })
        
    }
}