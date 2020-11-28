import { GET_PRODUCTS_FAIL,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_REQUEST } from '../actions/constants'

const initialState={
    products:[],
    loading:false,
    error:null
}

export default function productReducer(state=initialState,action){

    const { type,payload } = action;
    switch (type) {
        case GET_PRODUCTS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case GET_PRODUCTS_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    products:payload
                }
        case GET_PRODUCTS_FAIL:
            return{
                ...state,
                loading:false,
                error:payload
            }            
            
        
    
        default:
            return state
            
    }


}