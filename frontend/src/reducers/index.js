import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import auth from './userReducer'
import products from './productReducer'
import cart from './cartReducer'
const persistConfig = {
    key:"root",
    storage,
    whitelist:['auth']
}


const rootReducer =combineReducers({
    auth,
    products,
    cart
});

export default persistReducer(persistConfig,rootReducer);