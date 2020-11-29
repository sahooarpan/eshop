import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckOutItem from "./CheckOutItem";
import { totalPriceCart } from "../actions/cart";

const CheckOut = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = cart;
  useEffect(() => {
    dispatch(totalPriceCart());
  }, [cartItems,dispatch]);
  return (
    <div className="checkout-page container mt-4">
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
      </table>
      {cartItems.map((cartItem) => (
        <CheckOutItem cartItem={cartItem} />
      ))}
      <div className="total">
        <h5>TOTAL:{totalPrice}</h5>
        <button
          disabled={cartItems.length===0}  
          onClick={() => history.push("/payment")}
          className="btn btn-primary"
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
