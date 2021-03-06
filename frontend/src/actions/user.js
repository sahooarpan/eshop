import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOGOUT,
  USER_LOAD_FAIL,
} from "./constants";
import axios from "axios";
import { setAlert } from "./alert";
import { EMPTY_CART } from "./constants";

export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST });
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/users/signup",
      {
        name,
        email,
        password,
      }
    );
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch(setAlert("Email already exists", "alert-danger"));
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/users/signin",
      {
        email,
        password,
      }
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log("Sign In Failed");
    dispatch(setAlert("Invalid Email or Password!", "alert-danger"));
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: "Invalid Email or Password!",
    });
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: EMPTY_CART });
  dispatch({ type: USER_LOGOUT });
};

export const userLoad = () => async (dispatch) => {
  dispatch({ type: USER_LOAD_REQUEST });
  try {
    const { data } = await axios.get("/api/users");
    dispatch({
      type: USER_LOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LOAD_FAIL,
      payload: error.message,
    });
  }
};
