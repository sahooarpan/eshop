import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../actions/user";
import { withRouter } from "react-router-dom";
import Alert from "./Alert";
const SignIn = ({ history }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push("/shop");
    }
  }, [auth]);

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <ul className="form-container">
          <li>
            <h2 className="text-center">Sign In</h2>
          </li>

          <Alert />

          <li>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <li>
            <button
              disabled={email === "" || password === ""}
              className="button primary text-center"
              type="submit"
            >
              Sign In
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default withRouter(SignIn);
