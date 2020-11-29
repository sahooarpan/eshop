import Axios from "axios";
import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_REQUEST,
  UPDATE_PRODUCTS_REQUEST,
  UPDATE_PRODUCTS_SUCCESS,
  UPDATE_PRODUCTS_FAIL,
} from "./constants";
export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_REQUEST });
    const { data } = await Axios.get(`/api/products`);
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload: error.message,
    });
  }
};

export const updateProducts = ({ cartItems }) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRODUCTS_REQUEST });
    const { data } = await Axios.put("/api/products", { cartItems });
    dispatch({
      type: UPDATE_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCTS_FAIL,
      payload: error.message,
    });
  }
};
