import {
  EMPTY_CART,
  GET_ORDER_ERROR,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  MY_ORDERS_FAIL,
  MY_ORDERS_REQUEST,
  MY_ORDERS_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
} from "./constants";
import Axios from "axios";

export const placeOrder = ({
  orderItems,
  paymentMethod,
  deliverySlot,
  totalPrice,
}) => async (dispatch) => {
  dispatch({ type: ORDER_CREATE_REQUEST });
  try {
    console.log("slott", deliverySlot);
    const { data } = await Axios.post(`/api/orders`, {
      orderItems,
      paymentMethod,
      deliverySlot,
      totalPrice,
    });
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data.order,
    });
    dispatch({ type: EMPTY_CART });
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: error.message,
    });
  }
};

export const getOrder = (id) => async (dispatch) => {
  dispatch({
    type: GET_ORDER_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/orders/${id}`);
    dispatch({
      type: GET_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ORDER_ERROR,
      payload: error.message,
    });
  }
};

export const getMyOrders = () => async (dispatch) => {
  dispatch({
    type: MY_ORDERS_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/orders`);
    dispatch({
      type: MY_ORDERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MY_ORDERS_FAIL,
      payload: error.message,
    });
  }
};
