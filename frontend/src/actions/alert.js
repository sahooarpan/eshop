import { v4 } from "uuid";
import { SET_ALERT, DELETE_ALERT } from "./constants";

export const setAlert = (msg, alertType) => (dispatch) => {
  console.log(msg);
  const id = v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(() => dispatch({ type: DELETE_ALERT, payload: id }), 2500);
};
