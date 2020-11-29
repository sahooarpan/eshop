import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { placeOrder } from "../actions/order";
import { updateProducts } from "../actions/product";

const Payment = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { totalPrice, cartItems } = cart;
  const dispatch = useDispatch();
  const [deliverySlot, setDeliverySlot] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const handlePayment = (e) => {
    e.preventDefault();
    dispatch(
      placeOrder({
        orderItems: cartItems,
        paymentMethod,
        deliverySlot,
        totalPrice,
      })
    );
    dispatch(updateProducts({ cartItems }));
    history.push("/myorders");
  };
  return (
    <div className="payment-form d-flex justify-content-center">
      <form
        className="bg-light form-container"
        onSubmit={(e) => handlePayment(e)}
      >
        <h6 className="display-5 mb-4 text-primary">
          Please fill payment and delivery slot details
        </h6>
        <div className="d-flex">
          <label class="radio-inline mr-2">
            <input
              className="mr-1"
              onChange={(e) => setDeliverySlot(e.target.value)}
              value="Morning"
              type="radio"
              name="slot"
            />
            Morning
          </label>
          <label class="radio-inline mr-2">
            <input
              className="mr-1"
              type="radio"
              onChange={(e) => setDeliverySlot(e.target.value)}
              value="Noon"
              name="slot"
            />
            Noon
          </label>
          <label class="radio-inline mr-2">
            <input
              type="radio"
              className="mr-1"
              name="slot"
              onChange={(e) => setDeliverySlot(e.target.value)}
              value="Evening"
            />
            Evening
          </label>
        </div>
        <div className="d-flex mt-3">
          <label class="radio-inline mr-2">
            <input
              className="mr-1"
              type="radio"
              onChange={(e) => setPaymentMethod(e.target.value)}
              value="Paytm"
              name="paymentmethod"
            />
            Paytm
          </label>
          <label class="radio-inline mr-2">
            <input
              className="mr-1"
              type="radio"
              name="paymentmethod"
              onChange={(e) => setPaymentMethod(e.target.value)}
              value="Cash on Delivery"
            />
            Cash on Delivery
          </label>
        </div>
        <div className="d-flex mt-4 justify-content-between">
          <button
            onClick={() => history.push("/checkout")}
            class="btn btn-danger"
          >
            Return
          </button>
          <button type="submit" class="btn btn-primary">
            Pay {totalPrice}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
