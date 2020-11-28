import { USER_REGISTER_FAIL,USER_REGISTER_SUCCESS,USER_REGISTER_REQUEST,USER_LOGIN_FAIL,
   USER_LOGOUT,USER_LOGIN_SUCCESS,USER_LOGIN_REQUEST, USER_LOAD_REQUEST, USER_LOAD_SUCCESS } from '../actions/constants'
const userState={
    loading:false,
    userInfo:null,
    error:null,
    isAuthenticated:false
}

export default function user(state=userState,action){
    switch (action.type) {
        case USER_REGISTER_REQUEST:
        case USER_LOAD_REQUEST:    
            return{
                ...state,
                loading:true
            }
            
        case USER_REGISTER_SUCCESS:
        case USER_LOAD_SUCCESS:    
            return{
                ...state,
                loading:false,
                userInfo:action.payload,
                isAuthenticated:true,
                error:{}
            }   
            case USER_LOGIN_REQUEST:
            return{
                ...state,
                loading:true
            }
        case USER_LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                userInfo:action.payload,
                isAuthenticated:true
            }  
        case USER_LOGOUT:
        case USER_LOGIN_FAIL:
        case USER_REGISTER_FAIL:        
            localStorage.removeItem("userInfo");
            localStorage.removeItem("persist:root")
            return{
                ...state,
                loading:false,
                userInfo:null,
                isAuthenticated:false,
                error:action.payload   
            }     
           
          
    
    
        default:
            return state;
    }
}

