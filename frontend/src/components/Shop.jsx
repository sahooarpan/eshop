import React, { useEffect } from "react";
import { getProducts } from "../actions/product";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import Alert from "./Alert";

const Shop = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);
  const { products, loading } = product;
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      <Alert />
      <div className="row">
        {products &&
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Shop;
