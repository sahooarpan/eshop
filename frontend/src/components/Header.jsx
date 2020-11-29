import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../actions/user";
import { getTotalItemInCart } from "../actions/cart";
const Header = () => {
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const { cartItems, totalItems } = cart;
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  useEffect(() => {
    dispatch(getTotalItemInCart());
  }, [cartItems, dispatch]);

  return (
    <header className="row mb-4">
      <div>
        <Link className="header-link brand" to="/">
          GeeksGrocery
        </Link>
      </div>
      {auth.userInfo ? (
        <div className="cart-items">
          <Link to="/checkout" className="cart">
            <i class="fas fa-shopping-cart mr-2"></i>
            <span class="badge badge-light">{totalItems}</span>
          </Link>

          <Link className="header-link" to="/myorders">
            {auth.userInfo.name}
          </Link>
          <Link onClick={handleLogOut} className="header-link">
            Sign Out
          </Link>
        </div>
      ) : (
        <div>
          <Link className="header-link" to="/">
            Register
          </Link>
          <Link to="/signin" className="header-link">
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
