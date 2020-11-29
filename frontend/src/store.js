import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
const initialState = {};

const middleWare = [thunk];
middleWare.push(logger);

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);
export const persistor = persistStore(store);
