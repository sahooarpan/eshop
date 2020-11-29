import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "./userReducer";
import products from "./productReducer";
import cart from "./cartReducer";
import order from "./orderReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart"],
};

const rootReducer = combineReducers({
  auth,
  products,
  cart,
  order,
});

export default persistReducer(persistConfig, rootReducer);
