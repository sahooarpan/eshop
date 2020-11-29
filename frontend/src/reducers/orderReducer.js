import { ORDER_CREATE_REQUEST,ORDER_CREATE_SUCCESS,ORDER_CREATE_FAIL, MY_ORDERS_REQUEST, MY_ORDERS_SUCCESS, MY_ORDERS_FAIL, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_ERROR } from '../actions/constants'

const initialState={
    loading:false,
    order:null,
    orders:[],
    error:null
}

export default function orderReducer(state=initialState,action){

    const { type,payload } = action;
    switch (type) {
        case ORDER_CREATE_REQUEST:
        case GET_ORDER_REQUEST:    
            return{
                ...state,
                loading:true
            }
        case ORDER_CREATE_SUCCESS:
        case GET_ORDER_SUCCESS:    
                return{
                    ...state,
                    loading:false,
                    order:payload
                }
        case ORDER_CREATE_FAIL:
        case GET_ORDER_ERROR:    
            return{
                ...state,
                loading:false,
                error:payload
            }          
        case MY_ORDERS_REQUEST:
            return{
                ...state,
                loading:true
            }      
        case MY_ORDERS_SUCCESS:
            return{
                ...state,
                loading:false,
                orders:payload
            }    
            
        case MY_ORDERS_FAIL:
            return{
                ...state,
                error:payload,
                loading:false
            }
    
        default:
            return state
            
    }


}
