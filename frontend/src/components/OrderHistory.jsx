import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyOrders } from "../actions/order";
import Alert from "./Alert";

const OrderHistory = ({ history }) => {
  const order = useSelector((state) => state.order);
  const { loading, orders } = order;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyOrders());
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading..</div>
      ) : (
        <div className="container">
          <Alert />
          <h3 className="mt-3">Your Order History</h3>
          <div class="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">PAYMENT METHOD</th>
                  <th scope="col">DELIVERY SLOT</th>
                  <th scope="col">TOTAL PRICE</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 ? (
                  <p className="text-center text-primary mt-2">
                    Currently your orders is 0 in GeeksGrocery
                  </p>
                ) : (
                  orders.map((order) => (
                    <tr key={order._id}>
                      <td>{order._id}</td>
                      <td>{order.paymentMethod}</td>
                      <td>{order.deliverySlot}</td>
                      <td>{order.totalPrice}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => {
                            history.push(`/order/${order._id}`);
                          }}
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
