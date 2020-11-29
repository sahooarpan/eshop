import React, { useEffect } from "react";
import { getOrder } from "../actions/order";
import { useDispatch, useSelector } from "react-redux";

const OrderScreen = ({ match }) => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrder(match.params.id));
  }, [dispatch,match.params.id]);

  return orderState && orderState.loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      <div className="card mt-2">
        <div className="card-body">
          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {orderState &&
                orderState.order &&
                orderState.order.orderItems &&
                orderState.order.orderItems.map((orderItem) => (
                  <tr>
                    <th scope="row">{orderItem._id}</th>
                    <td>{orderItem.name}</td>
                    <td>{orderItem.price}</td>
                    <td>{orderItem.quantity}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="card mt-2 container">
        <div className="d-flex">
          <h5 className="mr-4">Price</h5>
          <h5 className="text-danger">
            {orderState && orderState.order && orderState.order.totalPrice}
          </h5>
        </div>
        <div className="d-flex">
          <h5 className="mr-4">Payment Method</h5>
          <h5 className="text-danger">
            {orderState && orderState.order && orderState.order.paymentMethod}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
